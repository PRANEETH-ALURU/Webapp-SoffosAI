import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {TableGeneratorIO} from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


const TABLE_FORMATS = ['markdown', 'CSV'];

/**
 * The table generator module enables applications to extract numerical and statistical 
 * data from raw text in a tabular format. For use-cases where data has to be manually 
 * reviewed and cross-referenced, this module can bring enormous value.
 * @class
 * @alias SoffosServices.TableGeneratorService
 */
class TableGeneratorService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.TABLE_GENERATOR;
      super(service, kwargs);
      this._serviceio = new TableGeneratorIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - Text to extract tables from.
     * @param {string} [table_format="markdown"] - A string indicating the table output format.
     * Formats supported: "markdown", "csv"
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     * tables - dictionary list<br>
     * A list of dictionaries representing tables. Each dictionary contains the following fields: <br>
     * title:  A descriptive title for the table. <br>
     * table: The table in a raw markdown or CSV formatted string. <br>
     * note: Useful notes for table interpretation.<br>
     * @example
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.TableGeneratorService({apiKey:my_apiKey});
     * let response = await service.call(
     *     "client 2345678",
     *     "Demographic and socioeconomic factors can contribute to community spread of COVID-19. \
     *     The aim of this study is to describe the demographics and socioeconomic factors in \
     *     relation to geolocation of COVID-19 patients who were discharged from the emergency \
     *     department (ED) back into the community...",
     *     "CSV"
     * );
     * console.log(JSON.stringify(response, null, 2));
     *     
     * // returns
     * // {
     * //     "tables": [
     * //       {
     * //         "title": "Demographics and Socioeconomic Factors of COVID-19 Patients Discharged from the Emergency Department",
     * //         "table": "Demographic Factor,Socioeconomic Factor,Geolocation\nAge,Income,Latitude\nGender,Education,Longitude\nRace/Ethnicity,Occupation,\nHousing,,\nTransportation,,\n",
     * //         "note": "The table captures the demographic factors (age, gender, race/ethnicity) and socioeconomic factors (income, education, occupation, housing, transportation, health insurance) related to the geolocation (latitude and longitude) of COVID-19 patients discharged from the 
     * //   emergency department."
     * //       }
     * //     ],
     * //     "cost": {
     * //       "api_call_cost": 0.005,
     * //       "character_volume_cost": 0.01535,
     * //       "total_cost": 0.02035
     * //     },
     * //     "charged_character_count": 307,
     * //     "unit_price": "0.000050"
     * // }
     */
    call(user, text, table_format='markdown', engine=null) {
      if (!TABLE_FORMATS.includes(table_format)){
        throw new Error(`${table_format} is not a supported format. Please choose from ${TABLE_FORMATS}.`)
      }
      let payload = {
        "user": user,
        "text": text,
        "table_format": table_format
      };
      if (engine) payload.engine = engine;
      return super.call(payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} text - Text to extract tables from.
     * @param {string|InputConfig} [table_format='markdown'] - A string indicating the table output format.
     * Formats supported: "CSV", 'markdown'
     * @param {string} [engine=null] - The LLM engine to be used.
     */
    setInputConfigs(name, text, table_format='markdown', engine=null) {
      let source = {
        text: text,
        table_format: table_format
      };
      if (engine) source.engine = engine;
      
      return super.setInputConfigs(name, source);
    }
}

export default TableGeneratorService
