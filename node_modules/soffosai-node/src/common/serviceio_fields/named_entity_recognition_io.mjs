import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';

class NamedEntityRecognitionIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.NER;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["labels","engine"];
    this.input_structure = {
      "text": "string",
      "labels": "object", 
      "engine": "string"
    };
    this.output_structure = {
      "named_entities": [
        {
          "span": [
            "number",
            "number"
          ],
          "tag": "string",
          "text": "string"
        },
        {
          "span": [
            "number",
            "number"
          ],
          "tag": "string",
          "text": "string"
        }
      ]
    };
  }
}

export default NamedEntityRecognitionIO;
