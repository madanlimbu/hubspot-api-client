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
exports.queryGetFileSignedUrlById = exports.queryFileById = void 0;
/***************** Implementation of Query function Types *****************/
/**
 * Get File detail by File ID
 *
 * @param ApiConfig
 * @param FileByIdRequest
 */
var queryFileById = function (config, arg) {
    var url = "https://api.hubspot.com/files/v3/files/" + arg.params.pathParam.fileId + "/?hapikey=" + config.api_key;
    var options = {
        url: url,
        method: 'GET',
    };
    return __assign(__assign({}, options), arg.customAxiosConfig);
};
exports.queryFileById = queryFileById;
/**
 * Get Private File Signed URL by File ID
 *
 * @param ApiConfig
 * @param FileByIdRequest
 */
var queryGetFileSignedUrlById = function (config, arg) {
    var _a = arg.params, pathParam = _a.pathParam, queryParam = _a.queryParam;
    var url = "https://api.hubspot.com/files/v3/files/" + pathParam.fileId + "/signed-url?hapikey=" + config.api_key;
    var options = {
        url: url,
        method: 'GET',
        params: queryParam,
    };
    return __assign(__assign({}, options), arg.customAxiosConfig);
};
exports.queryGetFileSignedUrlById = queryGetFileSignedUrlById;
