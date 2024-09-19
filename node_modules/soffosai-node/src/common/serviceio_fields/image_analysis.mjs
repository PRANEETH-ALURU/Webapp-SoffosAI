import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';


class ImageAnalysisIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.IMAGE_ANALYSIS;
    this.required_input_fields = ["prompt","image_url"];
    this.optional_input_fields = ["engine"];
    this.input_structure = {
        "prompt": "string", 
        "image_url": "string",
        "engine": "string"
    };
    this.output_structure = {
        "analysis": "string"
    };
  }
}

export default ImageAnalysisIO;
