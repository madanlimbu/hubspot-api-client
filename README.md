# Hubspot unopinionated api

Helpful Generic Hubspot api client to make request to hubspot. 

Ideally used on serverless function with typescript to make calls on Hubspot api.

## Installing

Add the packagee in your project.

```
yarn add hubspot-unopinionated-api
```
## Getting Started

### Setup Client in your project.

```
import { HubspotClientApi } from 'hubspot-api-client';

const api = HubspotClientApi({
  api_key: YOUR_HUBSPOT_API_KEY
});
```

### Usage with custom hubspot object.

```
const post = api.object.getObjectById({
    params: {
      pathParams: {
        objectId: 151,
        objectType: 'post',
      },
      queryParams: {
        properties: 'title,slug',
      },
    },
});
```
## Summary
Currently supports few hubspot endpoint.

Api instance can use `object`, `association`, `engagement` and `file` to make various request.

### Prerequisites
- Hubspot

### Built with
- Axios
- Typescript

### Versioning
[SemVer](https://semver.org/) for versioning.

### Author
Madan