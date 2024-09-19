import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import { ChatBotsGetIO } from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


/**
 * This endpoint allows you to get the information of previously created chatbots.
 * @class
 * @alias SoffosServices.ChatBotsGetService
 */
class ChatBotsGetService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.CHAT_BOTS_GET;
      super(service, kwargs);
      this._serviceio = new ChatBotsGetIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.
     * This string will be used for throttling and profanity tracking.
     * Soffos assumes that the owner of the api is an application (app) and that app has users.
     * Soffos API will accept any string."
     * @param {Array} [chatbot_ids=null] - Specify the id of the chatbots you need to see the details for.
     * Don't pass this parameter if you wish to see all your created
     * chatbots.
     * @returns {Promise<Object>} 
     * chatbots - A list of dictionaries with details about your chatbots.
     * @example
     * Examples are available at "https://github.com/Soffos-Inc/soffosai-node/tree/master/samples"
     */
    call(user, chatbot_ids=null) {
      let payload = {
        "user": user
      };
      if (chatbot_ids) payload.chatbot_ids = chatbot_ids;

      return super.call(payload);
    }


    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {(Array|InputConfig)} [chatbot_ids=null] - Specify the id of the chatbots you need to see the details for.
     * Don't pass this parameter if you wish to see all your created
     * chatbots.
     */
    setInputConfigs(name, chatbot_ids=null) {
      let source = {

      };
      if (chatbot_ids) source.chatbot_ids = chatbot_ids;
      return super.setInputConfigs(name, source);
    }
}

export default ChatBotsGetService