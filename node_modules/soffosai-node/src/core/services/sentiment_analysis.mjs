import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {SentimentAnalysisIO} from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


/**
 * This module processes the text to measure whether it is negative, positive or neutral.
 * The text is processed in segments of user-defined length and it provides scores for each 
 * segment as well as the overall score of the whole text.
 * @class
 * @alias SoffosServices.SentimentAnalysisService
 */
class SentimentAnalysisService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.SENTIMENT_ANALYSIS;
      super(service, kwargs);
      this._serviceio = new SentimentAnalysisIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - Text to be analyzed for sentiment.
     * @param {number} [sentence_split=3] - The number of sentences of each chunk when splitting the input text.
     * @param {boolean} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
     * For example, with sentence_split 3 and sentence_overlap=true :
     * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     * sentiment_breakdown - dictionary list <br>
     * A list of dictionaries representing the score of each segment of text. Each dictionary contains the following fields: <br>
     * text: The text of the segment. <br>
     * start: The starting character index of the segment in the original text. <br>
     * end: The ending character index of the segment in the original text. <br>
     * sentiment: A dictionary containing the scores for negative, neutral and positive.<br>
     * sentiment_overall - dictionary <br>
     * Contains the overall negative, neutral and positive score for the provided text.<br>
     * @example
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.SentimentAnalysisService({apiKey:my_apiKey});
     * let response = await service.call(
     *     "client 54321",
     *     "What I love about Soffosai is the availability of its documentation; both in code and on-site.",
     *     1, false
     * );
     * console.log(JSON.stringify(response, null, 2));
     * 
     * // returns
     * // {
     * //     "sentiment_breakdown": [
     * //       {
     * //         "text": "What I love about Soffosai is the availability of its documentation; both in code and on-site.",
     * //         "start": 0,
     * //         "end": 94,
     * //         "sentiment": {
     * //           "negative": 0.0020085338037461042,
     * //           "neutral": 0.017729898914694786,
     * //           "positive": 0.9802615642547607
     * //         }
     * //       }
     * //     ],
     * //     "sentiment_overall": {
     * //       "negative": 0.0020085338037461042,
     * //       "neutral": 0.017729898914694786,
     * //       "positive": 0.9802615642547607
     * //     },
     * //     "cost": {
     * //       "api_call_cost": 0.005,
     * //       "character_volume_cost": 0.005,
     * //       "total_cost": 0.01
     * //     },
     * //     "charged_character_count": 100,
     * //     "unit_price": "0.000050"
     * // }
     */
    call(user, text, sentence_split=4, sentence_overlap=false, engine=null) {
      let payload = {
        "user": user,
        "text": text,
        "sentence_split": sentence_split,
        "sentence_overlap": sentence_overlap
      };
      if (engine) payload.engine = engine;
     return super.call(payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} text - Text to be analyzed for sentiment.
     * @param {number|InputConfig} [sentence_split=4] - The number of sentences of each chunk when splitting the input text.
     * @param {boolean|InputConfig} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
     * For example, with sentence_split 3 and sentence_overlap=true :
     * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
     * @param {string} [engine=null] - The LLM engine to be used.
     */
    setInputConfigs(name, text, sentence_split=4, sentence_overlap=false, engine=null) {
      let source = {
        text: text,
        sentence_split: sentence_split,
        sentence_overlap: sentence_overlap
      };
      if (engine) source.engine = engine;
      
      return super.InputConfig(name, source);
    }
}

export default SentimentAnalysisService
