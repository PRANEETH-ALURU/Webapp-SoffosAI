import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import { WebsiteConverterIO } from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


/**
 * The Website Converter module offers basic functionality for extracting
 * meaningful text from websites. This can be a useful tool for processing website
 * content with other modules. Note: Character volume is not charged for this
 * module.
 * @class
 * @alias SoffosServices.WebsiteConverterService
 */
class WebsiteConverterService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.WEBSITE_CONVERTER;
      super(service, kwargs);
      this._serviceio = new WebsiteConverterIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.
     * This string will be used for throttling and profanity tracking.
     * Soffos assumes that the owner of the api is an application (app) and that app has users.
     * Soffos API will accept any string."
     * @param {string} url - The url to extract text from.
     * @returns {Promise<Object>} 
     * text - Raw text extracted from the website.
     * links - A dictionary containing a list of `internal` and a list of
     * `external` links found on the website. `internal`: Links found
     * on the page that are under the same domain as the provided url.
     * `external`: Links found on the page that belong to different
     * domains.
     * @example
     * Examples are available at "https://github.com/Soffos-Inc/soffosai-node/tree/master/samples"
     */
    call(user, url) {
      let payload = {
        "user": user,
        "url": url
      };

      return super.call(payload);
    }


    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {(string|InputConfig)} url - The url to extract text from.
     */
    setInputConfigs(name, url) {
      let source = {
        "url": url
      };

      return super.setInputConfigs(name, source);
    }
}

export default WebsiteConverterService