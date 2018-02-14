# Tia Technical Challenge - Fullstack
Estimated time commitment: 2-4 hours. The task is not timed and you can work at your own pace.

## Task
Your task is to develop a UI for users to reliably view their bank transactions including deposits, withdrawals and transfers.

Unfortunately, you only have access to a third party API created by the underlying bank to access ledgers, which is a very unreliable API in that ledger entries may have duplicates, they may not be retrieved in the order in which they occurred, or they may not have all of the entries that happened.

Regardless of the unreliable API, your task is to display the most accurate ledger to users as possible.

## Tools
* You should implement the server in node.js.
* You are free to use any front end technologies that you think will be best suited for the task
* You should use modern JavaScript (ES6) and best practices.

## Requirements

### 1. Implement the following endpoints:

GET / | returns status 200 and a blank response body

GET /ledger/{file-name} | accepts a path variable specifying the name of a data file to fetch on the server. Sample request: http://localhost:3000/ledger/simple-ledger

### 2. Server side requirements

1. Fetch ledgers from the json files found in the /data directory
1. Ensure all ledgers requested by the client are returned in logical order

### 3. Client side requirements

1. Create a UI that requests and renders a ledger from the `/ledger/{ledger-name}` endpoint
2. Come up with your own logical descriptions for these transactions and display them in the "Description" column of the
transaction table. This can be done on the server side if desired.
3. Write a stylesheet for your application.

**Note:** There is a wireframe of how to display ledgers included with this project. Notice that each transaction has a logical
          description like "Deposit from Chase Bank **0978 for your investment in Uber". You should use the provided wireframe as inspiration for your UI client.

## Notes

Ledgers are defined in JSON files containing a single array. Each object in the array represents one transaction.

Transactions have activity ids, datetimes, amounts, and balances. The balance represents the balance in the investor's
account *after* the transaction has been applied.

Example:

```
[
    {
        "activity_id": "1",
        "date": "2018-10-01T01:00:29+00:00",
        "type": "DEPOSIT",
        "method": "ACH",
        "amount": 1003.75,
        "balance": 1003.75,
        "requester": {
            "type": "INVESTMENT"
        },
        "source": {
            "type": "EXTERNAL",
            "id": 18238147,
            "description": "Chase ** 9867"
        },
        "destination": {
            "type": "INVESTOR",
            "id": 76510190788,
            "description": "Elon Musk"
        }
    }
]
```

This ledger has one entry, a deposit. Before this transaction occurred, the investor's balance was $0. After $1003.75
was deposited, the investor's balance was $1003.75.

To view a ledger, start your server and navigate to

[http://localhost:3000/ledger/simple-ledger]

This will load and log the ledger file at data/simple-ledger.json. Change the URL to view the other ledger files.

`duplicate-ledger` is a ledger that contains two entries with the same activity_id. Modify the application code to
filter out one of them and display the resulting ledger.

`complicated-ledger` has more kinds of errors. Figure out how to transform this into an understandable ledger for your users before sending to the client.

## Non-requirements
* You do not need to implement authentication to secure access to your service.
* You do not need to support https
* Your code does not have to be production ready, although you should make proper design decisions and tradeoffs

## Delivery and deployment
* Provide access to the code
* Provide a README with brief deployment instructions for someone to deploy your code and an overview of the application

## Other things to consider
You are not required to write code to address these points, but consider them for discussion.

* What measures should be taken to protect the site hosting this service?
* Respond to erroneous or malformed requests with appropriate HTTP status codes.
* Be prepared to discuss your choice of given UI components (e.g. "Bootstrap", hand-rolled, etc)
* Be prepared to discuss rendering differences (if any) of your code on current popular browsers
* Implement logging
* Be creative!