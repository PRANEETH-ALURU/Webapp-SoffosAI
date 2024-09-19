import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {ProfanityIO} from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


/**
 * This module detects profanities and the level of offensiveness in a body of text. 
 * @class
 * @alias SoffosServices.ProfanityService
 */
class ProfanityService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.PROFANITY;
      super(service, kwargs);
      this._serviceio = new ProfanityIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - Input text.
     * @returns {Promise<Object>} 
     * offensive_probability - float<br>
     * A float value between 0 and 1 indicating the degree of offensiveness.<br>
     * offensive_prediction - boolean <br>
     * Boolean value indicating whether the probability exceeds the threshold of what is definitely considered offensive for the underlying model. <br>
     * profanities - dictionary list <br>
     * List of dictionaries resembling detected profanities. Each dictionary contains the following fields: <br>
     * text: The text of the profanity.<br>
     * span_start: The starting character index of the profanity in the original text.<br>
     * span_end: The ending character index of the profanity in the original text.<br>
     * @example
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.ProfanityService({apiKey:my_apiKey});
     * let response = await service.call("client123", "Don't give me this shit.");
     * console.log(JSON.stringify(response, null, 2));
     *     
     * // returns
     * // {
     * //     "profanities": [
     * //       {
     * //         "text": "shit",
     * //         "span_start": 19,
     * //         "span_end": 23
     * //       }
     * //     ],
     * //     "offensive_probability": 0.8668110370635986,
     * //     "offensive_prediction": true,
     * //     "cost": {
     * //       "api_call_cost": 0.005,
     * //       "character_volume_cost": 0.005,
     * //       "total_cost": 0.01
     * //     },
     * //     "charged_character_count": 100,
     * //     "unit_price": "0.000050"
     * // }
     */
    call(user, text) {
      let payload = {
        "user": user,
        "text": text,
      };
      return super.call(payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} text - Input text.
     */
    setInputConfigs(name, text) {
      let source = {
        text: text
      };
      return super.setInputConfigs(name, service, source);
    }
}

export default ProfanityService
