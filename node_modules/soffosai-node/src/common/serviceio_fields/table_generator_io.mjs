import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';

class TableGeneratorIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.TABLE_GENERATOR;
    this.required_input_fields = ["table_format", "text"];
    this.optional_input_fields = ["engine"];
    this.input_structure = {
      "table_format": "string", // markdown or CSV
      "text": "string", 
      "engine": "string"
    };
    this.output_structure = {
      "tables": [
        {
          "title": "string",
          "table": "string",
          "note": "string"
        }
      ]
    };
  }
}

export default TableGeneratorIO;
