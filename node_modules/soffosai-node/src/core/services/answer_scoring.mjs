import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {AnswerScoringIO} from '../../common/serviceio_fields/index.mjs';
import {InputConfig} from './input_config.mjs';

/** 
 * This module will mark the user's answer based on the provided context, the question and, 
 * optionally, the expected correct answer. Typical string similarity methods often fail to accurately 
 * capture the similarity in meaning and semantics, especially in cases where a single word can alter 
 * the entire meaning of a sentence. This module not only addresses this issue, but the fact that the 
 * underlying AI understands the context and question also enables it to evaluate an answer even if 
 * the expected correct answer is not provided. However, when provided, the evaluation will give it 
 * more weight than the information in the context.

 * The score is a value between 0 and 1, with 0 being completely wrong and 1 being perfectly accurate. 
 * Additionally, the reasoning behind the score is provided.

 * The Answer Scoring module is a perfect fit to supplement the Q&A generation module by marking 
 * users' answers to AI-generated question-answer pairs. Together they can power a wide range of 
 * educational and retention-assessment applications.
 * @class
 * @alias SoffosServices.AnswerScoringService
*/
class AnswerScoringService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.ANSWER_SCORING;
      super(service, kwargs);
      this._serviceio = new AnswerScoringIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     *                        the api is an application (app) and that app has users. Soffos API will accept 
     *                        any string.
     * @param {string} context -  This should be the passage with the information that is related to the 
     *                            question and answer.
     * @param {string} question - The question to answer.
     * @param {string} user_answer - The user's answer which will be marked.
     * @param {string} [answer] - Optionally provide the expected answer.
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>}
     * score - float <br>
     * A value between 0 and 1 indicating the correctness of the answer.<br>
     * reasoning string - A concise explanation of how the AI arrived to the predicted score. <br>
     * @example
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.AnswerScoringService({apiKey:my_apiKey});
     * let response = await service.call(
     *     "client 12345678",
     *     "Genetic evidence suggests that dogs descended directly from wolves (Canis) and that the now-extinct wolf lineages that produced dogs branched off from the line that produced modern living wolves sometime between 27,000 and 40,000 years ago. The timing and location of dog domestication is a matter of debate. There is strong genetic evidence, however, that the first domestication events occurred somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
     *     "How long ago did dogs first become domesticated?",
     *     "around 20,000 years ago.",
     *     "Between 14,000 and 29,000 years ago."
     * );
     * console.log(JSON.stringify(response, null, 2));
     * 
     * // returns
     * // {
     * //     "score": 0.8,
     * //     "reasoning": "The user's answer is close to the correct answer, but not exact. The correct answer is between 14,000 and 29,000 years ago, while the user's answer is around 20,000 years ago. Although the user's answer falls within the correct range, it is not as precise as the correct answer.",
     * //     "cost": {
     * //       "api_call_cost": 0.005,
     * //       "character_volume_cost": 0.02855,
     * //       "total_cost": 0.03355
     * //     },
     * //     "charged_character_count": 571,
     * //     "unit_price": "0.000050"
     * // }
     */
    call(user, context, question, user_answer, answer=null, engine=null) {
      let payload = {
        "user": user,
        "context": context,
        "question": question,
        "user_answer": user_answer,
      };
      if (answer) payload.answer = answer
      if (engine) payload.engine = engine;
      return super.call(payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} context - This should be the passage with the information that is related to the question and answer.
     * @param {string|InputConfig} question - The question to answer.
     * @param {string|InputConfig} user_answer - The user's answer which will be marked.
     * @param {string|InputConfig} [answer=null] - Optionally provide the expected answer.
     * @param {string} [engine=null] - The LLM engine to be used.
     */
    setInputConfigs(name, context, question, user_answer, answer=null, engine=null) {
      let source = {
          context: context,
          question: question,
          user_answer: user_answer
      }
      if(answer) source.answer = answer;
      if (engine) source.engine = engine;
      
      return super.setInputConfigs(name, source);
  }
}

export default AnswerScoringService
