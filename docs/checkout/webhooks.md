# Implementing custom webhooks

CandyPay checkout allows developer to setup their own webhooks to listen events such as `transaction.successful`, `transaction.failed` and run post-checkout events such as saving the transaction details to a database.

::: tip Source Code
:zap: Full source code for the example webhook server available [here](https://github.com/candypay/checkout-webhook-example)
:::

## Setting up an Node.js server

We'll be using [express.js](https://expressjs.com/) to setup the webhook server. Go ahead and install [`express`](https://npmjs.com/package/express), [`dotenv`](https://npmjs.com/package/dotenv)

```bash
pnpm i express dotenv
```

If you're using TypeScript, you'll need to additional install the typings for the express module - [`@types/express`](https://npmjs.com/package/@types/express)

```ts
import express, { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_req: Request, res: Response) => {
  return res.status(200).json({
    message: "I'm alive!",
  });
});

const port = 3000 || process.env.PORT;

app.listen(3000, () => {
  console.log(`The server is running on port ${port}`);
});
```

## Creating webhook endpoint

A webhook is an endpoint on your server that receives incoming requests regarding checkout session's transaction updates from CandyPay. Add a new `POST` endpoint to your server.

```ts
import { verifyWebhookSignature } from "@candypay/checkout-sdk";

app.post("/webhook", async (req: Request, res: Response) => {
  const headers = req.headers;
  const payload = req.body;

  try {
    await verifyWebhookSignature({
      payload: JSON.stringify(payload),
      headers: headers as Record<string, string>,
      webhook_secret: process.env.WEBHOOK_SECRET!,
    });
  } catch (err) {
    return res.status(400).json({
      message: "Invalid webhook signature",
    });
  }

  return res.send();
});
```

The `/webhook` endpoint validates the `X-CandyPay-Signature` header via the webhook secret field. The webhook secret needs to be generated from the CandyPay dashboard, under the [settings page](https://candypay.fun/settings)

The `payload` objects provides you with all the payment related data that can be used to power multiple functions like NFT airdrops, SPL tokens cashback, storing payments in your custom dB, sending emails, and much more! A payload object includes all the below given fields,

```
{
customer: '882BZWTWuJehEocq3wRq2dzzTe53n51C64rcWWVkDSpS',
customer_email: 'customer@gm.com',
event: 'transaction.successful',
items: [{
image: 'https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/61h5vYyRsjL._SL1212_.jpg';,
name: 'Clayno Plushie',
price: 0.03,
quantity: 1
}],
metadata: {
customer_name: "John Doe"
},
network: 'mainnet',
order_id: 'TyAhFD63RK8U',
payment_amount: 0.03,
payment_currency: 'USD',
session_id: 'cp_pay_ef1bf155-7ae9-47e7-bbac-091e64fddeb9',
signature: 'bzX81JoktbiKBkAqoVN1EAPFF9H6YfdcqeGez4d9SD9k8F2H62yF1gLaevtmED31b7XcCpWgRJhYMxhfQSFSThc',
timestamp: '2023-04-11T18:02:08.644Z'
}
```
