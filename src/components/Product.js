import Image from 'next/image'
import { useState, useEffect } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'
import CartPopUp from './CartPopUp'

const MIN_RATING = 1;
const MAX_RATING = 5;

const Product = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();
  
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);
  const [popUp, setPopUp] = useState(false);

  

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    }

    //Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(product))
  }

  useEffect(() => {
    setTimeout(() => {
      setPopUp(false)
    }, 3000)
  }, [addItemToBasket])

  return (
    <>
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 italic text-xs text-gray-400'>{category}</p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className='my-3 '>{title}</h4>
      <div className='flex'>
        {Array(rating)
        .fill()
        .map((_, index) => (
          <StarIcon key={index} className='h-5 text-yellow-500' />
        ))}
      </div>
      <p className='text-xs my-2 line-clamp-2'>{description}</p>
      <div className='mb-5'>
          <Currency 
            quantity={price}
          />
      </div>
      {hasPrime && (
        <div className=' flex items-center space-x-2 -mt-5'>
          <img className='w-12' src="/images/prime-tag.png" alt="prime" />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}
      <button onClick={function(event){addItemToBasket(); setPopUp(true)}} className='mt-auto button'>Add to Basket</button>
    </div>
    {/* PopUp */}
      <CartPopUp trigger={popUp}>
        <h4 className='text-sm'>{title}</h4>
        <p className='text-xs text-white'>added to basket</p>
      </CartPopUp>
    </>
  )
}

export default Product
