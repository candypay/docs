# How it works

The following represents the under-the-hood process of what happens after scanning a CandyPay QR code.

CandyPay provides a seamless user experience by bundling necessary instructions and returning the desired Solana transaction to the user's wallet. The wallet then simulates the transaction on Solana blockchain.

## Step by step overview

1. The users opens a Solana Pay compatible wallet and scans the generated CandyPay QR code.
2. The wallet would extract the transaction request URL from the QR code.
3. The wallet would initially send a `GET` request to CandyPay's API server to fetch the metadata related to the QR code — URL of the icon, name of the NFT collection.
4. After the wallet has successfully fetched the metadata, it would send a `POST` request along with the user's public key in request payload. CandyPay's API server would respond with a base64 encoded transaction with the required instructions in it.
5. The wallet would decode the base64 encoded transaction and simulate the transaction on Solana and identify the fees associated with the transaction.
6. The user is then able to review the transaction details and sign & send the transaction for execution on Solana.
7. If the transaction is successful, a transaction signature is returned to the user’s wallet, and a "Transaction is successful" prompt would be shown to the user.
