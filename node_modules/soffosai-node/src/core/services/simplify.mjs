import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {SimplifyIO} from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


/**
 * Paraphrase and Simplify are available as two different flavors of the same module. 
 * While the Paraphrase module attempts to change the wording while keeping the same level of complexity, 
 * the Simplify module outputs more commonly used words without altering the meaning of the original text.
 * @class
 * @alias SoffosServices.SimplifyService
 */
class SimplifyService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.SIMPLIFY;
      super(service, kwargs);
      this._serviceio = new SimplifyIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - Text to be paraphrased/simplified.
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     * paraphrase - the paraphrased text <br>
     * "simplify": true
     * @example:
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.SimplifyService({apiKey:my_apiKey});
     * let response = await service.call(
     *     "sample client id", 
     *     "Soffosai provides a very easy and economical way to integrate AI into your systems."
     * );
     * console.log(JSON.stringify(response, null, 2));
     *     
     * // returns
     * // {
     * //     "paraphrase": "Soffosai makes it super simple and cheap to add AI to your systems.",
     * //     "simplify": true,
     * //     "cost": {
     * //       "api_call_cost": 0.005,
     * //       "character_volume_cost": 0.005,
     * //       "total_cost": 0.01
     * //     },
     * //     "charged_character_count": 100,
     * //     "unit_price": "0.000050"
     * // }
     */
    call(user, text, engine=null) {
      let payload = {
        "user": user,
        "text": text,
      };
      if (engine) payload.engine = engine;
      return super.call(payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} text - Text to be paraphrased/simplified.
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

export default SimplifyService
