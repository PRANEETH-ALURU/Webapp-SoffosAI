import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';

class ParaphraseIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.PARAPHRASE;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["engine"];
    this.input_structure = {
      "text": "string", 
      "engine": "string"
    };
    this.output_structure = {
      "paraphrase": "string"
    };
  }
}

export default ParaphraseIO;
