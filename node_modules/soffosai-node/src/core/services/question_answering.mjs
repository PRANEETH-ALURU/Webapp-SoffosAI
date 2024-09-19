import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {QuestionAnsweringIO} from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';

/**
 * This module is a combination of various sub-modules that enable users to get accurate answers on 
 * questions posed on a large amount of content. It includes basic intent recognition capabilities 
 * to enable appropriate responses to incorrect or profane language, or typical personal questions 
 * like "How are you?" and greetings
 * @class
 * @alias SoffosServices.QuestionAnsweringService
 */
class QuestionAnsweringService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.QUESTION_ANSWERING;
      super(service, kwargs);
      this._serviceio = new QuestionAnsweringIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} question - The question
     * @param {string} [document_text] - The text to be used as the context to formulate the answer.
     * @param {Array.<string>} [document_ids] - A list of unique IDs referencing pre-ingested documents to be used as the context to formulate the answer.
     * @param {bool} [check_ambiguity=true] - When true, it checks whether the message contains a pronoun which is impossible to resolve and responds appropriately to avoid low quality or inaccurate answers. This is most useful when this module is used for conversational agents. For example:
     * "What was his most famous invention?"
     * Queries with pronouns that also contain the entity that the pronoun refers to are not rejected. For example:
     * "What was Tesla's most famous invention and when did he create it?"
     * In this case, the AI can infer that he refers to Tesla.
     * Set this to false only when getting the most relevant content as the answer has equal or higher importance than the question being rejected or the answer being ambiguous/inaccurate.
     * @param {string} [check_query_type=true] - When true, it will check whether the message is a natural language question, or whether it is a keyword query or a statement and respond appropriately if the message is not a question. The module is capable of returning a relevant answer to keyword or poorly formulated queries, but this option can help restrict the input.
     * Set to false only when you wish the module to attempt to answer the query regardless of its type or syntactical quality.
     * @param {string} [generic_responses=false] - In addition to checking for ambiguity or query type, this module performs other checks such as profanity, language, etc.. If the input query fails in one of these checks, it will reject the query by responding with a message that points out the issue.
     * When true, the module will respond with a generic message without giving the reason as to why the message was rejected, which is the same behavior as when it cannot find an answer to the query in the provided context.
     * @param {Object.<string, string>} meta
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     * answer - string<br>
     * The answer to the query. In cases where the query failed a check, and depending on the above explained parameters, this will be a message that indicates that an answer could not be retrieved. <br>
     * valid_query - boolean <br>
     * Boolean flag denoting whether the query failed a check. <br>
     * no_answer - boolean <br>
     * Boolean flag denoting that the query has passed the checks, but no answer for it was found in the context. <br>
     * message_id - string <br>
     * A unique ID representing the message and its associated prediction. <br>
     * passages - dictionary list <br> 
     * A list of objects representing the most relevant passages of the queried documents. The first step for generating an answer is finding the most relevant passages from a big knowledge base. The passages are matched with a combination of keyword and semantic similarity. Each passage has the following fields: <br>
     * text, document_name, document_id, scores: A dictionary containing the matching scores for either or both keyword, semantic. <br>
     * context - string <br>
     * The merged passages text.<br>
     * highlights - dictionary list<br>
     * A list of objects representing sentences within the context which are highly similar to the answer. Each dictionary has the following fields:<br>
     * span: A list with the start and end character index of the sentence within context.
     * sentence: The sentence text.<br>
     * @example
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.QuestionAnsweringService({apiKey:my_apiKey});
     * let response = await service.call(
     *     "client12345",
     *     "How would Soffos SDK help me as a programmer?",
     *     "The Soffos SDK simplifies the process of plugging Soffos APIs into your applications. \
     *     With reduced code requirements, you can seamlessly integrate powerful AI functionalities \
     *     like microlessons, named entity recognition, and more."
     * );
     * console.log(JSON.stringify(response, null, 2));
     *     
     * // returns
     * // {
     * //     "message_id": "43f354b0ef1040a7894cfd2260652d9e",
     * //     "answer": "The Soffos SDK would help you as a programmer by simplifying the process of plugging Soffos APIs into your applications and reducing code requirements. This would allow you to seamlessly integrate powerful AI functionalities like microlessons and named entity recognition.",
     * //     "context": "The Soffos SDK simplifies the process of plugging Soffos APIs into your applications.     With reduced code requirements, you can seamlessly integrate powerful AI functionalities     like microlessons, named entity recognition, and more.",
     * //     "valid_query": true,
     * //     "no_answer": false,
     * //     "highlights": [
     * //       {
     * //         "span": [
     * //           90,
     * //           237
     * //         ],
     * //         "sentence": "With reduced code requirements, you can seamlessly integrate powerful AI functionalities     like microlessons, named entity recognition, and more."
     * //       }
     * //     ],
     * //     "passages": [],
     * //     "cost": {
     * //       "api_call_cost": 0.005,
     * //       "character_volume_cost": 0.0141,
     * //       "total_cost": 0.0191
     * //     },
     * //     "charged_character_count": 282,
     * //     "unit_price": "0.000050"
     * // }
     *   
     */
    call(user, question, document_text=undefined, document_ids=undefined, 
        check_ambiguity=true, check_query_type=true, generic_responses=false, meta=undefined, engine=null) {
        let payload = {
          "user": user,
          "question": question,
          "check_ambiguity": check_ambiguity,
          "check_query_type": check_query_type,
          "generic_responses": generic_responses,
        };
        if (document_text) payload.document_text = document_text;
        if (document_ids) payload.document_ids = document_ids;
        if (meta) payload.meta = meta;
        if (engine) payload.engine = engine;
        payload['message'] = question;
        return super.call(payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} question - The question
     * @param {string|InputConfig} document_text - The text to be used as the context to formulate the answer.
     * @param {string[]|InputConfig} document_ids - A list of unique IDs referencing pre-ingested documents to be used as the context to formulate the answer.
     * @param {boolean|InputConfig} check_ambiguity - When true, it checks whether the message contains a pronoun which is impossible to resolve and responds appropriately to avoid low quality or inaccurate answers. This is most useful when this module is used for conversational agents. For example:
     * "What was his most famous invention?"
     * Queries with pronouns that also contain the entity that the pronoun refers to are not rejected. For example:
     * "What was Tesla's most famous invention and when did he create it?"
     * In this case, the AI can infer that he refers to Tesla.
     * Set this to false only when getting the most relevant content as the answer has equal or higher importance than the question being rejected or the answer being ambiguous/inaccurate.
     * @param {boolean|InputConfig} check_query_type - When true, it will check whether the message is a natural language question, or whether it is a keyword query or a statement and respond appropriately if the message is not a question. The module is capable of returning a relevant answer to keyword or poorly formulated queries, but this option can help restrict the input.
     * Set to false only when you wish the module to attempt to answer the query regardless of its type or syntactical quality.
     * @param {boolean|InputConfig} generic_responses
     * @param {object|InputConfig} meta
     * @param {string} [engine=null] - The LLM engine to be used.
     */
    setInputConfigs(name, question, document_text=undefined, document_ids=undefined, 
      check_ambiguity=true, check_query_type=true, generic_responses=false, meta=undefined, engine=null) {
      let source = {
        message: question, // special handling, message is unclear so question is used
        check_ambiguity: check_ambiguity,
        check_query_type: check_query_type,
        generic_responses: generic_responses,
        quesion: question
      };
      if (document_text) source.document_text = document_text;
      if (document_ids) source.document_ids = document_ids;
      if (meta) source.meta = meta;
      if (engine) source.engine = engine;
      return super.setInputConfigs(name, source);
    }
}

export default QuestionAnsweringService
