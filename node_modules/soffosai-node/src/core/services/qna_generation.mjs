import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {QuestionAndAnswerGenerationIO} from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


/**
 * The Q&A Generation module splits large documents in chunks from which it generates multiple 
 * question-answer pairs. The chunk length is configurable. Usually more questions can be generated
 * when segmenting the text to smaller chunks, while longer chunks help retain more context, in cases 
 * where a topic is discussed over multiple sentences in the context. To address cases where the topic 
 * is split mid-way, the module supports overlapping the chunks by a configurable amount of sentences. 
 * This gives a lot of flexibility to cater to your specific use case.
 * @class
 * @alias SoffosServices.QuestionAndAnswerGenerationService
 */
class QuestionAndAnswerGenerationService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.QUESTION_AND_ANSWER_GENERATION;
      super(service, kwargs);
      this._serviceio = new QuestionAndAnswerGenerationIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - The input text from which the question-answer pairs will be generated.
     * @param {number} [sentence_split=3] - The number of sentences of each chunk when splitting the input text.
     * @param {boolean} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
     * For example, with sentence_split 3 and sentence_overlap=true :
     * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     * qna_list - dictionary list <br>
     * A list of dictionaries representing question-answer pairs. Each dictionary contains the fields question, answer and chunk_index which is the index of the chunk the question-answer pair was generated from. chunk_index maps to the chunk with the same value in the key index.<br>
     * chunks - dictionary list <br>
     * A list of dictionaries representing the chunks as they were split from the original according to the splitting parameters given in the request. Each dictionary contains the fields text, index as well as the span_start and span_end fields which are the starting and ending position of the chunk in the originally provided text.
     * @example
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.QuestionAndAnswerGenerationService({apiKey:my_apiKey});
     * let response = await service.call(
     *     "me again",
     *     "AI and specifically NLP is a very powerful component to any application that makes \
     *     it powerful, interesting and creative. However, implementing the NLP components can \
     *     sometimes be hard, or very costly in cases where an NLP engineering team has to be \
     *     hired to build it. Especially, since NLP keeps evolving at an absurd rate, it might \
     *     be impossible for a developer to keep up with the advancements in terms of work that \
     *     needs to be done or money that need to be spent to keep their NLP at a state where it \
     *     can compete with similar apps out there. Here at Soffos we have packaged several \
     *     high-level functionalities as modules, some of which require multiple types of NLP and \
     *     complex logic, for developers to use out-of-the-box, as is, removing the need to develop \
     *     it themselves. Moreover, Soffos continuously updates their modules to match the state of \
     *     the art. Developers will never need to maintain any AI/NLP related component of their \
     *     application. All they need is to be creative, come up with ideas, and combine our modules \
     *     however they desire to come up with amazing intelligent applications."
     * );
     * console.log(JSON.stringify(response, null, 2));
     *     
     * // returns
     * // {
     * //     "qna_list": [
     * //       {
     * //         "question": "What is NLP?",
     * //         "answer": "NLP stands for Natural Language Processing, which is a branch of Artificial Intelligence that deals with understanding and generating human language.",
     * //         "chunk_index": 0
     * //       },
     * //       {
     * //         "question": "What makes NLP powerful?",
     * //         "answer": "NLP is powerful because it can understand and generate human language, which makes it a powerful component to any application.",
     * //         "chunk_index": 0
     * //       },
     * //       {
     * //         "question": "What can be difficult about implementing NLP components?",
     * //         "answer": "Implementing NLP components can be difficult because it can be hard to keep up with the advancements in terms of work that needs to be done or money that need to be spent to keep their NLP at a state where it can compete with similar apps out there.",
     * //         "chunk_index": 0
     * //       },
     * //       {
     * //         "question": "What does Soffos offer developers?",
     * //         "answer": "Soffos offers developers high-level functionalities packaged as modules, which require multiple types of NLP and complex logic, for developers to use out-of-the-box, as is, removing the need to develop it themselves.",
     * //         "chunk_index": 1
     * //       },
     * //       {
     * //         "question": "Does Soffos maintain AI/NLP related components?",
     * //         "answer": "Yes, Soffos continuously updates their modules to match the state of the art and developers will never need to maintain any 
     * //   AI/NLP related component of their application.",
     * //         "chunk_index": 1
     * //       },
     * //       {
     * //         "question": "What is required to create intelligent applications?",
     * //         "answer": "Creativity, ideas, and the ability to combine modules.",
     * //         "chunk_index": 2
     * //       }
     * //     ],
     * //     "chunks": [
     * //       {
     * //         "text": "AI and specifically NLP is a very powerful component to any application that makes it powerful, interesting and creative. However, implementing the NLP components can sometimes be hard, or very costly in cases where an NLP engineering team has to be hired to build it. Especially, since NLP keeps evolving at an absurd rate, it might be impossible for a developer to keep up with the advancements in terms of work that needs to be done or money that need to be spent to keep their NLP at a state where it can compete with similar apps out there.",  
     * //         "span_start": 0,
     * //         "span_end": 545,
     * //         "index": 0
     * //       },
     * //       {
     * //         "text": "Here at Soffos we have packaged several high-level functionalities as modules, some of which require multiple types of NLP and complex logic, for developers to use out-of-the-box, as is, removing the need to develop it themselves. Moreover, Soffos continuously updates their modules to match the state of the art. Developers will never need to maintain any AI/NLP related component of their application.",   
     * //         "span_start": 546,
     * //         "span_end": 949,
     * //         "index": 1
     * //       },
     * //       {
     * //         "text": "All they need is to be creative, come up with ideas, and combine our modules however they desire to come up with amazing intelligent applications.",
     * //         "span_start": 950,
     * //         "span_end": 1096,
     * //         "index": 2
     * //       }
     * //     ],
     * //     "cost": {
     * //       "api_call_cost": 0.005,
     * //       "character_volume_cost": 0.05945,
     * //       "total_cost": 0.06445
     * //     },
     * //     "charged_character_count": 1189,
     * //     "unit_price": "0.000050"
     * // }
     */
    call(user, text, sentence_split=3, sentence_overlap=false, engine=null) {
      let payload = {
        "user": user,
        "text": text,
        "sentence_split": sentence_split,
        "sentence_overlap": sentence_overlap
      };
      if (engine) payload.engine = engine;
      return super.call(payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} text - The input text from which the question-answer pairs will be generated.
     * @param {number|InputConfig} [sentence_split=3] - The number of sentences of each chunk when splitting the input text.
     * @param {boolean|InputConfig} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
     * For example, with sentence_split 3 and sentence_overlap=true :
     * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
     * @param {string} [engine=null] - The LLM engine to be used.
     */
    setInputConfigs(name, text, sentence_split=3, sentence_overlap=false, engine=null) {
      let source = {
        text: text,
        sentence_split: sentence_split,
        sentence_overlap: sentence_overlap
      };
      if (engine) source.engine = engine;
      
      return super.setInputConfigs(name, source);
    }
}

export default QuestionAndAnswerGenerationService
