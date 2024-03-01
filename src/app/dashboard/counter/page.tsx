
import { CartCounter } from "@/app/shopping-cart";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'Shopping Cart',
  description: 'Un simple counter'
};

export default function Counterpage() {




  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el Carrito de Compras</span>
      <CartCounter value={20}/>
    </div>
  )
}
