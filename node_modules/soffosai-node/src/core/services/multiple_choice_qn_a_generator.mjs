import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import { MultipleChoiceQnAGeneratorIO } from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


/**
 * Accepts a context and generates Multiple-Choice Question and Answer sets
 * @class
 * @alias SoffosServices.MultipleChoiceQnAGeneratorService
 */
class MultipleChoiceQnAGeneratorService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.MULTIPLE_CHOICE_QN_A_GENERATOR;
      super(service, kwargs);
      this._serviceio = new MultipleChoiceQnAGeneratorIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.
     * This string will be used for throttling and profanity tracking.
     * Soffos assumes that the owner of the api is an application (app) and that app has users.
     * Soffos API will accept any string."
     * @param {string} context - the prompt to be sent to the LLM
     * @param {number} num_questions - the location of the image to be processed
     * @param {number} num_choices - the location of the image to be processed
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     * qna_sets - The question and answer sets
     * @example
     * Examples are available at "https://github.com/Soffos-Inc/soffosai-node/tree/master/samples"
     */
    call(user, context, num_questions, num_choices, engine=null) {
      let payload = {
        "user": user,
        "context": context,
        "num_questions": num_questions,
        "num_choices": num_choices
      };
      if (engine) payload.engine = engine;

      return super.call(payload);
    }


    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {(string|InputConfig)} context - the prompt to be sent to the LLM
     * @param {(number|InputConfig)} num_questions - the location of the image to be processed
     * @param {(number|InputConfig)} num_choices - the location of the image to be processed
     * @param {(string|InputConfig)} [engine=null] - The LLM engine to be used.
     */
    setInputConfigs(name, context, num_questions, num_choices, engine=null) {
      let source = {
        "context": context,
        "num_questions": num_questions,
        "num_choices": num_choices
      };
      if (engine) source.engine = engine;
      return super.setInputConfigs(name, source);
    }
}

export default MultipleChoiceQnAGeneratorService