import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import { AssessmentGeneratorIO } from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


/**
 * Generates Assesments from a given context
 * ----------------------------------------------------- 
 * Accepts a context and
 * generates Assessments of types/modes: * Multiple Choice, * True or False, *
 * Fill in the Blanks * Short Answer
 * @class
 * @alias SoffosServices.AssessmentGeneratorService
 */
class AssessmentGeneratorService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.ASSESSMENT_GENERATOR;
      super(service, kwargs);
      this._serviceio = new AssessmentGeneratorIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.
     * This string will be used for throttling and profanity tracking.
     * Soffos assumes that the owner of the api is an application (app) and that app has users.
     * Soffos API will accept any string."
     * @param {string} context - the prompt to be sent to the LLM
     * @param {string} [mode="short answer"] - The type/mode of assessment.
     * @param {number} [num_questions=10] - the location of the image to be processed
     * @param {number} [num_choices=3] - the location of the image to be processed
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     * qna_sets - The question and answer sets
     * @example
     * Examples are available at "https://github.com/Soffos-Inc/soffosai-node/tree/master/samples"
     */
    call(user, context, mode="short answer", num_questions=10, num_choices=3, engine=null) {
      let payload = {
        "user": user,
        "context": context
      };
      if (engine) payload.engine = engine;
      if (mode) payload.mode = mode;
      if (num_questions) payload.num_questions = num_questions;
      if (num_choices) payload.num_choices = num_choices;

      return super.call(payload);
    }


    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {(string|InputConfig)} context - the prompt to be sent to the LLM
     * @param {(string|InputConfig)} [mode="short answer"] - The type/mode of assessment.
     * @param {(number|InputConfig)} [num_questions=10] - the location of the image to be processed
     * @param {(number|InputConfig)} [num_choices=3] - the location of the image to be processed
     * @param {(string)} [engine=null] - The LLM engine to be used.
     */
    setInputConfigs(name, context, mode="short answer", num_questions=10, num_choices=3, engine=null) {
      let source = {
        "context": context
      };
      if (engine) source.engine = engine;
      if (mode) source.mode = mode;
      if (num_questions) source.num_questions = num_questions;
      if (num_choices) source.num_choices = num_choices;
      return super.setInputConfigs(name, source);
    }
}

export default AssessmentGeneratorService