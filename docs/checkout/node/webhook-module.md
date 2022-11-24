# Webhook module

The `webhook` module can be accessed via `candypay.webhook()` and provides the following methods:

- [`register`](#register)

## `register`

The `register` method registers a webhook for a specific checkout session for listening to actions such as `transaction.successful`, `transaction.failed`. It takes in the following parameters and returns `webhook_secret` which can be used to validate the API calls in the webhook server:

- `webhook_url` - The URL endpoint of the webhook. If your webhook server is running on localhost, you may wanna use localhost tunneling options such as [ngrok](https://ngrok.com) or [localhost.run](https://localhost.run)
- `name` - Name of the webhook
- `description` - A short description regarding the webhook

  ```ts
  const webhook = await sdk.webhook.register({
    webhook_url: "https://your-webhook-url.com",
    name: "e-com webhook",
    description: "webhook for my e-com site",
  });
  ```
