import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';

class TagGenerationIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.TAG_GENERATION;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["types", "n", "engine"];
    this.input_structure = {
      "text": "string",
      "types": ["string", "string", "string"], // can only take a subset of ["topic", "domain", "audience", "entity"]
      "n": "number", 
      "engine": "string"
    };
    this.output_structure = {
      "tags": {
        "label1": [
          {
            "tag": "string",
            "score": "number"
          },
          {
            "tag": "string",
            "score": "number"
          }
        ],
        "label2": [
          {
            "tag": "string",
            "score": "number"
          },
          {
            "tag": "string",
            "score": "number"
          }
        ]
      }
    };
  }
}

export default TagGenerationIO;
