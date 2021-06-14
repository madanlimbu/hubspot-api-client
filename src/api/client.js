"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubspotClientApi = void 0;
var api_1 = require("./association/api");
var api_2 = require("./engagement/api");
var api_3 = require("./object/api");
var api_4 = require("./file/api");
function HubspotClientApi(config) {
    return {
        object: api_3.HubspotObjectApi(config),
        association: api_1.HubspotAssociationApi(config),
        engagement: api_2.HubspotEngagementApi(config),
        file: api_4.HubspotFileApi(config),
    };
}
exports.HubspotClientApi = HubspotClientApi;
