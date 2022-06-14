export const drinkMenuOptions = [
  {
    key: 100,
    value: "dripcoffee",
    label: "Drip Coffee",
    children: [
      { key: 101, value: ["regular", 1.79], label: ["Regular $1.79"]},
      { key: 102, value: ["large", 1.99], label: "Large $1.99"},
    ]
  },
  {
    key: 110,
    value: "latte",
    label: "Latte",
    children: [
      { key: 111, value: ["regular", 2.79], label: "Regular $2.79"},
      { key: 112, value: ["large", 3.29], label: "Large $3.29"},
    ]
  },
  {
    key: 120,
    value: "cappuccino",
    label: "Cappuccino",
    children: [
      { key: 121, value: ["regular", 2.79], label: "Regular $2.79"},
      { key: 122, value: ["large", 3.29], label: "Large $3.29"},
    ]
  },
  {
    key: 130,
    value: "macchiato",
    label: "Macchiato",
    children: [
      { key: 131, value: ["regular", 2.79], label: "Regular $2.79"},
      { key: 132, value: ["large", 3.29], label: "Large $3.29"},
    ]
  },
  {
    key: 140,
    value: "americano",
    label: "Americano",
    children: [
      { key: 141, value: ["regular", 2.49], label: "Regular $2.49"},
      { key: 142, value: ["large", 2.99], label: "Large $2.99"},
    ]
  },
  {
    value: "espresso",
    label: "Espresso",
    children: [
      { value: ["single", 1.49], label: "Single $1.49"},
      { value: ["double", 2.49], label: "Double $2.49"},
    ]
  },
  {
    value: "tea",
    label: "Tea",
    children: [
      { value: ["regular", 1.79], label: ["Regular $1.79"]},
      { value: ["large", 1.99], label: "Large $1.99"},
    ]
  },
  {
    value: "hotchocolate",
    label: "Hot Chocolate",
    children: [
      { value: ["regular", 1.99], label: ["Regular $1.99"]},
      { value: ["large", 2.29], label: "Large $2.29"},
    ]
  },
  {
    value: "milk",
    label: "Milk",
    children: [
      { value: ["regular", 1.49], label: ["Regular $1.49"]},
      { value: ["large", 1.79], label: "Large $1.79"},
    ]
  },
  {
    value: "wine",
    label: "Wine (21+, must show ID at pickup)",
    children: [
      { value: ["glass", 4.99], label: "Glass $4.99"},
      { value: ["bottle", 15.99], label: "Bottle $15.99"},
    ]
  },
  {
    value: "beer",
    label: "Beer (21+, must show ID at pickup)",
    children: [
      { value: ["domestic", 2.99], label: "Domestic $2.99"},
      { value: ["imported", 3.99], label: "Imported $3.99"},
      { value: ["local", 3.99], label: "Local $3.99"},
    ]
  },
]

export const foodMenuOptions = [
  { key: 200, value: ["cookie", 1.99], label: "Cookie $1.99"},
  { key: 201, value: ["brownie", 1.99], label: "Brownie $1.99"},
  { key: 202, value: ["croissant", 2.49], label: "Croissant $2.49"},
  { key: 203, value: ["danish", 2.49], label: "Danish  $2.49"},
  { key: 204, value: ["coffeecake", 2.49], label: "Coffee Cake $2.49"},

  { key: 205, value: ["eggsandwich", 4.49], label: "Egg Sandwich $4.49"},
  { key: 206, value: ["bagelspread", 3.49], label: "Bagel & Spread $3.49"},
  { key: 207, value: ["cereal", 3.49], label: "Cereal $3.49"},
  { key: 208, value: ["veggiewrap", 4.99], label: "Veggie Wrap $4.99"},
]
