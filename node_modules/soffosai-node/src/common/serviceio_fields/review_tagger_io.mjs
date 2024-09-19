import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';

class ReviewTaggerIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.REVIEW_TAGGER;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["engine"];
    this.input_structure = {
      "text": "string", 
      "engine": "string"
    };
    this.output_structure = {
      "object": "string",
      "action": "string",
      "fault": "string"
    };
  }
}

export default ReviewTaggerIO;
