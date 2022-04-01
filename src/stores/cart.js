import { writable } from "svelte/store";

export const cart = writable([
  {
    name: "Fall Limited Edition Sneakers",
    image: "/images/sneakers-main.webp",
    price: 125,
    amount: 1,
  },
  {
    name: "Fall Limited Edition Sneakers",
    image: "/images/sneakers-2.webp",
    price: 154,
    amount: 5,
  },
  {
    name: "Fall Limited Edition Sneakers",
    image: "/images/sneakers-3.webp",
    price: 123,
    amount: 3,
  },
]);

export const isCartVisible = writable(false);
