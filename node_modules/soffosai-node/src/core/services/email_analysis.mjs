import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {EmailAnalysisIO} from '../../common/serviceio_fields/index.mjs';
import {InputConfig} from './input_config.mjs';


/**
 * This module extracts key information from the body of an e-mail.
 * @class
 * @alias SoffosServices.EmailAnalysisService
 */
class EmailAnalysisService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.EMAIL_ANALYSIS;
      super(service, kwargs);
      this._serviceio = new EmailAnalysisIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - The e-mail body text.
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     * analysis - dictionary<br>
     * A dictionary containing the following key information: <br>
     * key points string list
        topics string list
        sender string
        receiver string list
        mentions string list
        sentiment string
        urgency string
        dates string list<br>
     * @example
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.EmailAnalysisService({apiKey:my_apiKey});
     * let response = await service.call(
     *     "client12345",
     *     "Dear John,\n\nI hope this email finds you well. \
     *     I am writing to follow up on a few topics that we discussed in our last meeting on the 31st of March.\
     *     There are a few updates and urgent matters that I would like to discuss with you.\
     *     \n\nFirstly, I wanted to touch base on the progress of the project we discussed. \
     *     As per our conversation, we had agreed on a tentative timeline to complete the project by June 15th.\
     *     However, due to unforeseen circumstances, we are falling behind schedule. \
     *     It is imperative that we discuss the current situation and come up with a plan to get \
     *     back on track as soon as possible.\n\nSecondly, as you are aware, we had discussed the possibility \
     *     of scheduling a meeting with Mary regarding the financials on the 10th of April. \
     *     However, we have yet to confirm a date and time for this meeting. Given the importance of \
     *     this matter, I would like to request that we schedule this meeting within the next two weeks.\
     *     \n\nLastly, I would like to express my appreciation for your ongoing support and assistance \
     *     in these matters. Your expertise and guidance have been invaluable, and I am confident that we \
     *     will be able to overcome any challenges that come our way.\n\nGiven the urgency of these matters, \
     *     I would greatly appreciate a prompt response to this email. \
     *     Kind regards,\
     *     \nPeter"
     * );
     * console.log(JSON.stringify(response, null, 2));
     * 
     * // returns
     * // {
     * //     "analysis": {
     * //       "dates": [
     * //         "31st of March",
     * //         "June 15th",
     * //         "10th of April"
     * //       ],
     * //       "key points": [
     * //         "progress of the project",
     * //         "scheduling a meeting with Mary regarding the financials"
     * //       ],
     * //       "mentions": [
     * //         "John",
     * //         "Mary"
     * //       ],
     * //       "receiver": [
     * //         "John"
     * //       ],
     * //       "sender": [
     * //         "Peter"
     * //       ],
     * //       "sentiment": [],
     * //       "topics": [
     * //         "project progress",
     * //         "meeting scheduling",
     * //         "financials"
     * //       ],
     * //       "urgency": [
     * //         "urgent"
     * //       ]
     * //     },
     * //     "cost": {
     * //       "api_call_cost": 0.005,
     * //       "character_volume_cost": 0.0676,
     * //       "total_cost": 0.0726
     * //     },
     * //     "charged_character_count": 1352,
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
     * @param {string|InputConfig} text - The e-mail body text.
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

export default EmailAnalysisService
