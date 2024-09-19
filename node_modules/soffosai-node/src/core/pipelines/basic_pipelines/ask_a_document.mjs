import { Pipeline } from "./../pipeline.mjs";
import { DocumentsSearchService, QuestionAnsweringService, InputConfig, createInputConfig } from "./../../services/index.mjs";

/**
 * The document search service provides "passages" which is a list of contents plus some more description.
 * In order to get the content, iterate through the passages and concatenate it.
 * @private
 * @param {Array.<object>} value 
 * @returns {string}
 */
function getContent(passages) {
    let combined_text = "";
        for (let passage of passages) {
            combined_text += passage.content;
        }
    return combined_text
}

/**
 * When you already have a document uploaded to Soffos, use its document_id and ask questions about the doc.
 * @class
 * @alias _SoffosPipelines.AskADocumentPipeline
 */
class AskADocumentPipeline extends Pipeline {
    /**
     * @param {string} name - The name of this pipeline. Will be used to reference this pipeline
     *  if this pipeline is used as a Node inside another pipeline.
     * @param {Object} kwargs - Include other needed properties like apiKey
     */
    constructor(name=null, kwargs={}){
        let d_node = new DocumentsSearchService(kwargs);
        d_node.setInputConfigs(
                "search", null, null, createInputConfig("user_input", "doc_ids")
        );
        
        let qa_node = new QuestionAnsweringService(kwargs);
        qa_node.setInputConfigs(
                "qa",
                createInputConfig("user_input", "question"),
                createInputConfig("search", "passages", getContent)
        );
                
        let services = [d_node, qa_node];
        return super(services, false, name, kwargs);
    }

    /**
     * Start the pipeline processes.
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {Array.<string>} doc_ids - the document IDs of included document.
     * @param {string} question - The question about the document.
     * @param {string} [execution_code=null] - If this process should be tracked so it can be
     * terminated via terminate() method, execution_code should be provided to reference this pipeline call.
     * @returns {Object}
     * {<br>
     *  search: {
     *      passages: "List of passages",
     *  }, <br>
     *  qa: {
     *      answer: "The answer to the query."
     *  }<br>
     * } 
     * @example
     * let pipe = new AskADocumentPipeline("my_pipeline", {apiKey: my_apiKey});
     * // On this test, the API key used must have access to document "1d77babf8164427cad8276ba944e6cbc"
     * // Please ingest a document first and replace the document_id here.
     * let result = await pipe.call("client_id", ["1d77babf8164427cad8276ba944e6cbc"], "Who is Neo?");
     * console.log(JSON.stringify(result, null, 2)); 
     */
    async call(user, doc_ids, question, execution_code=null) {
        let payload = {
            "user": user,
            "doc_ids": doc_ids,
            "question": question,
            "execution_code": execution_code
        }
        return await this.run(payload);
    }

}

export default AskADocumentPipeline