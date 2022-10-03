# Redeem $SOL balance from payer wallet

After creating Gasless collection earlier, creator had to fund $SOL to a proxy `payer` wallet address to power Gas fees so users can mint NFTs in a gasless manner. Fortunately, creators can redeem this balance back to their personal wallet address once the usecase is completed and there won't be any more minting happening in there collection. This is how they can redeem this balance,

- Base API route URL: https://public-api.candypay.fun/api/v1/gasless/redeem-funds
- HTTP method: `POST`
- Requires authentication. Get your API keys at https://tally.so/r/wzxrP0

## Parameters

### Body

| Name                 | Type   | Description                                    | Example                                       |
| -------------------- | ------ | ---------------------------------------------- | --------------------------------------------- |
| `id`\*               | string | `qr_code_id`of the collection                  | `Q5ZRUp_RcZlbKOw3BXO6S`                       |
| `amount`\*           | number | amount of $SOL you want to redeem              | 0.4                                           |
| `address`\*          | string | wallet address which will receive this amount  | `5T1ssgMSLm6ZowCmASkefDrPqSsg2RRVU3BvZoiyj1uc`|

## Response

On successful POST request, the API would redeem the balance from `payer` wallet to `recipient` wallet address and response this:

- `message`: Success prompt for redeemption with the `amount` redeemed
- `signature`: transaction signature of this transaction which you can look up for more details in block explorers

## Error status codes

1. `400` - Bad request. The parameters which the developer has passed in might not meet the required conditions. Check the response for more information about the error.
2. `401` - Unauthorized. Either you might have forgot to pass in the API key or you have passed an invalid API key.
3. `500` - Internal server error. There might have being an error in our servers. For direct support regarding this, you can join our discord server - https://discord.com/invite/VGjPXWUHGT

## Examples

### TypeScript

```ts
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const generateQRCode = async () => {
  const response = await axios.post(
    "https://public-api.candypay.fun/api/v1/gasless/redeem-funds",
    {
      data: {
       {
        id:"Q5ZRUp_RcZlbKOw3BXO6S",
        amount:0.4,
        address:"5T1ssgMSLm6ZowCmASkefDrPqSsg2RRVU3BvZoiyj1uc"
      }
      },
      headers: {
        Authorization: `Bearer ${process.env.CANDYPAY_API_KEY}`,
      },
    }
  );

  console.log(response);
};
```

### Python

```py
import requests
import json
from decouple import config

req_url = "https://public-api.candypay.fun/api/v1/gasless/generate"

headers_list = {
 "Authorization": f"Bearer {config('CANDYPAY_API_KEY')}",
 "Content-Type": "application/json"
}

payload = json.dumps({
   {
    "id":"Q5ZRUp_RcZlbKOw3BXO6S",
    "amount":0.4,
    "address":"5T1ssgMSLm6ZowCmASkefDrPqSsg2RRVU3BvZoiyj1uc"
  }
})

response = requests.request("POST", req_url, data=payload,  headers=headers_list)

print(response.text)
```
