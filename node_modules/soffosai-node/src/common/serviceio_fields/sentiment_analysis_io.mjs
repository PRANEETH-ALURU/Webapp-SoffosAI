import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';

class SentimentAnalysisIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.SENTIMENT_ANALYSIS;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["sentence_split", "sentence_overlap", "engine"];
    this.input_structure = {
      "text": "string",
      "sentence_split": "number",
      "sentence_overlap": "boolean", 
      "engine": "string"
    };
    this.output_structure = {
      "sentiment_breakdown": [
        {
          "text": "string",
          "start": "number",
          "end": "number",
          "sentiment": {
            "negative": "number",
            "neutral": "number",
            "positive": "number"
          }
        }
      ],
      "sentiment_overall": {
        "negative": "number",
        "neutral": "number",
        "positive": "number"
      }
    };
  }
}

export default SentimentAnalysisIO;
