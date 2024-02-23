import ProductCard from "./ProductCard"

import { useContext } from "react"
import { CartContext } from "@/store/shopping-cart-context"

const Shop = () => {

    const {products} = useContext(CartContext)

  return (
    <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap py-24 w-[1140px] gap-4">
            {
                products.map((product) => {
                    return (
                        <ProductCard {...product} key={product.id}/>
                    )
                })
            }
        </div>
    </div>
  ) 
}

export default Shop