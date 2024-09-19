import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';

class LogicalErrorDetectionIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.LOGICAL_ERROR_DETECTION;
    this.required_input_fields = ["text"];
    this.input_structure = {
      "text": "string"
    };
    this.output_structure = {
      "logical_errors": [
        {
          "text": "string",
          "start": "number",
          "end": "number",
          "explanation": "string"
        },
        {
          "text": "string",
          "start": "number",
          "end": "number",
          "explanation": "string"
        }
      ]
    };
  }
}

export default LogicalErrorDetectionIO;
