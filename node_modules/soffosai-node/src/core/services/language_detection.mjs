import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {LanguageDetectionIO} from '../../common/serviceio_fields/index.mjs';
import {InputConfig} from './input_config.mjs';


/**
 * The Language Detection module detects the dominant language in the provided text.
 * @class
 * @alias SoffosServices.LanguageDetectionService
 */
class LanguageDetectionService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.LANGUAGE_DETECTION;
      super(service, kwargs);
      this._serviceio = new LanguageDetectionIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - Text to be classified under a language.
     * @returns {Promise<Object>} 
     * language - string<br>
     * The language code of the detected language. <br>
     * @example
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.LanguageDetectionService({apiKey:my_apiKey});
     * let response = await service.call("me again", "空港はどこですか");
     * console.log(JSON.stringify(response, null, 2));
     * 
     * // returns
     * // {
     * //     "language": "ja",
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
        "text": text
      };
      return super.call(payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} text - Text to be classified under a language.
     */
    setInputConfigs(name, text) {
      let source = {
        text: text
      };
      return super.setInputConfigs(name, source);
  }
}

export default LanguageDetectionService
