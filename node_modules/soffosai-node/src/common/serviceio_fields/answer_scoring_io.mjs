import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';

class AnswerScoringIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.ANSWER_SCORING;
    this.required_input_fields = ["context", "question", "user_answer"];
    this.optional_input_fields = ["answer","engine"];
    this.input_structure = {
      "context": "string",
      "question": "string",
      "answer": "string",
      "user_answer": "string", 
      "engine": "string"
    };

    this.output_structure = {
      "score": "number",
      "reasoning": "string"
    };
  }
}

export default AnswerScoringIO;
