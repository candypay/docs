# Get QR code metadata

Fetch the metadata related to a QR code i.e `label`, `icon`, `candy_machine_id`

- Base API route URL: https://public-api.candypay.fun/api/v1/qrcode/metadata
- HTTP method: `GET`
- Requires authentication. Get your API keys at https://tally.so/r/wzxrP0

## Parameters

### Query

| Name   | Type   | Description                                            |
| ------ | ------ | ------------------------------------------------------ |
| `id`\* | string | ID of the QR code, generated via the `/generate` route |

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

const fetchQRCodeMetadata = async () => {
  const response = await axios.get(
    "https://public-api.candypay.fun/api/v1/qrcode/metadata",
    {
      params: {
        id: "zEezeSMO3i1N_Q3x3ddwz",
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

req_url = "https://public-api.candypay.fun/api/v1/qrcode/metadata?id=zEezeSMO3i1N_Q3x3ddwz"

headers_list = {
 "Authorization": f"Bearer {config('CANDYPAY_API_KEY')}",
 "Content-Type": "application/json"
}

response = requests.request("GET", req_url, headers=headers_list)

print(response.text)
```
