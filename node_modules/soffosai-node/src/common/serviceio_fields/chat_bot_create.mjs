import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';


class ChatBotCreateIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.CHAT_BOT_CREATE;
    this.required_input_fields = ["role","chatbot_name"];
    this.optional_input_fields = ["chatbot_id"];
    this.input_structure = {
        "role": "string", 
        "chatbot_name": "string", 
        "chatbot_id": "string"
    };
    this.output_structure = {
        "chatbot_id": "string"
    };
  }
}

export default ChatBotCreateIO;
