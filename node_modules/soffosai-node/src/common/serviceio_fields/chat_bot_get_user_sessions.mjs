import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';


class ChatBotGetUserSessionsIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.CHAT_BOT_GET_USER_SESSIONS;
    this.required_input_fields = ["chatbot_id","user_id"];
    this.optional_input_fields = ["session_ids"];
    this.input_structure = {
        "chatbot_id": "string", 
        "user_id": "string", 
        "session_ids": ['string', 'string']
    };
    this.output_structure = {
        "sessions": "object"
    };
  }
}

export default ChatBotGetUserSessionsIO;
