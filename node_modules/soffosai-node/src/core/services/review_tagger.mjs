import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {ReviewTaggerIO} from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


/**
 * This module extracts key information from negative product reviews. It attempts to find
 * the referred object, it's fault and an action/verb that is associated with it. If any 
 * of the information is not present, it returns "n/a". This is useful for organizations who 
 * want to analyze product reviews in order to identify and prioritize the most important issues.
 * @class
 * @alias SoffosServices.ReviewTaggerService
 */
class ReviewTaggerService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.REVIEW_TAGGER;
      super(service, kwargs);
      this._serviceio = new ReviewTaggerIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - The review text.
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     * object - string<br>
     * The faulty object. This could be the product itself, or a component, e.g. "door handle". If 'n/a' is returned, it's assumed that the object is the product itself. <br>
     * action - string <br>
     * The action/verb associated with that object, e.g. "squeaks" <br>
     * fault - string <br>
     * The fault (or strength) of the object, e.g. "loose" or "broken". <br>
     * @example
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.ReviewTaggerService({apiKey:my_apiKey});
     * let response = await service.call(
     *     "client 12345",
     *     "This oven has been a complete disaster from the start. After about 2 weeks of use, \
     *     the oven and broiler burners would turn off suddenly after being on for only 5 seconds. \
     *     This has been an ongoing issue for months, and it still does not work."
     * );
     * console.log(JSON.stringify(response, null, 2));
     *     
     * // returns
     * // {
     * //     "object": "oven and broiler burners",
     * //     "action": "turn off suddenly",
     * //     "fault": "not working",
     * //     "cost": {
     * //       "api_call_cost": 0.005,
     * //       "character_volume_cost": 0.01245,
     * //       "total_cost": 0.01745
     * //     },
     * //     "charged_character_count": 249,
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
     * @param {string|InputConfig} text - The review text.
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

export default ReviewTaggerService
