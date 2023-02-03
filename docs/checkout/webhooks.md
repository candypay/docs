# Implementing custom webhooks

CandyPay checkout allows developer to setup their own webhooks to listen events such as `transaction.successful`, `transaction.failed` and run post-checkout events such as saving the transaction details to a database.

::: tip 
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
      payload,
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

The `/webhook` endpoint validates the `X-CandyPay-Signature` header via the webhook secret (which is returned by the [`webhook.register()`](./node-sdk.md#register) method.
