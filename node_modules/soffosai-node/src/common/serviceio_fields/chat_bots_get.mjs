import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';


class ChatBotsGetIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.CHAT_BOTS_GET;
    this.required_input_fields = [];
    this.optional_input_fields = ["chatbot_ids"];
    this.input_structure = {
        "chatbot_ids": ['string', 'string']
    };
    this.output_structure = {
        "chatbots": ['string', 'string']
    };
  }
}

export default ChatBotsGetIO;
