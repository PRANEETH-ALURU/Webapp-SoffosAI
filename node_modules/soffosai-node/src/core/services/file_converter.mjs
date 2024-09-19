import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {FileConverterIO} from '../../common/serviceio_fields/index.mjs';
import {InputConfig} from './input_config.mjs';


/**
 * The File Converter extracts text from various types of files.
 * @class
 * @alias SoffosServices.FileConverterService
 */
class FileConverterService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.FILE_CONVERTER;
      super(service, kwargs);
      this._serviceio = new FileConverterIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string|object} file - The byte stream of the file. The file should not exceed 50Mb in size.
     * @param {number} [normalize=0] - Whether to perform normalization.
     * @returns {Promise<Object>}
     * text - string<br>
     * Raw text extracted from the document. <br>
     *  <br>
     * tagged_elements dictionary list     * A list of dictionaries of all the extracted text snippets and their tags. Each dictionary has the following fields: <br>
     * text: The text of the snippet.<br>
     * tag: A tag. Detectable elements: paragraph, heading, bullet_list, table_of_contents.<br>
     * headings: A list of dictionaries representing the headings which this element is under. Each dictionary contains the text and tag fields of each heading. This is useful for sorting and labelling the content.<br>
     * Other element-specific fields: <br>
     * bullets: Available only bullet_list elements. Contains all bullets and their sub-bullets in a nested structure.<br>
     * contents: Available only in table_of_content elements. Contains the headings and sub-headings of the document's table of contents.<br>
     * heading: Available only in table_of_content elements. It is the heading of the document's table of contents.<br>
     * normalized_text - string<br>
     * Resulting text after normalization. <br>
     * normalized_tagged_elements - dictionary list<br>
     * Similar to the standard tagged_elements. Detectable elements: paragraph, heading, bullet_list, quote.<br>
     * @example
     * // needs React.js or other frontend js library or framework
     * // assuming you have a file field with id="my_file" and a button with id="sendFileBtn"
     * import { SoffosServices } from 'soffosai'; // will not work if used directly to html. Please use the soffosai.bundle.js if you need to use soffosai directly to html.
     * const my_apiKey = 'Token <put your api key here>';
     * 
     * async function sendFile() {
     *     const theFile = document.getElementById("myFile").files[0];
     *     let service = new SoffosServices.FileConverterService({apiKey: my_apiKey});
     *     let response = await service.call("client_id", theFile);
     *     console.log(SON.stringify(response, null, 2));
     * }
     * 
     * document.querySelector('#sendFileBtn').addEventListener('click', sendFile);
     * 
     */
    call(user, file, normalize="0") {
        if ( ![ "0", "1" ].includes(normalize)) {
            throw new Error(`${this._service}: normalize can only accept a value of '0' or '1';`);
        }

        let payload = {
          user: user,
          file: file,
          normalize:normalize
        };
        return super.call(payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {object|string|InputConfig} file - The byte stream of the file. The file should not exceed 50Mb in size.
     * @param {string|InputConfig} [normalize] - Whether to perform normalization.
     */
    setInputConfigs(name, file, normalize='0') {
      let source = {
        file: file,
        normalize: normalize
      };
      return super.setInputConfigs(name, source);
    }
}

export default FileConverterService
