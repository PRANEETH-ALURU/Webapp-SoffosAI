import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';


class AudioConverterIO extends ServiceIO {
    constructor() {
        super();
        this.service = ServiceString.AUDIO_CONVERTER;
        this.required_input_fields = [];
        this.optional_input_fields = ["file","url","model"];
        this.input_structure = {
            // "file": "object", 
            "url": "string", 
            "model": "string"
        };
        this.output_structure = {
            "number_of_speakers": "number",
            "transcripts": "object",
            "language": "string",
            "error": "string"
        };
    }

    special_validation(payload){
        
        if (payload){
            if (payload.file && payload.url) {
                return [false, "Please provide file or url, not both."];
            }
            if (!payload.file && !payload.url){
                return [false, "Please provide the auido file or url of the audio file."];
            }
            
            const AVAILABLE_MODELS = ("whisper", "nova 2");

            if (payload.model){
                if (!AVAILABLE_MODELS.includes(payload.modeltoLowerCase())) {
                    return [false, "model field's value can only be 'whisper' or 'nova 2'."];
                }
            }
        return super.special_validation(payload);
        }
    }
}
export default AudioConverterIO;