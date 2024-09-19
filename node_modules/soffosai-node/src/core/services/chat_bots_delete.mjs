import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import { ChatBotsDeleteIO } from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


/**
 * Deleting a chatbot will also delete all the conversation history for that
 * chatbot.
 * @class
 * @alias SoffosServices.ChatBotsDeleteService
 */
class ChatBotsDeleteService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.CHAT_BOTS_DELETE;
      super(service, kwargs);
      this._serviceio = new ChatBotsDeleteIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.
     * This string will be used for throttling and profanity tracking.
     * Soffos assumes that the owner of the api is an application (app) and that app has users.
     * Soffos API will accept any string."
     * @param {Array} chatbot_ids - List of the ids of the chatbots to be deleted.
     * @returns {Promise<Object>} 
     * success - Determines if the API call is successful or not.
     * @example
     * Examples are available at "https://github.com/Soffos-Inc/soffosai-node/tree/master/samples"
     */
    call(user, chatbot_ids) {
      let payload = {
        "user": user,
        "chatbot_ids": chatbot_ids
      };


      return super.call(payload);
    }


    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {(Array|InputConfig)} chatbot_ids - List of the ids of the chatbots to be deleted.
     */
    setInputConfigs(name, chatbot_ids) {
      let source = {
        "chatbot_ids": chatbot_ids
      };

      return super.setInputConfigs(name, source);
    }
}

export default ChatBotsDeleteService