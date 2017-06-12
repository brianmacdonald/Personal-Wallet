Personal Wallet
===============

Problem
---
A system needs to be created to allow for sharing personal information verified by an existing employer and accessed by prospective employers that may more may not be SAP customers.

Initial functionality
---
Allow for employees(Actors A) to login using Oauth. verification and add and grant access to personal information. This information is verified by employer(Actor C). Later on if the employee would like they can login using a public account(Actor B) and grant access to prospective employers using a login (Actor D) or public HTTPS link(Actor E)


How to run:
---
 - `yarn install`
 - `yarn start`

Example of creating a public link:
---
 - `curl -H "Content-type:application/json" --data '{"refs": ['2', '3']}' http://localhost:3333/create/public`
 - To access the public link run the follow command with the _key_
  - `curl http://localhost:3333/secret/[key]`




