# Endpoints

## Create checkout session

The create checkout session API endpoint allows you to create a new checkout session for a customer to complete a payment. It returns an unique session ID and order ID.

### Endpoint

```bash
POST https://checkout-api.candypay.fun/api/v1/session
```

### Headers

- `Authorization`: Private API key as a Bearer token

### Request

All the following parameters must be passed in the request's payload/body.

- `network` - It is either `mainnet` or devnet, specifying the network to use for the transaction
- `success_url` - The URL to which the customer is redirected after the transaction is successful
- `cancel_url` - The URL to which the customer is redirected after the transaction is canceled
- `tokens` (Optional) - An array of optional tokens via which the customer can pay
- `items` - An array of items which would be displayed on the checkout page. Each element of the `items` array is an object which must contain the `name`, `price`, `image`, `quantity` and `size` of the product. Extensive type definition - [Items](./types.md#items)
- `discounts` (Optional) - An object containing details regarding the NFT via which the customer can get discounts. Extensive type definition - [Discounts](./types.md#discounts)
- `shipping_fees` (Optional) - It is the fees required for shipping the item to the customer. Must be of type `number`
- `config` - An object containing details regarding additional configuration. Extensive type definition - [Config](./types.md#config)

### Response Body

- `session_id` - An unique identifier for the checkout session
- `order_id` - An unique identifier which can be used to track transactions in the dashboard

## Create payment URL

The create payment URL API endpoint allows you to create a payment page from an exisiting checkout session id, which users can visit and complete the payment 

### Endpoint

```bash
GET https://checkout-api.candypay.fun/api/v1/session/payment_url
```

### Headers

- `Authorization`: Public API key as a Bearer token

### Request

All the following parameters must be passed as query parameters.

- `session_id` - The unique identifier of the checkout session

## Fetch checkout session metadata

The fetch checkout session metadata API endpoint allows you to retrieve the metadata of an existing checkout session. You can use this information to track the status of a checkout session, such as the transaction details, payment status, and other relevant information.

### Endpoint

```bash
GET https://checkout-api.candypay.fun/api/v1/session
```

### Headers

- `Authorization`: Public API key as a Bearer token

### Request

All the following parameters must be passed as query parameters.

- `session_id` - The unique identifier of the checkout session
