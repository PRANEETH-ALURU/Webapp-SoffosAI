import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';


class ChatBotIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.CHAT_BOT;
    this.required_input_fields = ["message","chatbot_id","user_id","mode"];
    this.optional_input_fields = ["session_id","previous_messages","bot_document_ids","context_document_ids","engine"];
    this.input_structure = {
        "session_id": "string", 
        "message": "string", 
        "chatbot_id": "string", 
        "previous_messages": ['string', 'string'], 
        "user_id": "string", 
        "mode": "string", 
        "bot_document_ids": ['string', 'string'], 
        "context_document_ids": ['string', 'string'], 
        "engine": "string"
    };
    this.output_structure = {
        "response": "string",
        "session_name": "string",
        "messages": ['string', 'string'],
        "context": "string"
    };
  }
}

export default ChatBotIO;
