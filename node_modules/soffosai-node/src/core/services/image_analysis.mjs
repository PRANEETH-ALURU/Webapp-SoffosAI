import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import { ImageAnalysisIO } from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


/**
 * The base service for all Image Analyzation Services
 * ----------------------------------------------------------- 
 * Describes an image
 * @class
 * @alias SoffosServices.ImageAnalysisService
 */
class ImageAnalysisService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.IMAGE_ANALYSIS;
      super(service, kwargs);
      this._serviceio = new ImageAnalysisIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.
     * This string will be used for throttling and profanity tracking.
     * Soffos assumes that the owner of the api is an application (app) and that app has users.
     * Soffos API will accept any string."
     * @param {string} prompt - the prompt to be sent to the LLM
     * @param {string} image_url - the location of the image to be processed
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     * analysis - the analysis of the image
     * @example
     * Examples are available at "https://github.com/Soffos-Inc/soffosai-node/tree/master/samples"
     */
    call(user, prompt, image_url, engine=null) {
      let payload = {
        "user": user,
        "prompt": prompt,
        "image_url": image_url
      };
      if (engine) payload.engine = engine;

      return super.call(payload);
    }


    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {(string|InputConfig)} prompt - the prompt to be sent to the LLM
     * @param {(string|InputConfig)} image_url - the location of the image to be processed
     * @param {(string|InputConfig)} [engine=null] - The LLM engine to be used.
     */
    setInputConfigs(name, prompt, image_url, engine=null) {
      let source = {
        "prompt": prompt,
        "image_url": image_url
      };
      if (engine) source.engine = engine;
      return super.setInputConfigs(name, source);
    }
}

export default ImageAnalysisService