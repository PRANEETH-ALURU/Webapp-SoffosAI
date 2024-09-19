"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AmbiguityDetectionNode", {
  enumerable: true,
  get: function get() {
    return _ambiguity_detection["default"];
  }
});
Object.defineProperty(exports, "AnswerScoringNode", {
  enumerable: true,
  get: function get() {
    return _answer_scoring["default"];
  }
});
Object.defineProperty(exports, "ContradictionDetectionNode", {
  enumerable: true,
  get: function get() {
    return _contradiction_detection["default"];
  }
});
Object.defineProperty(exports, "DocumentsDeleteNode", {
  enumerable: true,
  get: function get() {
    return _documents.DocumentsDeleteNode;
  }
});
Object.defineProperty(exports, "DocumentsIngestNode", {
  enumerable: true,
  get: function get() {
    return _documents.DocumentsIngestNode;
  }
});
Object.defineProperty(exports, "DocumentsSearchNode", {
  enumerable: true,
  get: function get() {
    return _documents.DocumentsSearchNode;
  }
});
Object.defineProperty(exports, "EmailAnalysisNode", {
  enumerable: true,
  get: function get() {
    return _email_analysis["default"];
  }
});
Object.defineProperty(exports, "EmotionDetectionNode", {
  enumerable: true,
  get: function get() {
    return _emotion_detection["default"];
  }
});
Object.defineProperty(exports, "FileConverterNode", {
  enumerable: true,
  get: function get() {
    return _file_converter["default"];
  }
});
Object.defineProperty(exports, "LanguageDetectionNode", {
  enumerable: true,
  get: function get() {
    return _language_detection["default"];
  }
});
Object.defineProperty(exports, "LetsDiscussCreateNode", {
  enumerable: true,
  get: function get() {
    return _lets_discuss.LetsDiscussCreateNode;
  }
});
Object.defineProperty(exports, "LetsDiscussDeleteNode", {
  enumerable: true,
  get: function get() {
    return _lets_discuss.LetsDiscussDeleteNode;
  }
});
Object.defineProperty(exports, "LetsDiscussNode", {
  enumerable: true,
  get: function get() {
    return _lets_discuss.LetsDiscussNode;
  }
});
Object.defineProperty(exports, "LetsDiscussRetrieveNode", {
  enumerable: true,
  get: function get() {
    return _lets_discuss.LetsDiscussRetrieveNode;
  }
});
Object.defineProperty(exports, "LogicalErrorDetectionNode", {
  enumerable: true,
  get: function get() {
    return _logical_error_detection["default"];
  }
});
Object.defineProperty(exports, "MicrolessonNode", {
  enumerable: true,
  get: function get() {
    return _microlesson["default"];
  }
});
Object.defineProperty(exports, "NamedEntityRecognitionNode", {
  enumerable: true,
  get: function get() {
    return _named_entity_recognition["default"];
  }
});
Object.defineProperty(exports, "ParaphraseNode", {
  enumerable: true,
  get: function get() {
    return _paraphrase["default"];
  }
});
Object.defineProperty(exports, "ProfanityNode", {
  enumerable: true,
  get: function get() {
    return _profanity["default"];
  }
});
Object.defineProperty(exports, "QuestionAndAnswerGenerationNode", {
  enumerable: true,
  get: function get() {
    return _question_and_answer_generation["default"];
  }
});
Object.defineProperty(exports, "QuestionAnsweringNode", {
  enumerable: true,
  get: function get() {
    return _question_answering["default"];
  }
});
Object.defineProperty(exports, "ReviewTaggerNode", {
  enumerable: true,
  get: function get() {
    return _review_tagger["default"];
  }
});
Object.defineProperty(exports, "SentimentAnalysisNode", {
  enumerable: true,
  get: function get() {
    return _sentiment_analysis["default"];
  }
});
Object.defineProperty(exports, "SimplifyNode", {
  enumerable: true,
  get: function get() {
    return _simplify["default"];
  }
});
Object.defineProperty(exports, "SummarizationNode", {
  enumerable: true,
  get: function get() {
    return _summarization["default"];
  }
});
Object.defineProperty(exports, "TableGeneratorNode", {
  enumerable: true,
  get: function get() {
    return _table_generator["default"];
  }
});
Object.defineProperty(exports, "TagGenerationNode", {
  enumerable: true,
  get: function get() {
    return _tag_generation["default"];
  }
});
Object.defineProperty(exports, "TranscriptCorrectionNode", {
  enumerable: true,
  get: function get() {
    return _transcript_correction["default"];
  }
});
var _ambiguity_detection = _interopRequireDefault(require("./ambiguity_detection.js"));
var _answer_scoring = _interopRequireDefault(require("./answer_scoring.js"));
var _contradiction_detection = _interopRequireDefault(require("./contradiction_detection.js"));
var _documents = require("./documents.js");
var _email_analysis = _interopRequireDefault(require("./email_analysis.js"));
var _emotion_detection = _interopRequireDefault(require("./emotion_detection.js"));
var _file_converter = _interopRequireDefault(require("./file_converter.js"));
var _language_detection = _interopRequireDefault(require("./language_detection.js"));
var _lets_discuss = require("./lets_discuss.js");
var _logical_error_detection = _interopRequireDefault(require("./logical_error_detection.js"));
var _microlesson = _interopRequireDefault(require("./microlesson.js"));
var _named_entity_recognition = _interopRequireDefault(require("./named_entity_recognition.js"));
var _paraphrase = _interopRequireDefault(require("./paraphrase.js"));
var _profanity = _interopRequireDefault(require("./profanity.js"));
var _question_and_answer_generation = _interopRequireDefault(require("./question_and_answer_generation.js"));
var _question_answering = _interopRequireDefault(require("./question_answering.js"));
var _review_tagger = _interopRequireDefault(require("./review_tagger.js"));
var _sentiment_analysis = _interopRequireDefault(require("./sentiment_analysis.js"));
var _simplify = _interopRequireDefault(require("./simplify.js"));
var _summarization = _interopRequireDefault(require("./summarization.js"));
var _table_generator = _interopRequireDefault(require("./table_generator.js"));
var _tag_generation = _interopRequireDefault(require("./tag_generation.js"));
var _transcript_correction = _interopRequireDefault(require("./transcript_correction.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }