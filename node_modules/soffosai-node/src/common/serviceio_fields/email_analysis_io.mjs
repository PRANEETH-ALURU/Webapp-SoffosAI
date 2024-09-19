import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';

class EmailAnalysisIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.EMAIL_ANALYSIS;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["engine"];
    this.input_structure = {
      "text": "string", 
      "engine": "string"
    };
    this.output_structure = {
      "analysis": {
        "keypoints": ['string', 'string'],
        "topics": ['string', 'string'],
        "sender": "string",
        "receiver": ['string', 'string'],
        "mentions": ['string', 'string'],
        "sentiment": "string",
        "urgency": "string",
        "dates": ['string', 'string']
      }
    };
  }
}

export default EmailAnalysisIO;
