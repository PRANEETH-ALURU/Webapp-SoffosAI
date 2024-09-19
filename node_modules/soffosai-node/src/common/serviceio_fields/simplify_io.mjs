import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';

class SimplifyIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.SIMPLIFY;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["engine"];
    this.require_one_of_choices = [];
    this.input_structure = {
      "text": "string", 
      "engine": "string"
    };
    this.output_structure = {
      "simplify": "string"
    };
  }
}

export default SimplifyIO;
