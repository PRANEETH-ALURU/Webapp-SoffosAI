import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {EmotionDetectionIO} from '../../common/serviceio_fields/index.mjs';
import {InputConfig} from './input_config.mjs';


const _EMOTION_LIST = ["joy", "trust", "fear", "surprise", "sadness", "disgust", "anger", "anticipation"];

/**
 * Detect selected emotions within the provided text. The original text is chunked to
 * passages of a specified sentence length. Smaller chunks yield better accuracy.
 * @class
 * @alias SoffosServices.EmotionDetectionService
 */
class EmotionDetectionService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.EMOTION_DETECTION;
      super(service, kwargs);
      this._serviceio = new EmotionDetectionIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - Text to detect emotions from.
     * @param {number} [sentence_split=4] - The number of sentences of each chunk when splitting the input text.
     * @param {number} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
     * For example, with sentence_split 3 and sentence_overlap=true :
     * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
     * @param {Array.<string>} [emotion_choices] - List of emotions to detect in the text. If the field is not provided in the payload, or set as null or empty list, it will default to all emotion choices. Currently supported emotions are listed above in the default emotion values.
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     * spans - dictionary list<br>
     * A list of spans resulting from the specified chunking parameters. Each span contains the following fields: <br>
     * text: The text of the span.<br>
     * detected_emotions: A list of the emotions detected for the specific span.<br>
     * span_start: The starting character index of the span in the original input text.<br>
     * span_end: The ending character index of the span in the original input text.<br>
     * @example
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.EmotionDetectionService({apiKey:my_apiKey});
     * let response = await service.call("client_a_happy_one", "I am excited about my birthday!");
     * console.log(JSON.stringify(response, null, 2));
     * 
     * // returns
     * // {
     * //     "spans": [
     * //       {
     * //         "detected_emotions": [
     * //           "joy"
     * //         ],
     * //         "text": "I am excited about my birthday!",
     * //         "span_start": 0,
     * //         "span_end": 31
     * //       }
     * //     ],
     * //     "cost": {
     * //       "api_call_cost": 0.005,
     * //       "character_volume_cost": 0.005,
     * //       "total_cost": 0.01
     * //     },
     * //     "charged_character_count": 100,
     * //     "unit_price": "0.000050"
     * // }
     */
    call(user, text, sentence_split=4, sentence_overlap=false, emotion_choices=_EMOTION_LIST, engine=null) {
      for (let emotion of emotion_choices) {
        if ( !_EMOTION_LIST.includes(emotion)){
            throw new Error(`${emotion} is not valid as an emotion_choices element. Please choose from ${_EMOTION_LIST}.`);
        }
      }
      let payload = {
        "user": user,
        "text": text,
        "sentence_split": sentence_split,
        "sentence_overlap": sentence_overlap,
        "emotion_choices": emotion_choices
      };
      if (engine) payload.engine = engine;
      return super.call(payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} text - Text to detect emotions from.
     * @param {number|InputConfig} [sentence_split=4] - The number of sentences of each chunk when splitting the input text.
     * @param {boolean|InputConfig} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
     * For example, with sentence_split 3 and sentence_overlap=true :
     * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
     * @param {Array.<string>|InputConfig} [emotion_choices=_EMOTION_LIST] - List of emotions to detect in the text. If the field is not provided in the payload, or set as null or empty list, it will default to all emotion choices. Currently supported emotions are listed above in the default emotion values.
     * @param {string} [engine=null] - The LLM engine to be used.
     */
    setInputConfigs(name, text, sentence_split=4, sentence_overlap=false, emotion_choices=_EMOTION_LIST, engine=null) {
      let source = {
          text: text,
          sentence_split: sentence_split,
          sentence_overlap: sentence_overlap,
          emotion_choices: emotion_choices
      };
      if (engine) source.engine = engine;
      return super.setInputConfigs(name, source);
    }
}

export default EmotionDetectionService
