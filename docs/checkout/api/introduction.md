# Integrating via REST APIs

If you're looking for a secure and seamless checkout experience for your customers, our JavaScript SDKs are the perfect solution. However, if you are using a programming language other than JavaScript, our REST APIs provide you with the flexibility and compatibility to integrate CandyPay Checkout into your platform.

## Authentication

CandyPay Checkout API uses API keys to authenticate requests. You can view and manage your API keys in your [Checkout dashboard](https://candypay.fun). All the public API keys are prefixed by `cp_public` and the private API keys are prefixed by `cp_private`. The private API keys are not meant to be exposed on the client-side.

## Errors

CandyPay uses conventional HTTP response codes to indicate the success or failure of an API request. HTTP status codes in the `2xx` range indicates success. HTTP status codes in the `4xx` range indicate an error that failed given the information provided (e.g. a required parameter isn't passed)

| Status Code | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| `200`       | Everything worked as expected                                           |
| `400`       | The request wasn't processed, often due to missing a required parameter |
| `401`       | No valid API key provided                                               |
| `404`       | The requested resource doesn't exist                                    |
| `500`       | Something went wrong on CandyPay's end                                  |
