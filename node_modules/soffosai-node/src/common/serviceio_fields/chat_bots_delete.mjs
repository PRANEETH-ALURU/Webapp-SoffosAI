import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';


class ChatBotsDeleteIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.CHAT_BOTS_DELETE;
    this.required_input_fields = ["chatbot_ids"];
    this.optional_input_fields = [];
    this.input_structure = {
        "chatbot_ids": ['string', 'string']
    };
    this.output_structure = {
        "success": "boolean"
    };
  }
}

export default ChatBotsDeleteIO;
