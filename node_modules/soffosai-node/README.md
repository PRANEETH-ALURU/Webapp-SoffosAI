# Welcome to the Soffos Platform SDK
At Soffos Inc., our specialty is helping organizations create pioneering apps with conversational artificial intelligence (CAI) and natural language processing (NLP) at their core.

NLP and conversational AI are at the heart of everything Soffos does. Using Soffos’ technology, we offer a suite of unique application programming interfaces (APIs) so businesses can choose the natural language and generative AI functionalities they would like to include in any kind of application.

What sets Soffos apart is we’ve taken the most advanced technology, enhanced it with our own R&D, and made it easy to use and accessible to everyone.

Our solution provides you with the ‘building blocks’ and core technologies required to build countless novel NLP applications, with minimal coding, from learning and assessment tools to knowledge management platforms and beyond. The opportunities with Soffos Platform are infinite.

Sign up for a [Free Trial](https://platform.soffos.ai) and start building your first generative AI application today!

Join our Discord channel: [SoffosAI](https://discord.gg/Q2yTEuFG2B)

# Soffosai Node JS (Alpha)
- Javascript SDK (backend use) for Soffos.ai API
- [Detailed Documentaton](https://soffos-inc.github.io/soffosai-node)

## Installation
`npm install soffosai-node`

## API Keys
- Create an account at [Soffos platform](https://platform.soffos.ai) or [login](https://platform.soffos.ai/login).
- After loggin in, on the left panel, click [Projects](https://platform.soffos.ai/apps-list).
- Create a new project.
- Click on the key icon in the project you created and you will find the API Keys for that project.
  - An API key will automatically be provided for you on Project creation but you can still create more when your account is no longer on trial.
- Protect this API Key as it will incur charges.
- You can also save your API Key into your environment variables with variable name = SOFFOSAI_API_KEY
- To set your API key:
    When you initialize a service, include it on key word arguments:
    ```
    import { SoffosServices } from "soffosai-node";

    let service = new SoffosServices.AmbiguityDetectionService({apiKey: my_apiKey});
    ```
    OR set your API key globally:
    ```
    import { SoffosServices, SoffosConfig } from "soffosai";

    SoffosConfig.apiKey = "<your API key>";
    let service = new SoffosServices.AmbiguityDetectionService();
    ```

## SoffosAIService
The SoffosAIService class handles validation and execution of specified endpoint vs payload.
Here is the list of SoffosAIService Subclasses:
```
[
    "AnswerScoringService",
    "AssessmentGeneratorService",
    "AudioConverterService",
    "ChatBotCreateService",
    "ChatBotDeleteUserSessionsService",
    "ChatBotGetUserSessionsService",
    "ChatBotsDeleteService",
    "ChatBotService",
    "ChatBotsGetService",
    "DiscussQueryService",
    "DiscussCountService",
    "DiscussCreateService",
    "DiscussDeleteService",
    "DocumentsCountService",
    "DocumentsIngestService", 
    "DocumentsSearchService", 
    "DocumentsDeleteService", 
    "EmailAnalysisService",
    "FileConverterService",
    "ImageAnalysisService",
    "ImageGenerationService",
    "LetsDiscussService",
    "MicrolessonService",
    "MultipleChoiceQnAGeneratorService",
    "NERService",
    "NaturalSQLGenerationService",
    "ParaphraseService",
    "QnAGenerationService",
    "SearchRecommendationsService",
    "SentimentAnalysisService",
    "SimplifyService",
    "StringSimilarityService",
    "SummarizationService",
    "TableGeneratorService",
    "TagService",
    "TableDeleteService",
    "TableGetService",
    "TableIngestService",
    "TranscriptCorrectionService",
    "TranslationService",
    "WebsiteConverterService",
]

```
- Syntax:
```
// Import the Soffos Service you need
import { SoffosServices } from "soffosai-node";

//Instantiate the SoffosAIService that you need:
let service = new SoffosServices.TagGenerationService({apiKey: my_apiKey});

// if you set your environment variables no need to put keyword argument apiKey:
// let service = new SoffosServices.TagGenerationService();

//Call the service and print the output:
let response = await service.call(
    "client_id",
    "The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. It is the first installment in The Matrix film series...",
    undefined, 5
)
console.log(JSON.stringify(response, null, 2));
```

## Pipeline
- A Soffos Pipeline is a series of Soffos Services working together.
In order to create a Pipeline, a service should call .setInputConfig then supply it to the pipeline's constructor:
```
import { SoffosPipeline, SoffosServices, SoffosConfig } from "soffosai";

SoffosConfig.apiKey = "<api key>";
const file_converter = new SoffosServices.FileConverterService();
file_converter.setInputConfigs(
    "file_converter",
    new InputConfig("user_input", "file"), // get the value of "file" property of the user input.
    new InputConfig("user_input", "normalize") // get the value of "normalize" property of the user input.
);

const document_ingest = new SoffosServices.DocumentsIngestService();
document_ingest.setInputConfigs(
    "doc_ingest",
    new InputConfig("user_input", "file", get_filename),
    new InputConfig("file_converter", "text") // get the ouput of the service named "fileconverter", get "text" property of it.
);
const services = [file_converter, ingestor];
const pipe = new SoffosPipeline(services, false, "my_pipeline");
```
This newly created Pipeline named "pipe" will then upload a file to soffos and extract its text content then save it as a document. The required input is clearly stated in the setInputConfigs because it has "user_input" in them. Thus to run this Pipeline:
```
let sample_user_input = {
    "user": "your_client's_id", // always required on services and pipelines
    "my_file": <the_file as path or blob>
}
let response = await pipe.run(sample_user_input);
console.log(JSON.stringify(response, null, 2));
```

### More Flexible way to declare a Pipeline
To make your Pipeline more maintainable and easy to use, create a subclass:
```
import { SoffosPipeline, InputConfig } from "soffosai";
import { SoffosServices } from "soffosai-node";


/**
 * Get the filename only out of the given file
 * @private
 * @param {Blob} file - The file that is being converted to text and saved to Soffos db.
 * @returns {string}
 */
function get_filename(file) {
    return file.name.split('.')[0];
}


/**
 * Given a file path, upload the file to Soffos and get its reference document_id in addition to the 
 * converted text.
 * @class
 * @alias _SoffosPipelines.FileIngestPipeline
 */
class FileIngestPipeline extends Pipeline {
    /**
     * @param {string} [name] - The name of this pipeline. Will be used to reference this pipeline
     *  if this pipeline is used as a Service inside another pipeline.
     * @param {Object} [kwargs] - Include other needed properties like apiKey
     */
    constructor(name=null, kwargs={}) {
        const file_converter = new FileConverterService(kwargs);
        file_converter.setInputConfigs(
            "file_converter",
            new InputConfig("user_input", "file"),
            new InputConfig("user_input", "normalize")
        );
        const document_ingest = new DocumentsIngestService(kwargs);
        document_ingest.setInputConfigs(
            "doc_ingest",
            new InputConfig("user_input", "file", get_filename),
            new InputConfig("file_converter", "text")
        );
        return super([file_converter, document_ingest], false, name, kwargs);
    }

    /**
     * Start the pipeline processes.
     */
    async call(user, file, normalize='0', execution_code=null) {
        let payload = {
            "user": user,
            "file": file,
            "normalize": normalize,
            "execution_code": execution_code
        }
        return await this.run(payload);
    }

}

```
When you do this, you can easily reuse your pipeline like this:
```
import { FileIngestPipeline } from "./your_directory/your_file.js";

let pipe = new FileIngestPipeline("myPipe", {apiKey: my_apiKey});

let the_file = <the file as path or blob>;
let result = await pipe.call("client_id", the_file, 0);
console.log(JSON.stringify(result, null, 2));

// on your successive calls:
result = await pipe.call("client2", other_file, 0);
console.log(JSON.stringify(result, null, 2));
```

### Use Defaults
When you are well versed by the output of the Services, you can create a pipeline without defining all the required arguments of each Service if you know that the previous Services or user_input will provide it. If you know this, just put "default" in the argument. Take note that the user_input or previous Services' outputs should contain the same property / fieldname. There are special cases where the previous Service's output has "document_id" and the current Service requires "document_ids"; this is already handled and can be defaulted. The same with required "document_text" and available "text". Also required "context" and available "text".

Example:
```
import { SoffosPipeline, InputConfig } from "soffosai"; 
import { SoffosServices } from "soffosai-node";


function get_content(value) {
    let combined_text = "";
    for (let item of value) {
        combined_text += item.content;
    }
    return combined_text
}

docSearch = new SoffosServices.DocumentsSearchService({apiKey: my_apiKey});
docSearch.setInpugConfigs(
    "search",
    null,
    null,
    "default"// automatically get this value from the output of previous Services or user_input with
                      // the same property / fieldname.
);

qa = new SoffosServices.QuestionAnsweringService({apiKey: my_apiKey});
qa.setInputConfigs(
    "qa",
    "default",// take the value for this argument from previous Services or from the user_input
    new InputConfig("search", "passage", get_content)
);
const AskFromDocument = new SoffosPipeline(
    [
        docSearch,
        qa
    ],
    true, // this is the **use_defaults** argument. defaults to **false** if not provided. 
         // You can only use the "**default**" keyword on arguments to mean "default this value" if this 
         //is **true**.  if use_defaults is false, it will be taken as literal string "default".
    "myPipe",
    {apiKey: my_apiKey}
);

let input = {
    "user": "client_id", // This is the UUID of your clients. The API will accept any string
    "document_ids": ["1d77babf8164427cad8276ba944e6cbc"],
    "question": "who is Neo?"
}
let result2 = await AskFromDocument.run(input);
console.log(JSON.stringify(result2, null, 2));
```

### Predefined Pipelines
- Soffos will add more predefined pipelines for you. 
You can use them like this:
```
import { SoffosPipelines } from "soffosai";

let pipe = new SoffosPipelines.FileIngestPipeline("myPipe", {apiKey: my_apiKey});
result = await pipe.call("client_id2", the_file)
console.log(JSON.stringify(result, null, 2));
```

Take note of the difference in names:
- SoffosPipeline is the pipeline Superclass while
- SoffosPipelines is the namespace for all Soffos Pipelines including SoffosPipeline as SoffosPipelines.SoffosPipeline.