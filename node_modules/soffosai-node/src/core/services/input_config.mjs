/**
 * @class
 * @alias _InputConfig
 */
class InputConfig {
    /**
     * Input Configuration for Pipeline Services.
     * When sequencing Services within a Pipeline this helps configure which Node's output is used as
     * which Node's input.
     * 
     * @param {string} source The name of the SoffosAIService or SoffosPipeline from 
     *                  where the input of the current SoffosAIService should be taken from.
     *                  It can also be "user_input" if the input will come from the user and 
     *                  not from a Service/SoffosPipeline.
     * @param {string} field The name of the output field of the "source".
     * @param {function} pre_process (optional) A function to preprocess the data from source[field].
    */
    constructor(source, field, pre_process=null){
        this.source = source;
        this.field = field;
        this.pre_process = pre_process;
        if(pre_process){
            if(typeof pre_process !== 'function'){
                throw TypeError("pre_process should be callable.");
            }
        }
    }
}


/**
 * Create Configuration for Pipeline Services.
 * When sequencing Services within a Pipeline this helps configure which Node's output is used as
 * which Node's input. 
 * @function
 * @alias _createInputConfig
 * @param {string} source The name of the SoffosAIService or SoffosPipeline from 
 *                  where the input of the current SoffosAIService should be taken from.
 *                  It can also be "user_input" if the input will come from the user and 
 *                  not from a Service/SoffosPipeline.
 * @param {string} field The name of the output field of the "source".
 * @param {function} pre_process (optional) A function to preprocess the data from source[field].
 */ 
function createInputConfig(source, field, pre_process=null) {
    let _config = {
        source: source,
        field: field
    };
    if (pre_process){
        if(typeof pre_process !== 'function'){
            throw TypeError("pre_process should be callable.");
        } else {
            _config.pre_process = pre_process;
        }
    }

    return _config
}

export {InputConfig, createInputConfig}