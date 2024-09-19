import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {MicrolessonIO} from '../../common/serviceio_fields/index.mjs';
import {InputConfig} from './input_config.mjs';


/**
 * Identifies illogical statements in text and explains why they are illogical.
 * @class
 * @alias SoffosServices.MicrolessonService
 */
class MicrolessonService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.MICROLESSON;
      super(service, kwargs);
      this._serviceio = new MicrolessonIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {Array.<object>} content - A list of dictionaries. Each dictionary should contain the source and text fields, where source is the name of the document/article/website/etc. and text is the actual content. Providing the source names enables the microlesson to include the source for the key points extracted from the content.
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     * microlesson - string<br>
     * A concise, structured microlesson containing a summary, key points, learning objectives and tasks. <br>
     * @example
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.MicrolessonService({apiKey:my_apiKey});
     * let response = await service.call(
     *     "client1234567",
     *     [
     *         {
     *             "source": "Telescope.docx",
     *             "text": "The James Webb Space Telescope is the largest, most powerful \
     *             space telescope ever built. It will allow scientists to look at what our \
     *             universe was like about 200 million years after the Big Bang. The telescope \
     *             will be able to capture images of some of the first galaxies ever formed. \
     *             It will also be able to observe objects in our solar system from Mars outward, \
     *             look inside dust clouds to see where new stars and planets are forming and \
     *             examine the atmospheres of planets orbiting other stars."
     *         },
     *         {
     *             "source": "dogs.docx",
     *             "text": "Genetic evidence suggests that dogs descended directly from wolves (Canis) \
     *             and that the now-extinct wolf lineages that produced dogs branched off from the \
     *             line that produced modern living wolves sometime between 27,000 and 40,000 years ago. \
     *             The timing and location of dog domestication is a matter of debate. \
     *             There is strong genetic evidence, however, that the first domestication events \
     *             occurred somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
     *         }
     *     ]
     * );
     * console.log(JSON.stringify(response, null, 2));
     * 
     * // returns
     * // {
     * //     "microlesson": {
     * //       "summary": "The James Webb Space Telescope is the largest, most powerful space telescope ever built and will allow scientists to observe objects in our solar system from Mars outward. Genetic evidence suggests that dogs descended directly from wolves and that the first domestication events occurred somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
     * //       "key_points": [
     * //         {
     * //           "key_point": "The James Webb Space Telescope is the largest, most powerful space telescope ever built.",
     * //           "source": "Telescope.docx"
     * //         },
     * //         {
     * //           "key_point": "Dogs descended directly from wolves  and the first domestication events occurred somewhere in northern Eurasia between 14,000 and 29,000 years ago (dogs.docx)..",
     * //           "source": "Canis"
     * //         }
     * //       ],
     * //       "learning_objectives": [
     * //         "Understand the capabilities of the James Webb Space Telescope.",
     * //         "Understand the history of dog domestication."
     * //       ],
     * //       "tasks": [
     * //         "Research the James Webb Space Telescope and list its capabilities.",
     * //         "Research the history of dog domestication and list the key points."
     * //       ]
     * //     },
     * //     "cost": {
     * //       "api_call_cost": 0.005,
     * //       "character_volume_cost": 0.049,
     * //       "total_cost": 0.054
     * //     },
     * //     "charged_character_count": 980,
     * //     "unit_price": "0.000050"
     * // }
     */
    call(user, content=undefined, engine=null) {
      if (content != undefined){
        this.content = content;
      }
      let payload = {
        "user": user,
        "content": content
      };
      payload['content'] = this.content;
      if (engine) payload.engine = engine;
      return super.call(payload);
    }

    /**
     * @param {string} source 
     * @param {string} text 
     */
    add_content(source, text) {
        this.content.push(
            {
                "source": source,
                "text": text
            }
        );
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {object[]|InputConfig} content - A list of dictionaries. Each dictionary should 
     * contain the source and text fields, where source is the name of the
     * document/article/website/etc. and text is the actual content. Providing the source names 
     * enables the microlesson to include the source for the key points extracted from the content.
     * @param {string} [engine=null] - The LLM engine to be used.
     */
    setInputConfigs(name, content, engine=null) {
      let source = {
        content: content
      };
      if (engine) source.engine = engine;
      return super.setInputConfigs(name, source);
  }
}

export default MicrolessonService
