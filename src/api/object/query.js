"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.querySearchObject = exports.queryUpdateObjectById = exports.queryReadObjectById = exports.queryBatchRead = void 0;
/***************** Implementation of Query function Types *****************/
/**
 * Read a batch of objects by internal ID, or unique property values.
 *
 * @param ApiConfig
 * @param ObjectQueryParams<HubspotObjectBatchReadParam>
 */
var queryBatchRead = function (config, _a) {
    var params = _a.params, customAxiosConfig = _a.customAxiosConfig;
    var url = "https://api.hubspot.com/crm/v3/objects/" + params.pathParams.objectType + "/batch/read?hapikey=" + config.api_key;
    var options = {
        url: url,
        method: 'POST',
        data: params.bodyParams,
    };
    return __assign(__assign({}, options), customAxiosConfig);
};
exports.queryBatchRead = queryBatchRead;
/**
 * Get Object by Internal object ID.
 *
 * @param ApiConfig
 * @param ObjectQueryParams<HubspotReadObjectByIdParam>
 */
var queryReadObjectById = function (config, arg) {
    var _a = arg.params, pathParams = _a.pathParams, queryParams = _a.queryParams;
    var url = "https://api.hubspot.com/crm/v3/objects/" + pathParams.objectType + "/" + pathParams.objectId + "?hapikey=" + config.api_key;
    var options = {
        url: url,
        method: 'GET',
        params: queryParams,
    };
    return __assign(__assign({}, options), arg.customAxiosConfig);
};
exports.queryReadObjectById = queryReadObjectById;
/**
 * Update Object by object id.
 *
 * @param config
 * @param arg
 */
var queryUpdateObjectById = function (config, arg) {
    var url = "https://api.hubspot.com/crm/v3/objects/" + arg.params.pathParams.objectType + "/" + arg.params.pathParams.objectId + "?hapikey=" + config.api_key;
    var options = {
        url: url,
        method: 'PATCH',
        data: arg.params.bodyParams,
    };
    return __assign(__assign({}, options), arg.customAxiosConfig);
};
exports.queryUpdateObjectById = queryUpdateObjectById;
/**
 * Filter, Sort, and Search CRM Objects.
 *
 * @param config
 * @param arg
 */
var querySearchObject = function (config, arg) {
    console.log("It is creating param");
    var _a = arg.params, pathParams = _a.pathParams, bodyParams = _a.bodyParams;
    var url = "https://api.hubspot.com/crm/v3/objects/" + pathParams.objectType + "/search?hapikey=" + config.api_key;
    var options = {
        url: url,
        method: 'POST',
        data: bodyParams,
    };
    return __assign(__assign({}, options), arg.customAxiosConfig);
};
exports.querySearchObject = querySearchObject;
