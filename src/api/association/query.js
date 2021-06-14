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
exports.queryBatchRead = void 0;
/***************** Implementation of Query function Types *****************/
/**
 * Get the IDs of all {toObjectType} objects associated with those specified in the request body.
 *
 * @param config
 * @param AssociationsBatchReadRequest
 */
var queryBatchRead = function (config, _a) {
    var params = _a.params, customAxiosConfig = _a.customAxiosConfig;
    var _b = params.pathParam, fromObjectType = _b.fromObjectType, toObjectType = _b.toObjectType;
    var url = "https://api.hubspot.com/crm/v3/associations/" + fromObjectType + "/" + toObjectType + "/batch/read?hapikey=" + config.api_key;
    var options = {
        url: url,
        method: 'POST',
        data: params.bodyParam,
    };
    return __assign(__assign({}, options), customAxiosConfig);
};
exports.queryBatchRead = queryBatchRead;
