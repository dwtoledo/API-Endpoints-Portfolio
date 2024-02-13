# API Endpoints Portfolio

This project showcases several endpoints that I've developed as part of my exploration into RESTful API and Node.js backend development.

## Available endpoints:
### 1. Places Autocomplete
Based in a search query, return "Places" auto suggestions from Brazil powered by Bing Maps.

### 2. AI Chat Completions
Based in a chat request, return the "completion" powered by OpenAI GPT 3.5 Turbo.

## 1. Places Autocomplete:
### 1.a Usage:

```
curl --request GET \
  --url 'http://0.0.0.0:3333/api/places/autocomplete?query=Lisboa&maxResults=3&countryFilter=BR&culture=pt-BR' \
  --header 'Content-Type: application/json'
```

### 1.b HTTP Method:
GET
### 1.c Endpoint URL:
.../api/places/completions
### 1.d Parameters:
#### - Headers:
  >Content-Type: application/json
#### - Query parameters:
- **query:** string, mandatory.
  >The user's query prefix. Example: "Itatiba"
- **maxResults:** number, optional.
  >The maximum number of returned suggestions and can be any integer in [1, 10]. Default: 10.
- **countryFilter:** string, optional.
  >Used to constrain entity suggestions to a single country/region denoted by a 2-letter country code abbreviation. Example: US. Default: BR.
- **culture:** string, optional.
  >The language of query prefixes. Example: en-US. Default: pt-BR.
### 1.e Request Body:
N/A
### 1.f Response:
An array of "Places" with the following fields:
- entityType
- name
- addressLine
- locality
- adminDistrict
- adminDistrict2
- countryRegion
- countryRegionIso2
- neighborhood
- postalCode
- formattedAddress

Source:
Bing Maps Autosuggest API: https://learn.microsoft.com/en-us/bingmaps/rest-services/autosuggest

### 1.g Response Examples:
#### - Success example:
Request:
```
curl --request GET \
  --url 'http://0.0.0.0:3333/api/places/autocomplete?query=Lisboa&maxResults=3&countryFilter=BR&culture=pt-BR' \
  --header 'Content-Type: application/json'
```
Response (status code 200):
```json
[
	{
		"__type": "Place",
		"address": {
			"countryRegion": "Portugal",
			"locality": "Lisboa",
			"adminDistrict": "Lisboa",
			"countryRegionIso2": "PT",
			"formattedAddress": "Lisboa"
		}
	},
	{
		"__type": "Place",
		"address": {
			"countryRegion": "Portugal",
			"locality": "Carnide",
			"adminDistrict": "Lisboa",
			"adminDistrict2": "Lisboa",
			"countryRegionIso2": "PT",
			"formattedAddress": "Carnide"
		},
		"name": "Lisboa"
	},
	{
		"__type": "Place",
		"address": {
			"countryRegion": "Portugal",
			"locality": "São Vicente",
			"adminDistrict": "Lisboa",
			"adminDistrict2": "Lisboa",
			"countryRegionIso2": "PT",
			"formattedAddress": "São Vicente"
		},
		"name": "Lisboa Santa Apolónia"
	}
]
```
#### - Error example:
It will return an empty array.

```json
[]
```
### 1.h Authentication:
Not implemented yet.
### 1.i Authorization:
Not implemented yet.
### 1.j Additional Notes:\
N/A.

## 2. AI Chat Completions:
### 2.a Usage:
```
curl --request POST \
  --url http://0.0.0.0:3333/api/ai/completions \
  --header 'Content-Type: application/json' \
  --data '{"content": "Your prompt here"}'
```
### 2.b HTTP Method:
POST
### 2.c Endpoint URL:
.../api/ai/completions
### 2.d Parameters:
#### - Headers:
  >Content-Type: application/json
### 2.e Request Body:
An object JSON with the following fields:
- **content:** string, mandatory.
### 2.f Response:
An string with the response.
### 2.g Response Examples:
#### - Success example:
Request:
```
curl --request POST \
  --url http://0.0.0.0:3333/api/ai/completions \
  --header 'Content-Type: application/json' \
  --data '{"content": "Tell me an elephant joke"}'
```
Response (status code 200):
```
"Sure, here's an elephant joke for you:
Why don't elephants use computers?
Because they're afraid of the mouse!"
```
#### - Error example:
Request:
```
curl --request POST \
  --url http://0.0.0.0:3333/api/ai/completions \
  --header 'Content-Type: application/json' \
```
Response (status code 500):
```
Chat Completions Error: Prompt not informed.
```
### 2.h Authentication:
Not implemented yet.
### 2.i Authorization:
Not implemented yet.
### 2.j Additional Notes:
N/A


