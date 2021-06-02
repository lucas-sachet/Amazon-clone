import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux"
import { addToBasket, removeFromBasket } from "../slices/basketSlice"

const CheckoutProduct = ({ 
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
 }) => {
  const dispatch = useDispatch()

  const addItemToBasket = () => {
    const product ={
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    }

    //Push item into redux
    dispatch(addToBasket(product))
  }

  const removeItemFromBasket = () => {
    //Remove item from redux
    dispatch(removeFromBasket({ id }))
  }

  return (
    <div className='grid grid-cols-5 pb-2 border-b'>
      <Image src={image} height={200} width={200} objectFit='contain' />

      {/* Middle */}
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating).fill().map((_, i) => (
            <StarIcon key={i} className='h-5 text-yellow-500' />
          ))}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <Currency quantity={price} />

        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img className='w-12' loading='lazy' src="/images/prime-tag.png" alt="prime" />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Rigjt add/remove buttons */}
      <div className='flex flex-col space-y-2 my-auto justify-self-endend'>
      <button className='button mt-auto' onClick={addItemToBasket}>Add to Basket</button>
      <button className='button mt-auto' onClick={removeItemFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
