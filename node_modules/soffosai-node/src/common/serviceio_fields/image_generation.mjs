import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';


class ImageGenerationIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.IMAGE_GENERATION;
    this.required_input_fields = ["prompt"];
    this.optional_input_fields = ["engine","size","quality","quantity"];
    this.input_structure = {
        "engine": "string", 
        "prompt": "string", 
        "size": "string", 
        "quality": "string", 
        "quantity": "number"
    };
    this.output_structure = {
        "image_urls": ['string', 'string']
    };
  }
}

export default ImageGenerationIO;
