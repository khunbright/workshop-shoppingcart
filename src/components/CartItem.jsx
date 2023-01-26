import plus from '../image/plus.svg'
import minus from '../image/minus.svg'
import deleteicon from '../image/delete-icn.svg'
import { MyCartContext } from '../management/context'

const CartItem = ({id,name,image_url,price,quantity}) => {
    const {removeItem,toggleQuantity,formatNumber} = MyCartContext()
  return (
    <div className='item'>
        <div className='product_image'>
            <img src={image_url} alt="" />
        </div>
        <div className='description'>
            <span>{name}</span>
            <span>Price {formatNumber(price)} Bath</span>
        </div>
        <div className='quantity'>
            <button className='minus-btn' onClick={()=>toggleQuantity(id,'reduce')}>
                <img src={minus} alt="" />
            </button>
            <input type='text' value={quantity} disabled/>
            <button className='plus-btn' onClick={()=>toggleQuantity(id,'add')}>
                <img src={plus} alt="" />
            </button>
        </div>
        <div className='total-price'>
            {formatNumber(quantity*price)}
        </div>
        <div className='remove' onClick={()=>removeItem(id)}>
            <img src={deleteicon} alt="" />
        </div>
    </div>
  )
}

export default CartItem