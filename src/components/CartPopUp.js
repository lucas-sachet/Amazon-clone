const CartPopUp = (props) => {
  return (props.trigger) ? (
    <div className='hidden fixed md:flex justify-center items-center top-20 right-0 w-48 h-28 bg-yellow-400 z-50 rounded-l-md animate-fade-in-left '>
      <div className='relative p-8 w-full max-w-screen-sm '>
        { props.children }
      </div>
    </div>
  ) : "";
}

export default CartPopUp
