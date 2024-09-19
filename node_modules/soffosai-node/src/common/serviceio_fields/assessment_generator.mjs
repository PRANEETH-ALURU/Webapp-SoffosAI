import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';


class AssessmentGeneratorIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.ASSESSMENT_GENERATOR;
    this.required_input_fields = ["context"];
    this.optional_input_fields = ["engine","mode","num_questions","num_choices"];
    this.input_structure = { 
        "context": "string", 
        "mode": "string", 
        "num_questions": "number", 
        "num_choices": "number",
        "engine": "string"
    };
    this.output_structure = {
        "qna_sets": ['string', 'string']
    };
  }
}

export default AssessmentGeneratorIO;