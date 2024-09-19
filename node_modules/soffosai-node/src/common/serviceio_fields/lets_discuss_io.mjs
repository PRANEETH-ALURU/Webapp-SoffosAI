import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';

class LetsDiscussCreateIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.LETS_DISCUSS_CREATE;
    this.required_input_fields = ["context"];
    this.input_structure = {
      "context": "string"
    };
    this.output_structure = {
      "session_id": "string"
    };
  }
}

class LetsDiscussIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.LETS_DISCUSS;
    this.required_input_fields = ["session_id", "query"];
    this.input_structure = {
      "session_id": "string",
      "query": "string"
    };
    this.output_structure = {
      "response": "string",
      "context": "string",
      "messages": [
        {
          "text": "string",
          "source": "string" // "user" or "soffos"
        },
      ]
    };
  }
}

class LetsDiscussRetrieveIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.LETS_DISCUSS_RETRIEVE;
    this.required_input_fields = ["return_messages"];
    this.input_structure = {
      "return_messages": 'boolean'
    };
    this.output_structure = {
      "sessions": [
        {
          "context": "string",
          "session_id": "string",
          "messages": [
            {
              "query": "string",
              "response": "string",
              "message_id": "number"
            },
            {
              "query": "string",
              "response": "string",
              "message_id": "number"
            },
          ]
        }
      ],
      "session_count": "number"
    };
  }
}

class LetsDiscussDeleteIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.LETS_DISCUSS_DELETE;
    this.required_input_fields = ["session_ids"];
    this.input_structure = {
      "session_ids": 'array'
    };
    this.output_structure = {
      "success": 'boolean'
    };
  }
}

export {
  LetsDiscussCreateIO,
  LetsDiscussIO,
  LetsDiscussRetrieveIO,
  LetsDiscussDeleteIO
};
