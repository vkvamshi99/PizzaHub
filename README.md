PizzaHub is a Redux project where people can order pizza without authentication.

---

### Table of Contents

- [Getting Started](#getting-started)
- [References](#references)

---

## Project requirements

- Very simple application, where users can order one or more pizzas from a menu
- Requires no user accounts and no login: users just input their names before using the app
- The pizza menu can change, so it should be loaded from an API
- Users can add multiple pizzas to a cart before ordering
- Ordering requires just the user’s name, phone number, and address
- If possible, GPS location should also be provided, to make delivery easier
- User’s can mark their order as “priority” for an additional 20% of the cart price
- Orders are made by sending a POST request with the order data (user data + selected pizzas) to the API
- Payments are made on delivery, so no payment processing is necessary in the app
- Each order will get a unique ID that should be displayed, so the user can later look up their order based on the ID
- Users should be able to mark their order as “priority” order even after it has been placed

## Technologies

- React
- Tailwindcss
- React Router
- Redux

[Back To The Top]

---

## Getting Started

To start the project, it is necessary to download the files from the github repository and after that run this commands:
<br>`'npm i'` <br> `'npm run dev'`

[Back To The Top]




[Back To The Top](#fast-react-pizza-co.)
