import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import { AudioConverterIO } from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


/**
 * Transcribes the given audio. It also detects the language, detects number of
 * speakers, and diarizes. "file" or "url" is required, but not both should be
 * provided.
 * @class
 * @alias SoffosServices.AudioConverterService
 */
class AudioConverterService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.AUDIO_CONVERTER;
      super(service, kwargs);
      this._serviceio = new AudioConverterIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.
     * This string will be used for throttling and profanity tracking.
     * Soffos assumes that the owner of the api is an application (app) and that app has users.
     * Soffos API will accept any string."
     * @param {object|string} [file=null] - The audio file to be transcribed.
     * @param {string} [url=null] - The location of the audio file to be transcribed. Make sure it
     * can be accessed publicly. If not, include the athentication
     * strings of the url.
     * @param {string} [model=null] - The model to be used by the audio converter. Can be 'nova 2' or
     * 'whisper'. Defaults to 'nova 2'.
     * @returns {Promise<Object>} 
     * number_of_speakers - The number of speakers detected.
     * transcripts - The transcription of the audio file or url.
     * language - The detected language used by the speakers.
     * error -      * Description missing.
     * @example
     * Examples are available at "https://github.com/Soffos-Inc/soffosai-node/tree/master/samples"
     */
    call(user, file=null, url=null, model=null) {
      let payload = {
        "user": user
      };
      if (file) payload.file = file;
      if (url) payload.url = url;
      if (model) payload.model = model;

      return super.call(payload);
    }


    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {(object|string|InputConfig)} [file=null] - The audio file to be transcribed.
     * @param {(string|InputConfig)} [url=null] - The location of the audio file to be transcribed. Make sure it
     * can be accessed publicly. If not, include the athentication
     * strings of the url.
     * @param {(string|InputConfig)} [model=null] - The model to be used by the audio converter. Can be 'nova 2' or
     * 'whisper'. Defaults to 'nova 2'.
     */
    setInputConfigs(name, file=null, url=null, model=null) {
      let source = {

      };
      if (file) source.file = file;
      if (url) source.url = url;
      if (model) source.model = model;
      return super.setInputConfigs(name, source);
    }
}

export default AudioConverterService