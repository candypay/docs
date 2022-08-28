# Get QR code metadata

- Base API route URL: https://public-api.candypay.fun/api/v1/qrcode/metadata
- HTTP method: `GET`
- Requires authentication. Get your API keys at https://tally.so/r/wzxrP0

## Parameters

## Query

| Name         | Type   | Description                                            |
| ------------ | ------ | ------------------------------------------------------ |
| `qrCodeID`\* | string | ID of the QR code, generated via the `/generate` route |

## Error status codes

## Error status codes

1. `400` - Bad request. The parameters which the developer has passed in might not meet the required conditions. Check the response for more information about the error.
2. `401` - Unauthorized. Either you might have forgot to pass in the API key or you have passed an invalid API key.
3. `500` - Internal server error. There might have being an error in our servers. For direct support regarding this, you can join our discord server - https://discord.com/invite/VGjPXWUHGT
