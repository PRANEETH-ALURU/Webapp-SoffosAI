import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {LetsDiscussCreateIO, LetsDiscussIO, LetsDiscussRetrieveIO, LetsDiscussDeleteIO} from '../../common/serviceio_fields/index.mjs';
import {InputConfig} from './input_config.mjs';


/**
 * The Let's Discuss module allows the user to have a conversation with the AI about the content 
 * provided by the user. The main difference between this module and the Question Answering module 
 * is that Let's Discuss keeps a history of the interactions.
 * 
 * LetsDiscuss service to be used for creating a session.
 * @class
 * @alias SoffosServices.LetsDiscussCreateService
 */
class LetsDiscussCreateService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.LETS_DISCUSS_CREATE;
      super(service, kwargs);
      this._serviceio = new LetsDiscussCreateIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} context - The content to discuss about.
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     * session_id - string
     * The unique id of the conversation session. It's crucial to store the session_id in order to make queries.
     * @example
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.LetsDiscussCreateService({apiKey:my_apiKey});
     * let response = await service.call(
     *     "me again",
     *     "The James Webb Space Telescope is the largest, most powerful space telescope ever built. \
     *     It will allow scientists to look at what our universe was like about 200 million years \
     *     after the Big Bang. The telescope will be able to capture images of some of the first \
     *     galaxies ever formed. It will also be able to observe objects in our solar system from \
     *     Mars outward, look inside dust clouds to see where new stars and planets are forming \
     *     and examine the atmospheres of planets orbiting other stars."
     * );
     * console.log(JSON.stringify(response, null, 2));
     * 
     * // returns the session id of the conversation
     * // {
     * //     "session_id": "b658686f8b834b3f86d5218a4549e1c4"
     * // }
     */
    call(user, context, engine=null) {
      let payload = {
        "user": user,
        "context": context
      };
      if (engine) payload.engine = engine;
      return super.call(payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} context - The content to discuss about.
     */
    setInputConfigs(name, context, engine=null) {
      let source = {
        context: context
      };
      return super.setInputConfigs(name, source);
  }
}


/**
 * The Let's Discuss module allows the user to have a conversation with the AI about the content 
 * provided by the user. The main difference between this module and the Question Answering module 
 * is that Let's Discuss keeps a history of the interactions.
 * 
 * LetsDiscuss main service, continues thread of conversation.
 * @class
 * @alias SoffosServices.LetsDiscussService
 */
class LetsDiscussService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.LETS_DISCUSS;
      super(service, kwargs);
      this._serviceio = new LetsDiscussIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} session_id - The ID of the session provided by the /create/ endpoint.
     * @param {string} query - User's message.
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     * response - string <br>
     * Module's response to the user's query. <br>
     * context - string <br>
     * The context discussed about provided by the user during session creation. <br>
     * messages -  dictionary list <br>
     * A list of dictionaries representing all the messages exchanged between the user and the system for the specific session. The messages are sorted in chronological order. <br>
     * Each dictionary contains the following fields: text: The message. source: The source of the message, which is either the user or Soffos.
     * @example
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.LetsDiscussService({apiKey:my_apiKey});
     * let response = await service.call(
     *     "me again",
     *     "b658686f8b834b3f86d5218a4549e1c4",
     *     "What is the purpose of observing this?"
     * );
     * console.log(JSON.stringify(response, null, 2));
     * 
     * // returns
     * // {
     * //     "response": "The James Webb Space Telescope will allow scientists to look at what our universe was like about 200 million years after the Big Bang. It will also be able to observe objects in our solar system from Mars outward, look inside dust 
     * //   clouds to see where new stars and planets are forming and examine the atmospheres of planets orbiting other stars.",       
     * //     "context": "The James Webb Space Telescope is the largest, most powerful space telescope ever built.     It will allow scientists to look at what our universe was like about 200 million years     after the Big Bang. The telescope will be able to capture images of some of the first     galaxies ever formed. It will also be able to observe objects in our solar system from     Mars outward, look inside dust clouds to see where new stars and planets are forming     and examine the atmospheres of planets orbiting other stars.",
     * //     "messages": [
     * //       {
     * //         "text": "Where can I see the photos taken by this telescope?",
     * //         "source": "user"
     * //       },
     * //       {
     * //         "text": "The photos taken by the James Webb Space Telescope will be available to the public on the official website of the telescope.",
     * //         "source": "soffos"
     * //       },
     * //       {
     * //         "text": "What is the purpose of observing this?",
     * //         "source": "user"
     * //       },
     * //       {
     * //         "text": "The James Webb Space Telescope will allow scientists to look at what our universe was like about 200 million years after the Big Bang. It will also be able to observe objects in our solar system from Mars outward, look inside dust 
     * //   clouds to see where new stars and planets are forming and examine the atmospheres of planets orbiting other stars.",       
     * //         "source": "soffos"
     * //       }
     * //     ],
     * //     "cost": {
     * //       "api_call_cost": 0.005,
     * //       "character_volume_cost": 0.07085,
     * //       "total_cost": 0.07585
     * //     },
     * //     "charged_character_count": 1417,
     * //     "unit_price": "0.000050"
     * // }
     */
    call(user, session_id, query, engine=null) {
      let payload = {
        "user": user,
        "session_id": session_id,
        "query": query
      };
      if (engine) payload.engine = engine;
      return super.call(payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} session_id - The ID of the session provided by the /create/ endpoint.
     * @param {string|InputConfig} query - User's message.
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     */
    setInputConfigs(name, session_id, query, engine=null) {
      let source = {
        session_id: session_id,
        query: query
      };
      if (engine) source.engine = engine;
      return super.setInputConfigs(name, source);
    }
}


/**
 * The Let's Discuss module allows the user to have a conversation with the AI about the content 
 * provided by the user. The main difference between this module and the Question Answering module 
 * is that Let's Discuss keeps a history of the interactions.
 * 
 * LetsDiscuss service to be used for retrieving sessions.
 * @class
 * @alias SoffosServices.LetsDiscussRetrieveService
 */
class LetsDiscussRetrieveService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.LETS_DISCUSS_RETRIEVE;
      super(service, kwargs);
      this._serviceio = new LetsDiscussRetrieveIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {boolean} return_messages - When set to true, in addition to returning 
     * all the session records, it will also return all the messages associated with each session.
     * @returns {Promise<Object>} 
     * sessions - dictionary list <br>
     * List of sessions. Each session contains the following data: <br>
     * context: The content discussed in the session. <br>
     * session_id: Session's ID. <br>
     * messages: If return_messages is true, this list will contain a list of dictionaries representing the interactions between the system and the user. Each dictionary contains the user's query, the system's response and the interaction's ID as message_id, which is an integer indicating their order.
     * @example
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.LetsDiscussRetrieveService({apiKey:my_apiKey});
     * let response = await service.call('me again', true);
     * console.log(JSON.stringify(response, null, 2));
     * 
     * // returns
     * // {
     * //     "sessions": [
     * //       {
     * //         "context": "The James Webb Space Telescope is the largest, most powerful space telescope ever built.     It will allow scientists to look at what our universe was like about 200 million years     after the Big Bang. The telescope will be able to capture images of some of the first     galaxies ever formed. It will also be able to observe objects in our solar system from     Mars outward, look inside dust clouds to see where new stars and planets are forming     and examine the atmospheres of planets orbiting other stars.",
     * //         "session_id": "b658686f8b834b3f86d5218a4549e1c4",
     * //         "messages": [
     * //           {
     * //             "query": "Where can I see the photos taken by this telescope?",
     * //             "response": "The photos taken by the James Webb Space Telescope will be available to the public on the official website of the telescope.",
     * //             "message_id": 0
     * //           },
     * //           {
     * //             "query": "What is the purpose of observing this?",
     * //             "response": "The James Webb Space Telescope will allow scientists to look at what our universe was like about 200 million years after the Big Bang. It will also be able to observe objects in our solar system from Mars outward, look inside dust clouds to see where new stars and planets are forming and examine the atmospheres of planets orbiting other stars.",
     * //             "message_id": 1
     * //           }
     * //         ]
     * //       }
     * //     ],
     * //     "session_count": 1
     * // }
     */
    call(user, return_messages) {
      let payload = {
        "user": user,
        "return_messages": return_messages
      };
      return super.call(payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {boolean|InputConfig} [return_messages=true] - When set to true, in addition to returning 
     * all the session records, it will also return all the messages associated with each session.
     */
    setInputConfigs(name, return_messages=true) {
      let source = {
        return_messages: return_messages
      };
      return super.setInputConfigs(name, source);
  }
}


/**
 * The Let's Discuss module allows the user to have a conversation with the AI about the content 
 * provided by the user. The main difference between this module and the Question Answering module 
 * is that Let's Discuss keeps a history of the interactions.
 * 
 * LetsDiscuss service to be used for deleting sessions.
 * @class
 * @alias SoffosServices.LetsDiscussDeleteService
 */
class LetsDiscussDeleteService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.LETS_DISCUSS_DELETE;
      super(service, kwargs);
      this._serviceio = new LetsDiscussDeleteIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {Array.<string>} session_ids - A list with the IDs of the sessions to be deleted.
     * @returns {Promise<Object>} 
     * success - boolean <br>
     * Indicates whether the sessions have been successfuly deleted.
     * @example
     * import { SoffosServices } from "soffosai-node";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.LetsDiscussDeleteService({apiKey:my_apiKey});
     * let response = await service.call('me again', ["b658686f8b834b3f86d5218a4549e1c4"]);
     * console.log(JSON.stringify(response, null, 2));
     * 
     * // returns
     * // {
     * //     "success": true
     * // }
     */
    call(user, session_ids) {
      let payload = {
        "user": user,
        "session_ids": session_ids
      };
      return super.call(payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string[]|InputConfig} session_ids - A list with the IDs of the sessions to be deleted.
     */
    setInputConfigs(name, session_ids) {
      let source = {
        session_ids: session_ids
      };
      return super.setInputConfigs(name, source);
  }
}

export {
    LetsDiscussCreateService,
    LetsDiscussService,
    LetsDiscussRetrieveService,
    LetsDiscussDeleteService
}
