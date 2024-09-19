import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import { ImageGenerationIO } from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


/**
 * The base service for all Image Generation Services
 * ----------------------------------------------------------- 
 * Create an image
 * from a prompt. Can also specify size, engine to be used, quality and quantity
 * of images to be generated.
 * @class
 * @alias SoffosServices.ImageGenerationService
 */
class ImageGenerationService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.IMAGE_GENERATION;
      super(service, kwargs);
      this._serviceio = new ImageGenerationIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.
     * This string will be used for throttling and profanity tracking.
     * Soffos assumes that the owner of the API Key is an application (app) and that app has users.
     * Soffos API will accept any string."
     * @param {string} prompt - the prompt to be sent to the LLM.
     * @param {string} [size="1024x1024"] - the required size of the image.
     * @param {string} [quality="standard"] - the quality of the image
     * @param {number} [quantity=1] - how many images should be created.
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     * image_urls - list of image URLs
     * @example
     * Examples are available at "https://github.com/Soffos-Inc/soffosai-node/tree/master/samples"
     */
    call(user, prompt, size="1024x1024", quality="standard", quantity=1, engine=null) {
      let payload = {
        "user": user,
        "prompt": prompt
      };
      if (engine) payload.engine = engine;
      if (size) payload.size = size;
      if (quality) payload.quality = quality;
      if (quantity) payload.quantity = quantity;

      return super.call(payload);
    }


    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {(string|InputConfig)} prompt - the prompt to be sent to the LLM.
     * @param {(string|InputConfig)} [size="1024x1024"] - the required size of the image.
     * @param {(string|InputConfig)} [quality="standard"] - the quality of the image
     * @param {(number|InputConfig)} [quantity=1] - how many images should be created
     * @param {(string|InputConfig)} [engine=null] - The LLM engine to be used.
     */
    setInputConfigs(name, prompt, size="1024x1024", quality="standard", quantity=1, engine=null) {
      let source = {
        "prompt": prompt
      };
      if (engine) payload.engine = engine;
      if (size) payload.size = size;
      if (quality) payload.quality = quality;
      if (quantity) payload.quantity = quantity;
      return super.setInputConfigs(name, source);
    }
}

export default ImageGenerationService