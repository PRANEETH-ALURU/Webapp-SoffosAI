import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';

class TranscriptCorrectionIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.TRANSCRIPTION_CORRECTION;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["engine"];
    this.input_structure = {
      "text": "string", 
      "engine": "string"
    };
    this.output_structure = {
      "correction": "string"
    };
  }
}

export default TranscriptCorrectionIO;
