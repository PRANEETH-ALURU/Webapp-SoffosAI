import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import { ChatBotCreateIO } from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


/**
 * Creates a chatbot and returns its ID. The id will later be used to allow users
 * to interact with it.
 * @class
 * @alias SoffosServices.ChatBotCreateService
 */
class ChatBotCreateService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.CHAT_BOT_CREATE;
      super(service, kwargs);
      this._serviceio = new ChatBotCreateIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.
     * This string will be used for throttling and profanity tracking.
     * Soffos assumes that the owner of the api is an application (app) and that app has users.
     * Soffos API will accept any string."
     * @param {string} role - A description of your bot's purpose. You may also describe its
     * tone when responding. The system may not be able to follow
     * complex instructions specified in this field.
     * @param {string} chatbot_name - The name/identity of your chatbot.
     * @param {string} [chatbot_id=null] - The chatbot's id. Provided when you create the chatbot. If you
     * provide this, the chatbot with this ID's will be updated. The
     * role and name will be updated.
     * @returns {Promise<Object>} 
     * chatbot_id - The chatbot's id. Provided when you create the chatbot. If you
     * provide this, the chatbot with this ID's will be updated. The
     * role and name will be updated.
     * @example
     * Examples are available at "https://github.com/Soffos-Inc/soffosai-node/tree/master/samples"
     */
    call(user, role, chatbot_name, chatbot_id=null) {
      let payload = {
        "user": user,
        "role": role,
        "chatbot_name": chatbot_name
      };
      if (chatbot_id) payload.chatbot_id = chatbot_id;

      return super.call(payload);
    }


    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {(string|InputConfig)} role - A description of your bot's purpose. You may also describe its
     * tone when responding. The system may not be able to follow
     * complex instructions specified in this field.
     * @param {(string|InputConfig)} chatbot_name - The name/identity of your chatbot.
     * @param {(string|InputConfig)} [chatbot_id=null] - The chatbot's id. Provided when you create the chatbot. If you
     * provide this, the chatbot with this ID's will be updated. The
     * role and name will be updated.
     */
    setInputConfigs(name, role, chatbot_name, chatbot_id=null) {
      let source = {
        "role": role,
        "chatbot_name": chatbot_name
      };
      if (chatbot_id) source.chatbot_id = chatbot_id;
      return super.setInputConfigs(name, source);
    }
}

export default ChatBotCreateService