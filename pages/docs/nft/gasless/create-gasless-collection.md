# Create Gasless Collection

Create a Gasless NFT collection with it's 'headless-minting' QR code and Tap to mint links. It's a special collection, where creators can fund a payer wallet beforehand to power gas fees meanwhile The end-user can **mint NFTs in a gasless manner**

- Base API route URL: https://public-api.candypay.fun/api/v1/gasless/generate
- HTTP method: `POST`
- Requires authentication. Get your API keys at https://tally.so/r/wzxrP0

## Parameters

### Body

| Name                 | Type   | Description                                    | Example                              |
| -------------------- | ------ | ---------------------------------------------- | ------------------------------------ |
| `name`               | string | Name of the NFT collection                     | Candy Land                           |
| `symbol`             | string | Symbol of the NFT collection                   | CNDY                                 |
| `uri`\*              | string | Metadata url of the collection                 | https://metadata.degods.com/g/4.json |
| `seller_fee`         | number | Royalty fees charged on secondary sale         | `6` for 6%                           |
| `collection_size`\*  | number | Total NFTs to be minted from this collection   | `50` for a collection of 50 NFTs     |
| `network`\*          | string | Network on which collection will be created    | `mainnet` or `devnet`                |
| `label`              | string | Name of the NFT collection                     | Candy Land                           |

## Response

On successful POST request, the API would return an response object containing the following fields, under the `metadata` object:

- `qr_code_id`: ID of the QR code
- `solana_url`: Solana protocol encoded URL which is used to render the QR code
- `public_key`: Wallet Address aka Public Key of payer wallet which will pay for Gas fees funded by creator of this collection
- `amount`: total amount of `$SOL` creator needs to fund in the `public_key` payer wallet

## Error status codes

1. `400` - Bad request. The parameters which the developer has passed in might not meet the required conditions. Check the response for more information about the error.
2. `401` - Unauthorized. Either you might have forgot to pass in the API key or you have passed an invalid API key.
3. `500` - Internal server error. There might have being an error in our servers. For direct support regarding this, you can join our discord server - https://discord.com/invite/VGjPXWUHGT

## Usage

On successful creation of `solana_url`, you can create QR Codes and Tap to Mint links to power NFT minting in a seamless & Gasless way directly from any social platform. Make sure to fund payer wallet responded as `public_key` the required `amount` of $SOL, else minting will not work

- **QR Code**: Use any qr code utility npm package or online editors like [QR Code Monkey](https://www.qrcode-monkey.com/) to create and design minting QR Codes passing `solana_url`
- **Mint Links**: Pass this created `solana_url` in `href` of any button or anchor tag to power Tap to Mint flow for your users

## Examples

### TypeScript

```ts
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const generateQRCode = async () => {
  const response = await axios.post(
    "https://public-api.candypay.fun/api/v1/gasless/generate",
    {
      data: {
        name:"Candy Land",
        symbol:"CNDY",
        uri:"https://metadata.degods.com/g/4.json",
        seller_fee:10,
        collection_size:50,
        network:"devnet",
        label:"Candy Land"
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
    "name":"Candy Land",
    "symbol":"CNDY",
    "uri":"https://metadata.degods.com/g/4.json",
    "seller_fee":10,
    "collection_size":50,
    "network":"devnet",
    "label":"Candy Land"
})

response = requests.request("POST", req_url, data=payload,  headers=headers_list)

print(response.text)
```

## Disclaimer

**- Minting won’t work if,** 
- the resulting `public_key` is not funded based on the required `amount`
- the network of the created collection is different than that of the network of the user wallet

**- Gasless collections are under active development, so try to deploy small collections with a minimal number of NFTs**

**- If you feel someone can drain your collection NFTs and payer wallet balance, try to use our No-Code Builder which has implemented the limit per wallet feature** (coming soon for Public APIs)