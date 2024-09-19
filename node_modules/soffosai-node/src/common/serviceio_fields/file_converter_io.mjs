import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';

class FileConverterIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.FILE_CONVERTER;
    this.required_input_fields = ["file"];
    this.optional_input_fields = ["normalize"];
    this.input_structure = {
      // "file": ["object", "string"],
      "normalize": "string"
    };
    this.output_structure = {
      "text": "string",
      "tagged_elements": [
        {
          "text": "string",
          "tag": "string"
        },
      ]
    };
  }
}

export default FileConverterIO;
