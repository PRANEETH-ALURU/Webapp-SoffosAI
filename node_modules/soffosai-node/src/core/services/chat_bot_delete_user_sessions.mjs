import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import { ChatBotDeleteUserSessionsIO } from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


/**
 * Delete user sessions
 * @class
 * @alias SoffosServices.ChatBotDeleteUserSessionsService
 */
class ChatBotDeleteUserSessionsService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.CHAT_BOT_DELETE_USER_SESSIONS;
      super(service, kwargs);
      this._serviceio = new ChatBotDeleteUserSessionsIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.
     * This string will be used for throttling and profanity tracking.
     * Soffos assumes that the owner of the api is an application (app) and that app has users.
     * Soffos API will accept any string."
     * @param {string} chatbot_id - The chatbot's id.
     * @param {string} user_id - A unique user id. It is recommended that your provide a UUID.
     * @param {Array} [session_ids=null] - List of the ids of the user sessions to be deleted.
     * @returns {Promise<Object>} 
     * success - Determines if the API call is successful or not.
     * @example
     * Examples are available at "https://github.com/Soffos-Inc/soffosai-node/tree/master/samples"
     */
    call(user, chatbot_id, user_id, session_ids=null) {
      let payload = {
        "user": user,
        "chatbot_id": chatbot_id,
        "user_id": user_id
      };
      if (session_ids) payload.session_ids = session_ids;

      return super.call(payload);
    }


    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {(string|InputConfig)} chatbot_id - The chatbot's id.
     * @param {(string|InputConfig)} user_id - A unique user id. It is recommended that your provide a UUID.
     * @param {(Array|InputConfig)} [session_ids=null] - List of the ids of the user sessions to be deleted.
     */
    setInputConfigs(name, chatbot_id, user_id, session_ids=null) {
      let source = {
        "chatbot_id": chatbot_id,
        "user_id": user_id
      };
      if (session_ids) source.session_ids = session_ids;
      return super.setInputConfigs(name, source);
    }
}

export default ChatBotDeleteUserSessionsService