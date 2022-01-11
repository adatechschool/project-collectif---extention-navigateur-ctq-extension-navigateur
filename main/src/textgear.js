export const textgear = 
{

	"info": {
		"_postman_id": "7976466b-4477-4aaf-8d09-e5f9fca2eae6",
		"name": "TextGears",
		"description": "Textgears API allows you to integrate the latest technologies for text analyzing virtually to any product. From simple mobile apps to bulky enterprise developments. The API allows you to check text for all kinds of errors in a flexible manner, determine the readability of the text, evaluate the approximate vocabulary of the author, and much more.",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "https://api.textgears.com/grammar",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"key\": \"{{APIKEY}}\",\r\n    \"text\": \"My mother are a doctor, but my father is a angeneer. I has a gun.\",\r\n    \"language\": \"en-US\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://api.textgears.com/grammar",
					"protocol": "https",
					"host": [
						"api",
						"textgears",
						"com"
					],
					"path": [
						"grammar"
					]
				},
				"description": "The smart API finds not only spelling, but grammar, style and punctuation errors.\nUse this method to get a list of errors, description for each one and an array of suggested fixes."
			},
			"response": [
				{
					"name": "https://api.textgears.com/grammar",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"key\": \"{{APIKEY}}\",\r\n    \"text\": \"My mother are a doctor, but my father is a angeneer. I has a gun.\",\r\n    \"language\": \"en-US\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://api.textgears.com/grammar",
							"protocol": "https",
							"host": [
								"api",
								"textgears",
								"com"
							],
							"path": [
								"grammar"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Server",
							"value": "nginx"
						},
						{
							"key": "Date",
							"value": "Sat, 09 Jan 2021 00:28:57 GMT"
						},
						{
							"key": "Content-Type",
							"value": "application/json"
						},
						{
							"key": "Transfer-Encoding",
							"value": "chunked"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Vary",
							"value": "Accept-Encoding"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Encoding",
							"value": "gzip"
						}
					],
					"cookie": [],
					"body": "{\n    \"status\": true,\n    \"response\": {\n        \"result\": true,\n        \"errors\": [\n            {\n                \"id\": \"e1583840903\",\n                \"offset\": 10,\n                \"length\": 3,\n                \"description\": {\n                    \"en\": \"Possible agreement error - use third-person verb forms for singular and mass nouns: \\\"is\\\".\"\n                },\n                \"bad\": \"are\",\n                \"better\": [\n                    \"is\"\n                ],\n                \"type\": \"grammar\"\n            },\n            {\n                \"id\": \"e1870958494\",\n                \"offset\": 41,\n                \"length\": 1,\n                \"description\": {\n                    \"en\": \"Use \\\"an\\\" instead of 'a' if the following word starts with a vowel sound, e.g. 'an article', 'an hour'\"\n                },\n                \"bad\": \"a\",\n                \"better\": [\n                    \"an\"\n                ],\n                \"type\": \"spelling\"\n            },\n            {\n                \"id\": \"e1089211386\",\n                \"offset\": 43,\n                \"length\": 8,\n                \"description\": {\n                    \"en\": \"Possible spelling mistake found\"\n                },\n                \"bad\": \"angeneer\",\n                \"better\": [\n                    \"engineer\",\n                    \"engender\"\n                ],\n                \"type\": \"spelling\"\n            },\n            {\n                \"id\": \"e296653609\",\n                \"offset\": 55,\n                \"length\": 3,\n                \"description\": {\n                    \"en\": \"The pronoun 'I' must be used with a non-third-person form of a verb: \\\"have\\\", \\\"haven\\\"\"\n                },\n                \"bad\": \"has\",\n                \"better\": [\n                    \"have\",\n                    \"haven\"\n                ],\n                \"type\": \"grammar\"\n            }\n        ]\n    }\n}"
				}
			]
		},
		{
			"name": "https://api.textgears.com/analyze",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"key\": \"{{APIKEY}}\",\r\n    \"text\": \"My mother are a doctor, but my father is a angeneer. I has a gun.\",\r\n    \"language\": \"en-US\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://api.textgears.com/analyze",
					"protocol": "https",
					"host": [
						"api",
						"textgears",
						"com"
					],
					"path": [
						"analyze"
					]
				},
				"description": "Method contains grammar check + spelling check results with text metrics calculations."
			},
			"response": [
				{
					"name": "https://api.textgears.com/analyze",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"key\": \"{{APIKEY}}\",\r\n    \"text\": \"My mother are a doctor, but my father is a angeneer. I has a gun.\",\r\n    \"language\": \"en-US\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://api.textgears.com/analyze",
							"protocol": "https",
							"host": [
								"api",
								"textgears",
								"com"
							],
							"path": [
								"analyze"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Server",
							"value": "nginx"
						},
						{
							"key": "Date",
							"value": "Sat, 09 Jan 2021 00:30:04 GMT"
						},
						{
							"key": "Content-Type",
							"value": "application/json"
						},
						{
							"key": "Transfer-Encoding",
							"value": "chunked"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Vary",
							"value": "Accept-Encoding"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Encoding",
							"value": "gzip"
						}
					],
					"cookie": [],
					"body": "{\n    \"status\": true,\n    \"response\": {\n        \"grammar\": {\n            \"result\": true,\n            \"errors\": [\n                {\n                    \"id\": \"e578996959\",\n                    \"offset\": 10,\n                    \"length\": 3,\n                    \"description\": {\n                        \"en\": \"Possible agreement error - use third-person verb forms for singular and mass nouns: \\\"is\\\".\"\n                    },\n                    \"bad\": \"are\",\n                    \"better\": [\n                        \"is\"\n                    ],\n                    \"type\": \"grammar\"\n                },\n                {\n                    \"id\": \"e84827316\",\n                    \"offset\": 41,\n                    \"length\": 1,\n                    \"description\": {\n                        \"en\": \"Use \\\"an\\\" instead of 'a' if the following word starts with a vowel sound, e.g. 'an article', 'an hour'\"\n                    },\n                    \"bad\": \"a\",\n                    \"better\": [\n                        \"an\"\n                    ],\n                    \"type\": \"spelling\"\n                },\n                {\n                    \"id\": \"e982158293\",\n                    \"offset\": 43,\n                    \"length\": 8,\n                    \"description\": {\n                        \"en\": \"Possible spelling mistake found\"\n                    },\n                    \"bad\": \"angeneer\",\n                    \"better\": [\n                        \"engineer\",\n                        \"engender\"\n                    ],\n                    \"type\": \"spelling\"\n                },\n                {\n                    \"id\": \"e585623044\",\n                    \"offset\": 55,\n                    \"length\": 3,\n                    \"description\": {\n                        \"en\": \"The pronoun 'I' must be used with a non-third-person form of a verb: \\\"have\\\", \\\"haven\\\"\"\n                    },\n                    \"bad\": \"has\",\n                    \"better\": [\n                        \"have\",\n                        \"haven\"\n                    ],\n                    \"type\": \"grammar\"\n                }\n            ]\n        },\n        \"stats\": {\n            \"fleschKincaid\": {\n                \"readingEase\": 86.4,\n                \"grade\": \"6th grade\",\n                \"interpretation\": \"Easy to read. Conversational English for consumers\"\n            },\n            \"gunningFog\": 5.7,\n            \"colemanLiau\": 3,\n            \"SMOG\": 7.3,\n            \"vocabularySize\": {\n                \"active\": null,\n                \"passive\": null\n            },\n            \"emotion\": {\n                \"positive\": 0.79,\n                \"negative\": 0.21\n            },\n            \"counters\": {\n                \"length\": 65,\n                \"clearLength\": 51,\n                \"words\": 15,\n                \"sentences\": 2\n            }\n        }\n    }\n}"
				}
			]
		},
		{
			"name": "https://api.textgears.com/spelling",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"key\": \"{{APIKEY}}\",\r\n    \"text\": \"My mother are a doctor, but my father is a angeneer. I has a gun.\",\r\n    \"language\": \"en-US\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://api.textgears.com/spelling",
					"protocol": "https",
					"host": [
						"api",
						"textgears",
						"com"
					],
					"path": [
						"spelling"
					]
				},
				"description": "You can use this method if you need only the most widespread mistakes."
			},
			"response": [
				{
					"name": "https://api.textgears.com/spelling",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"key\": \"{{APIKEY}}\",\r\n    \"text\": \"My mother are a doctor, but my father is a angeneer. I has a gun.\",\r\n    \"language\": \"en-US\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://api.textgears.com/spelling",
							"protocol": "https",
							"host": [
								"api",
								"textgears",
								"com"
							],
							"path": [
								"spelling"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Server",
							"value": "nginx"
						},
						{
							"key": "Date",
							"value": "Sat, 09 Jan 2021 00:30:22 GMT"
						},
						{
							"key": "Content-Type",
							"value": "application/json"
						},
						{
							"key": "Transfer-Encoding",
							"value": "chunked"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Vary",
							"value": "Accept-Encoding"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Encoding",
							"value": "gzip"
						}
					],
					"cookie": [],
					"body": "{\n    \"status\": true,\n    \"response\": {\n        \"result\": true,\n        \"errors\": [\n            {\n                \"id\": \"e1602722342\",\n                \"offset\": 41,\n                \"length\": 1,\n                \"description\": {\n                    \"en\": \"Use \\\"an\\\" instead of 'a' if the following word starts with a vowel sound, e.g. 'an article', 'an hour'\"\n                },\n                \"bad\": \"a\",\n                \"better\": [\n                    \"an\"\n                ],\n                \"type\": \"spelling\"\n            },\n            {\n                \"id\": \"e1880009607\",\n                \"offset\": 43,\n                \"length\": 8,\n                \"description\": {\n                    \"en\": \"Possible spelling mistake found\"\n                },\n                \"bad\": \"angeneer\",\n                \"better\": [\n                    \"engineer\",\n                    \"engender\"\n                ],\n                \"type\": \"spelling\"\n            }\n        ]\n    }\n}"
				}
			]
		},
		{
			"name": "https://api.textgears.com/detect",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"key\": \"{{APIKEY}}\",\r\n    \"text\": \"Readability (legibility) is a feature of the text that represents ease of its perception by the reader, as well as the evaluation of its simplicity. The two main factors of readability are the printing and linguistic features of the text.    The Flesch Kinkaid Score is the most popular way to measure the readability of English text. It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities. The higher the index value on a 100-point scale, the better the readability of the text.    Smart human-trained search algorithms evaluate all site content for completeness of topic disclosure, and in a form that is understandable to the reader. For this purpose, readability indexes are used. In other words, pages containing simple and clear text get higher positions in the search results. Improving the text in terms of its printing and linguistic qualities will increase the user's viewing time. It turns out that the readability significantly affects the ranking of sites in the search engine.\",\r\n    \"language\": \"en-US\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://api.textgears.com/detect",
					"protocol": "https",
					"host": [
						"api",
						"textgears",
						"com"
					],
					"path": [
						"detect"
					]
				},
				"description": "Determination of the language of the text and the assumption of its dialect. The method returns an array of probable options for each language. If it is not possible to unambiguously identify the language, the language field returns null"
			},
			"response": [
				{
					"name": "https://api.textgears.com/detect",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"key\": \"{{APIKEY}}\",\r\n    \"text\": \"Readability (legibility) is a feature of the text that represents ease of its perception by the reader, as well as the evaluation of its simplicity. The two main factors of readability are the printing and linguistic features of the text.    The Flesch Kinkaid Score is the most popular way to measure the readability of English text. It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities. The higher the index value on a 100-point scale, the better the readability of the text.    Smart human-trained search algorithms evaluate all site content for completeness of topic disclosure, and in a form that is understandable to the reader. For this purpose, readability indexes are used. In other words, pages containing simple and clear text get higher positions in the search results. Improving the text in terms of its printing and linguistic qualities will increase the user's viewing time. It turns out that the readability significantly affects the ranking of sites in the search engine.\",\r\n    \"language\": \"en-US\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://api.textgears.com/detect",
							"protocol": "https",
							"host": [
								"api",
								"textgears",
								"com"
							],
							"path": [
								"detect"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Server",
							"value": "nginx"
						},
						{
							"key": "Date",
							"value": "Sat, 09 Jan 2021 00:31:10 GMT"
						},
						{
							"key": "Content-Type",
							"value": "application/json"
						},
						{
							"key": "Transfer-Encoding",
							"value": "chunked"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Vary",
							"value": "Accept-Encoding"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Encoding",
							"value": "gzip"
						}
					],
					"cookie": [],
					"body": "{\n    \"status\": true,\n    \"response\": {\n        \"language\": \"en\",\n        \"dialect\": null,\n        \"probabilities\": {\n            \"en\": 0.931,\n            \"it\": 0.844,\n            \"fr\": 0.84,\n            \"de\": 0.84,\n            \"es\": 0.82,\n            \"pt\": 0.808,\n            \"zh\": 0.651,\n            \"el\": 0.211,\n            \"ru\": 0.148,\n            \"jp\": 0.067\n        }\n    }\n}"
				}
			]
		},
		{
			"name": "https://api.textgears.com/readability",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"key\": \"{{APIKEY}}\",\r\n    \"text\": \"Readability (legibility) is a feature of the text that represents ease of its perception by the reader, as well as the evaluation of its simplicity. The two main factors of readability are the printing and linguistic features of the text.    The Flesch Kinkaid Score is the most popular way to measure the readability of English text. It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities. The higher the index value on a 100-point scale, the better the readability of the text.    Smart human-trained search algorithms evaluate all site content for completeness of topic disclosure, and in a form that is understandable to the reader. For this purpose, readability indexes are used. In other words, pages containing simple and clear text get higher positions in the search results. Improving the text in terms of its printing and linguistic qualities will increase the user's viewing time. It turns out that the readability significantly affects the ranking of sites in the search engine.\",\r\n    \"language\": \"en-US\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://api.textgears.com/readability",
					"protocol": "https",
					"host": [
						"api",
						"textgears",
						"com"
					],
					"path": [
						"readability"
					]
				},
				"description": "Calculation of the readability of the text according to the most common algorithms and their adaptations for most languages.\n\n**Important!**\nWhen determining text metrics, accuracy is directly related to the size of the text. Determining the readability or other parameters of the text for a two-word sentence is meaningless. It is recommended to check texts that has at least 30 words. The more the better."
			},
			"response": [
				{
					"name": "https://api.textgears.com/readability",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"key\": \"{{APIKEY}}\",\r\n    \"text\": \"Readability (legibility) is a feature of the text that represents ease of its perception by the reader, as well as the evaluation of its simplicity. The two main factors of readability are the printing and linguistic features of the text.    The Flesch Kinkaid Score is the most popular way to measure the readability of English text. It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities. The higher the index value on a 100-point scale, the better the readability of the text.    Smart human-trained search algorithms evaluate all site content for completeness of topic disclosure, and in a form that is understandable to the reader. For this purpose, readability indexes are used. In other words, pages containing simple and clear text get higher positions in the search results. Improving the text in terms of its printing and linguistic qualities will increase the user's viewing time. It turns out that the readability significantly affects the ranking of sites in the search engine.\",\r\n    \"language\": \"en-US\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://api.textgears.com/readability",
							"protocol": "https",
							"host": [
								"api",
								"textgears",
								"com"
							],
							"path": [
								"readability"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Server",
							"value": "nginx"
						},
						{
							"key": "Date",
							"value": "Sat, 09 Jan 2021 00:31:34 GMT"
						},
						{
							"key": "Content-Type",
							"value": "application/json"
						},
						{
							"key": "Transfer-Encoding",
							"value": "chunked"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Vary",
							"value": "Accept-Encoding"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Encoding",
							"value": "gzip"
						}
					],
					"cookie": [],
					"body": "{\n    \"status\": true,\n    \"response\": {\n        \"stats\": {\n            \"fleschKincaid\": {\n                \"readingEase\": 53.4,\n                \"grade\": \"10th to 12th grade\",\n                \"interpretation\": \"Fairly difficult to read\"\n            },\n            \"gunningFog\": 12.2,\n            \"colemanLiau\": 12,\n            \"SMOG\": 12,\n            \"vocabularySize\": {\n                \"active\": null,\n                \"passive\": null\n            },\n            \"emotion\": {\n                \"positive\": 0.79,\n                \"negative\": 0.21\n            },\n            \"counters\": {\n                \"length\": 1128,\n                \"clearLength\": 936,\n                \"words\": 187,\n                \"sentences\": 10\n            }\n        }\n    }\n}"
				}
			]
		},
		{
			"name": "https://api.textgears.com/summarize",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"key\": \"{{APIKEY}}\",\r\n    \"text\": \"Readability (legibility) is a feature of the text that represents ease of its perception by the reader, as well as the evaluation of its simplicity. The two main factors of readability are the printing and linguistic features of the text.    The Flesch Kinkaid Score is the most popular way to measure the readability of English text. It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities. The higher the index value on a 100-point scale, the better the readability of the text.    Smart human-trained search algorithms evaluate all site content for completeness of topic disclosure, and in a form that is understandable to the reader. For this purpose, readability indexes are used. In other words, pages containing simple and clear text get higher positions in the search results. Improving the text in terms of its printing and linguistic qualities will increase the user's viewing time. It turns out that the readability significantly affects the ranking of sites in the search engine.\",\r\n    \"language\": \"en-US\",\r\n    \"max_sentences\": 3\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://api.textgears.com/summarize",
					"protocol": "https",
					"host": [
						"api",
						"textgears",
						"com"
					],
					"path": [
						"summarize"
					]
				},
				"description": "Automatic text summarization and keywords extraction. API returns a summary and a highlight. What's the difference?\n\n- Summary contains the most important sentences of text. Summary describes a text content the best way.\n- Highlight is the most important paragraph starting with the most important sentence.\n\nKeywords array is ordered by importance.\nBy default summary size depends on source text length. To limit the number of sentences set max_sentences parameter."
			},
			"response": [
				{
					"name": "https://api.textgears.com/summarize",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"key\": \"{{APIKEY}}\",\r\n    \"text\": \"Readability (legibility) is a feature of the text that represents ease of its perception by the reader, as well as the evaluation of its simplicity. The two main factors of readability are the printing and linguistic features of the text.    The Flesch Kinkaid Score is the most popular way to measure the readability of English text. It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities. The higher the index value on a 100-point scale, the better the readability of the text.    Smart human-trained search algorithms evaluate all site content for completeness of topic disclosure, and in a form that is understandable to the reader. For this purpose, readability indexes are used. In other words, pages containing simple and clear text get higher positions in the search results. Improving the text in terms of its printing and linguistic qualities will increase the user's viewing time. It turns out that the readability significantly affects the ranking of sites in the search engine.\",\r\n    \"language\": \"en-US\",\r\n    \"max_sentences\": 3\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://api.textgears.com/summarize",
							"protocol": "https",
							"host": [
								"api",
								"textgears",
								"com"
							],
							"path": [
								"summarize"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Server",
							"value": "nginx"
						},
						{
							"key": "Date",
							"value": "Sat, 09 Jan 2021 00:32:07 GMT"
						},
						{
							"key": "Content-Type",
							"value": "application/json"
						},
						{
							"key": "Transfer-Encoding",
							"value": "chunked"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Vary",
							"value": "Accept-Encoding"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Encoding",
							"value": "gzip"
						}
					],
					"cookie": [],
					"body": "{\n    \"status\": true,\n    \"response\": {\n        \"keywords\": [\n            \"text\",\n            \"readability\",\n            \"english\",\n            \"printing\",\n            \"fewer\",\n            \"words\",\n            \"terms\",\n            \"higher\",\n            \"features\",\n            \"indexes\"\n        ],\n        \"highlight\": [\n            \"The two main factors of readability are the printing and linguistic features of the text.\",\n            \"In other words, pages containing simple and clear text get higher positions in the search results.\"\n        ],\n        \"summary\": [\n            \"Readability (legibility) is a feature of the text that represents ease of its perception by the reader, as well as the evaluation of its simplicity.\",\n            \"It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities.\",\n            \"Smart human-trained search algorithms evaluate all site content for completeness of topic disclosure, and in a form that is understandable to the reader.\"\n        ]\n    }\n}"
				}
			]
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "APIKEY",
			"value": ""
		}
	]
}