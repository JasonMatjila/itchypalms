// src/services/OrderService.js
import { db } from "src/boot/firebase";
import { collection, addDoc } from "firebase/firestore";

export function placeOrder(order) {
  const ordersCol = collection(db, "orders");
  return addDoc(ordersCol, order);
}
