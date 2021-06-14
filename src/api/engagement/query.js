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
exports.queryEngagementById = void 0;
/***************** Implementation of Query function Types *****************/
/**
 * Get Engagement detail by Engagement ID
 *
 * @param ApiConfig
 * @param EngagementByIdRequest
 */
var queryEngagementById = function (config, arg) {
    var params = arg.params, customAxiosConfig = arg.customAxiosConfig;
    var url = "https://api.hubspot.com/engagements/v1/engagements/" + params.pathParam.engagementId + "?hapikey=" + config.api_key;
    var options = {
        url: url,
        method: 'GET',
    };
    return __assign(__assign({}, options), customAxiosConfig);
};
exports.queryEngagementById = queryEngagementById;
