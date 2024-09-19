import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';


class WebsiteConverterIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.WEBSITE_CONVERTER;
    this.required_input_fields = ["url"];
    this.optional_input_fields = [];
    this.input_structure = {
        "url": "string"
    };
    this.output_structure = {
        "text": "string",
        "links": "object"
    };
  }
}

export default WebsiteConverterIO;
