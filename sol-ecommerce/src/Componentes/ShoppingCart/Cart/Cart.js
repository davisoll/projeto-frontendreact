import { Itens } from "../Itens/Itens"
import { CartContainer } from "./CartStyle"

export function Cart() {

    return(
        <CartContainer>
            <p>Cart</p>
            <Itens />
            <p>Valor total: 0</p>
            {/* {Cart.map((product) => {
                return <Itens />
            })} 
             <Itens />  */}
        </CartContainer >
    )
}