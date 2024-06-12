# Лаби Solana Bootcamp

## Урок 1. Завантаження та збереження ключів

*generate-keypair.ts
load-keypair.ts*

https://explorer.solana.com/address/KstbtPJMBASgrjFQ9stPHfeQToYNwf4SrNZkMj1PmqL?cluster=devnet

## Урок 2. Використання Solana Devnet

*faucet.ts*
*check-balance.ts*

![image](https://github.com/kostaloo/solana-training/assets/22592677/1caff9c5-473e-49b7-9703-9d353d71a78e)

## Урок 4. Операції та відправлення SOL

*send-sol.ts*

https://explorer.solana.com/tx/4sfCBwReyFXvhyj9KfgCrdgM4PKe82ZYwAS8kFdgAyqjhX1jzGXctePntih4Jtk7L7ndHB3KKiuBzieJhwLSd5Nn?cluster=devnet

# Урок 5. Створіть token mint і викарбуйте власні токени

*create-token-mint.ts.ts
create-token-account.ts
mint-tokens.ts*

https://explorer.solana.com/address/GrcM8n7cxqEiXa2QxYZSk9sr2RT73X9a8fScjZbNo6t5?cluster=devnet

# Урок 5. Додаткові завдання

### Частина 1

Використав свій головний ключ KstbtPJMBASgrjFQ9stPHfeQToYNwf4SrNZkMj1PmqL та допоміжний LoLtS3XaUDr8QmEK8Fc3eiaE9iZrgWgTspNj6NisYWy

*multisig-create.ts*
Створив 2/2 multisig  
https://explorer.solana.com/address/DvNcMwH5R3Numpv5696hgfC1ZrUwcfbeB4FeAFER9Jae?cluster=devnet

https://explorer.solana.com/tx/4jZWjeJpfMHTcimCNk8UUxRpNNKShcqnZzFW5o2T73togpGrWAEYepm22feJBnK4ePJ9TAhAbwYvJ99wxcQjnFHh?cluster=devnet

*multisig-create-mint.ts*
Створив multisig token mint  
https://explorer.solana.com/address/7GGcMnCBQX9vZCXNidVKkjRjrPXnoK9fM8KUEerDnV9F?cluster=devnet

*multisig-create-account.ts*
Створив multisig token account для головного ключа  
https://explorer.solana.com/address/G3faxiDykEZtEpEp5GUXtvENe1M1XaczWnAhRJiqyPDF?cluster=devnet

*multisig-mint.ts*
Змінтив 10.01 токенів на G3faxiDykEZtEpEp5GUXtvENe1M1XaczWnAhRJiqyPDF за підписом KstbtPJMBASgrjFQ9stPHfeQToYNwf4SrNZkMj1PmqL та LoLtS3XaUDr8QmEK8Fc3eiaE9iZrgWgTspNj6NisYWy
https://explorer.solana.com/tx/3R9AEr9dekQEfzKtTU8tRaoYA9oCxmEJbqV4NZbA1KvJAojzfpJe4kQRb3aCwuunUgKKGy8ecURYpuWmz9ib4PnC?cluster=devnet

### Частина 2

*send-token.ts*
Спершу просто перекинув 92 токени з тих як намінтив мультисіг мінтом  
https://explorer.solana.com/tx/2JLdp4VDdYpASi1Lw1JzxoqgnD4sscJjmdSsRbUEhCtzTo8S13PRKXQVRxHghXy2LzQgyYGoCGQf2EEsuhpKuNZo?cluster=devnet

*send-token-create.ts*
Створив підписану транзу на 35 тих же токенів (коментарі по коду), її хеш  
AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACL+r2lMYf+xRWl/6xiOYD9EpoVPyMM/xzsenLxj8HHT46NTOploi31zufaxZr1YtEvy+YzV/47jP5FVPc7EEUGAgEBBQUSb3g7SU3HdHsRyJH/T9Md3pfbVSLDDxjh9FL2qNLmBNX+5sVXqh71+pIINty+07jImgM1pBrLTAbxj4IBl1NLWjP7wT/F+ZPInSllOimkkkr9kI+3Fp/bkckMhmqH2N+OGCSEaJsg0WlFRLbcf42U9bU3fkUnDdvlBoPNlep+Bt324ddloZPZy+FGzut5rBy0he1fWzeROoz1hX7/AKkKJTprDLeKsaD+uzKc214Jl9QgD4iKY8K06lxKSeaAIQEEAwMCAQkDIwAAAAAAAAA=!

*send-token-receive.ts*
Отримав підписану транзу, розкодував, підписав, закодував і надіслав до блокчейну. Деталі оборудки  
https://explorer.solana.com/tx/4WHUika65549c7VTBHDwS51YKkzSR2SyYaDUgGSgWNJnRwSBC84HeYoK1EsqMci392AUKFo1YKiM8ow6s5hcRVAU?cluster=devnet

### Частина 3

**Durable nonce transactions**

**send-token-nonce-create.ts*  
Створив Nonce account  
https://explorer.solana.com/address/Hv27UpKS9RtcjhmyzEZeLojBNh4V5JQQkxsbfbn8uwER?cluster=devnet

Створив підписану хешовану Nonce транзу  
AUOg+5zzZLb+S6XHNVtfLeCZAuqVNst89NufK094ZZKTqwtshQT5onFMNfOF4jfrOiCFJ7mL6/wZeGgvvvZoawcBAAMHBNX+5sVXqh71+pIINty+07jImgM1pBrLTAbxj4IBl1NLWjP7wT/F+ZPInSllOimkkkr9kI+3Fp/bkckMhmqH2N+OGCSEaJsg0WlFRLbcf42U9bU3fkUnDdvlBoPNlep++1AH3ZeecvEQ/KymltjlnQz+C6BW4xVrJUQgtBcsXtIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAan1RcZLFaO4IqEX3PSl4jPA1wxRbIas0TYBi6pQAAABt324ddloZPZy+FGzut5rBy0he1fWzeROoz1hX7/AKmuldOMpIoueTjKu76DLv6Z5tGFKOZNc+j2HBawYdLKqAIEAwMFAAQEAAAABgMCAQAJAxIAAAAAAAAA

*send-token-nonce-receive.ts*  
Через деякий тривалий час пробуємо виконати транзу з хеша  
Баланс отримувача успішно поповнено на 18 токенів  
https://explorer.solana.com/tx/2MRXGsMMB5YWGSUDFSMFvrCad3j8B5WfQnT2jXM8ixBsfR73NVvsjU6MzSCerPTnRXktU2jKriddw56BxUYTHdYr?cluster=devnet

# Урок 6. Створіть метадату токена

Виконувались для навчального токену  
https://explorer.solana.com/address/GrcM8n7cxqEiXa2QxYZSk9sr2RT73X9a8fScjZbNo6t5/metadata?cluster=devnet

*create-token-metadata.ts*
Створив Метаплекс метадата екаунт, записав до URI картинку яку залив на Pinata
https://harlequin-raw-reptile-458.mypinata.cloud/ipfs/Qmcfn58UTMCktsMgNj3cAs6HKHVxus6KxJH86rvrAnbHCB

Але це не норм, тому що в URI експлорер очікує на JSON метадату з атрибутами токену/NFT, тому далі

*token-metadata-update.ts*
За методами ліби @metaplex-foundation/js оновив метадата URI, вказавши JSON файл також залитий на Pinata  
https://harlequin-raw-reptile-458.mypinata.cloud/ipfs/QmQ1cgjQmVPNHPamtnwTQ6CXsJRy1MtaW6vfA6kJ4qMbce  
Експлорер успішно оновив картинку з атрибуту image JSON метадати
