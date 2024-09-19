import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {LogicalErrorDetectionIO} from '../../common/serviceio_fields/index.mjs';
import {InputConfig} from './input_config.mjs';


/**
 * Identifies illogical statements in text and explains why they are illogical.
 * * @class
 * @alias SoffosServices.LogicalErrorDetectionService
 */
class LogicalErrorDetectionService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.LOGICAL_ERROR_DETECTION;
      super(service, kwargs);
      this._serviceio = new LogicalErrorDetectionIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - Input text to analyze for logical errors.
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     * logical_errors - dictionary list<br>
     * A list of dictionaries representing detected logical errors. Each dictionary contains the following fields: <br>
     * text: The illogical text.<br>
     * start: Starting character index in the original text.<br>
     * end: Ending chracter index in the original text.<br>
     * explanation: The reasoning behind why the text span is illogical.<br>
     * @example
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.LogicalErrorDetectionService({apiKey:my_apiKey});
     * let response = await service.call(
     *     "client12345",
     *     "Nobody has found evidence that UFOs don't exist, therefore they must exist. \
     *     Many people are saying that voter fraud is real, therefore it must be real."
     * )
     * console.log(JSON.stringify(response, null, 2));
     * 
     * // returns
     * // {
     * //     "logical_errors": [
     * //       {
     * //         "text": "Nobody has found evidence that UFOs don't exist, therefore they must exist.",
     * //         "start": 0,
     * //         "end": 75,
     * //         "explanation": "This sentence is not logical because the lack of evidence does not necessarily mean that something must exist. The absence of evidence does not prove the existence of something."
     * //       },
     * //       {
     * //         "text": "Many people are saying that voter fraud is real, therefore it must be real.",
     * //         "start": 80,
     * //         "end": 155,
     * //         "explanation": "This sentence is not logical because it assumes that the truth of a statement is determined by the number of people who believe it, which is not necessarily the case."
     * //       }
     * //     ],
     * //     "cost": {
     * //       "api_call_cost": 0.005,
     * //       "character_volume_cost": 0.01715,
     * //       "total_cost": 0.02215
     * //     },
     * //     "charged_character_count": 343,
     * //     "unit_price": "0.000050"
     * // }
     */
    call(user, text, engine=null) {
      let payload = {
        "user": user,
        "text": text
      };
      if (engine) payload.engine = engine;
      return super.call(payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} text - Input text to analyze for logical errors.
     * @param {string} [engine=null] - The LLM engine to be used.
     */
    setInputConfigs(name, text, engine=null) {
      let source = {
        text: text
      };
      if (engine) source.engine = engine;
      return super.setInputConfigs(name, source);
  }
}

export default LogicalErrorDetectionService
