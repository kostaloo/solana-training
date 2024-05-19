# Лаби Solana Bootcamp

# Завдання на вівторок, 2024-05-21

### Частина 1

Використав свій головний ключ KstbtPJMBASgrjFQ9stPHfeQToYNwf4SrNZkMj1PmqL та допоміжний LoLtS3XaUDr8QmEK8Fc3eiaE9iZrgWgTspNj6NisYWy

* *multisig-create* *
Створив 2/2 multisig
https://explorer.solana.com/address/DvNcMwH5R3Numpv5696hgfC1ZrUwcfbeB4FeAFER9Jae?cluster=devnet

***Заплатив за операцію 0.00001 SOL але по експлореру change для payer склав -0.00337168, чому?***
https://explorer.solana.com/tx/4jZWjeJpfMHTcimCNk8UUxRpNNKShcqnZzFW5o2T73togpGrWAEYepm22feJBnK4ePJ9TAhAbwYvJ99wxcQjnFHh?cluster=devnet

* *multisig-create-mint* *
Створив multisig token mint
https://explorer.solana.com/address/7GGcMnCBQX9vZCXNidVKkjRjrPXnoK9fM8KUEerDnV9F?cluster=devnet

***І знов change для payer відрізняється***

* *multisig-create-account* *
Створив multisig token account для головного ключа
https://explorer.solana.com/address/G3faxiDykEZtEpEp5GUXtvENe1M1XaczWnAhRJiqyPDF?cluster=devnet

* *multisig-mint* *
Змінтив 10.01 токенів на G3faxiDykEZtEpEp5GUXtvENe1M1XaczWnAhRJiqyPDF за підписом KstbtPJMBASgrjFQ9stPHfeQToYNwf4SrNZkMj1PmqL та LoLtS3XaUDr8QmEK8Fc3eiaE9iZrgWgTspNj6NisYWy

***Між mintTo та getMint потрібна пауза, Supply може не оновитися так швидко***

Баланси токену з попереднього заняття (10) та новоствореного токену (10.01) у відповідній вкладці
https://explorer.solana.com/address/KstbtPJMBASgrjFQ9stPHfeQToYNwf4SrNZkMj1PmqL/tokens?cluster=devnet