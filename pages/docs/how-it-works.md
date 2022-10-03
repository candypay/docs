# How it works

The following represents the under-the-hood process of what happens after scanning a CandyPay QR code.

CandyPay provides a seamless user experience by bundling necessary instructions and returning the desired Solana transaction to the user's wallet. The wallet then simulates the transaction on Solana blockchain.

## Step by step overview: How CandyPay actually works

1. The users opens a Solana Pay compatible wallet and scans the generated CandyPay QR code.
2. The wallet would extracts the transaction request URL from the QR code. The extracted would look like this `solana:https://api.candypay.fun/api/v1/mint?id=<qr-code-id>`
3. The wallet would initially send a `GET` request to our backend to fetch the metadata related to the QR code - URL of the icon, name of the NFT collection.
4. After the wallet has successfully fetched the metadata, it would send a `POST` request along with the user's public key in request payload. Our backend would return base58 encoded transaction with the required instructions in it.
5. The wallet would decode the base58 encoded transaction and simulate the transaction on the Solana blockchain and identify the fees associated with the transaction.
6. The user is then able to review the transaction details and sign & send the transaction for execution on the Solana blockchain.
7. If the transaction is successful, a transaction signature is returned to the user’s wallet, and a "Transaction is successful" prompt would be shown to the user.

![](https://res.cloudinary.com/dtzqgftjk/image/upload/v1664797086/Untitled-2022-08-29-2109_uxn7cr.png)