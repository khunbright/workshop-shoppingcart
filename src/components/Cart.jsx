import CartItem from "./CartItem"
import { MyCartContext } from "../management/context"

const Cart = () => {
    const {cart,total,formatNumber} = MyCartContext()
    if(cart.length === 0){
        return(
                <div className='shopping-cart'>
                    <div className="empty">Not found!! Product in cart</div>
                </div>
        )
    }else{
        return(
                <div className='shopping-cart'>
                    <div className='title'>Product</div>
                    {cart.map((data)=>{
                        return <CartItem key={data.id} {...data}/>
                    })}
                    <div className='footer'>Total {formatNumber(total)} bath</div>
                </div>
        )
    }
}

export default Cart