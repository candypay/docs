# Generate QR code

Generate a 'headless-mint' QR code for your NFT collection via its Candy Machine v2 ID. The end-user would **need to pay the gas fees**

- Base API route URL: https://public-api.candypay.fun/api/v1/generate
- HTTP method: `POST`
- Requires authentication. Get your API keys at https://tally.so/r/wzxrP0

## Parameters

### Body

| Name                 | Type   | Description                                    | Default                         |
| -------------------- | ------ | ---------------------------------------------- | ------------------------------- |
| `candy_machine_id`\* | string | Candy Machine v2 ID of the NFT collection      | N/A                             |
| `network`            | string | Network on which the Candy Machine is deployed | `mainnet`                       |
| `label`              | string | Name of the NFT collection                     | `CandyPay`                      |
| `icon`               | string | URL of the NFT collection's icon               | `https://candypay.fun/icon.png` |

## Response

On successful creation of the QR code, the API would return an response object containing the following fields, under the `metadata` object:

- `qr_code_id`: ID of the QR code
- `solana_url`: Solana protocol encoded URL which is used to render the QR code

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
    "https://public-api.candypay.fun/api/v1/generate",
    {
      data: {
        candy_machine_id: "GrVSy3ZRbuw5ACbwSEMsj9gULk9MW7QPK1TUYcP6nLM",
        label: "CandyPay",
        network: "devnet",
        icon: "https://candypay.fun/icon.png",
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

req_url = "https://public-api.candypay.fun/api/v1/generate"

headers_list = {
 "Authorization": f"Bearer {config('CANDYPAY_API_KEY')}",
 "Content-Type": "application/json"
}

payload = json.dumps({
  "candy_machine_id": "GrVSy3ZRbuw5ACbwSEMsj9gULk9MW7QPK1TUYcP6nLM",
  "label": "CandyPay",
  "network": "devnet",
  "icon": "https://candypay.fun/icon.png"
})

response = requests.request("POST", req_url, data=payload,  headers=headers_list)

print(response.text)
```
