import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';

class MicrolessonIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.MICROLESSON;
    this.required_input_fields = ["content"];
    this.optional_input_fields = ["engine"];
    this.input_structure = {
      "content": [
        {
          "source": "string",
          "text": "string"
        }
      ],
      "user": "string", 
      "engine": "string"
    };
    this.output_structure = {
      "microlesson": "string"
    };
  }
}

export default MicrolessonIO;
