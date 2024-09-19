import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {SummarizationIO} from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


/**
 * The summarization module utilizes Natural Language Generation (NLG) to generate an 
 * abstractive summary of a specified length. In contrast to extractive summarization methods, 
 * which simply calculate the centrality of sentences or passages in the original text and 
 * concatenate the highest rated ones, abstractive summaries are often more concise and accurate. 
 * The end result isn't necessarily a sum of word-for-word copies of passages from the original text, 
 * but a combination of all key points formulated as a new text.
 * @class
 * @alias SoffosServices.SummarizationService
 */
class SummarizationService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.SUMMARIZATION;
      super(service, kwargs);
      this._serviceio = new SummarizationIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - Text to be summarized.
     * @param {number} sent_length - The desired sentence length of the summary. The service will respond with a 403 error if the value is larger than the number of sentences in the text.
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     * summary - string<br>
     * The summary. <br>
     * error - string <br>
     * When the specified sent_length is larger than the number of sentences, the service will return a 403 error along with a json with the error field and the error message.
     * @example
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.SummarizationService({apiKey:my_apiKey});
     * let response = await service.call(
     *     "client 23456",
     *     "Ludwig van Beethoven (baptised 17 December 1770 – 26 March 1827) was a German \
     *     composer and pianist. ... After some months of bedridden illness, he died in 1827. \
     *     Beethoven's works remain mainstays of the classical music repertoire.",
     *     3
     * );
     * console.log(JSON.stringify(response, null, 2));
     *     
     * // returns
     * // {
     * //     "summary": "Ludwig van Beethoven was a German composer and pianist. He composed many works that remain mainstays of the classical music repertoire. After a period of illness, he died in 1827.",
     * //     "cost": {
     * //       "api_call_cost": 0.005,
     * //       "character_volume_cost": 0.0119,
     * //       "total_cost": 0.0169
     * //     },
     * //     "charged_character_count": 238,
     * //     "unit_price": "0.000050"
     * // }
     */
    call(user, text, sent_length, engine=null) {
      let payload = {
        "user": user,
        "text": text,
        "sent_length": sent_length
      };
      if (engine) payload.engine = engine;
      return super.call(payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} text - Text to be summarized.
     * @param {number|InputConfig} sent_length - The desired sentence length of the summary. The service will respond with a 403 error if the value is larger than the number of sentences in the text.
     * @param {string} [engine=null] - The LLM engine to be used.
     */
    setInputConfigs(name, text, sent_length, engine=null) {
      let source = {
        text: text,
        sent_length: sent_length
      };
      if (engine) source.engine = engine;
      
      return super.setInputConfigs(name, source);
    }
}

export default SummarizationService
