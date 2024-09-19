import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';

class QuestionAnsweringIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.QUESTION_ANSWERING;
    this.required_input_fields = ["message"];
    this.require_one_of_choices = [["document_text", "document_ids"]];
    this.defaults = ["document_text"];
    this.optional_input_fields = ["check_ambiguity", "check_query_type", "generic_responses", "engine"];
    this.input_structure = {
      "question": "string",
      "message": "string",
      "document_ids": [
        "string",
        "string"
      ],
      "document_text": "string", // should not be defined if document_ids field is present
      "check_ambiguity": "boolean",
      "check_query_type": "boolean",
      "generic_responses": "boolean",
      "meta": {
        "session_id": "string"
      }, 
      "engine": "string"
    };
    this.output_structure = {
      "answer": "string",
      "valid_query": "boolean",
      "no_answer": "boolean",
      "message_id": "string",
      "context": "string",
      "highlights": [
        {
          "span": ["number", "number"],
          "sentence": "string"
        },
      ],
      "passages": ["object", "object"]
    };
  }
}

export default QuestionAnsweringIO;
