# Generate QR code

- Base API route URL: https://public-api.candypay.fun/api/v1/generate
- HTTP method: `POST`
- Requires authentication. Get your API keys at https://tally.so/r/wzxrP0

## Parameters

## Body

| Name               | Type   | Description                                                            | Default                        |
| ------------------ | ------ | ---------------------------------------------------------------------- | ------------------------------ |
| `candyMachineId`\* | string | Candy Machine ID of the NFT collection                                 | N/A                            |
| `network`          | string | Network on which the Candy Machine is deployed                         | `mainnet`                      |
| `rpcURL`           | string | Custom RPC URL which would be used for interacting with the blockchain | CandyPay's QuickNode           |
| `label`            | string | Name of the NFT collection                                             | `Made with <3 by CandyPay`     |
| `icon`             | string | URL of the NFT collection's icon                                       | CandyPay's icon                |
| `message`          | string | Short text which would be shown to the user                            | `Thanks for minting the NFTs!` |

## Error status codes

1. `400` - Bad request. The parameters which the developer has passed in might not meet the required conditions. Check the response for more information about the error.
2. `401` - Unauthorized. Either you might have forgot to pass in the API key or you have passed an invalid API key.
3. `500` - Internal server error. There might have being an error in our servers. For direct support regarding this, you can join our discord server - https://discord.com/invite/VGjPXWUHGT
