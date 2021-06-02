const Footer = () => {
  return (
    <footer className='w-full bg-amazon_blue-light'>
      <div className='flex items-center h-10 bg-gray-600 opacity-90 hover:bg-gray-500 animate-pulse delay-150'>
        <a className='flex justify-center text-white text-sm w-full' href="#nav-top">Back to top</a>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 mx-auto pt-12 pb-12 max-w-screen-lg'>
        <div className='flex items-center flex-col text-xs texth text-gray-200 m-2 leading-6'>
          <div className='flex w-1/2 flex-col'>
            <span className='text-base text-white font-bold mb-1'>Get to Know Us</span> 
            <span className='footer-effect'>Careers</span>
            <span className='footer-effect'>Blog</span>
            <span className='footer-effect'>About Amazon</span>
            <span className='footer-effect'>Sustainability</span>
            <span className='footer-effect'>Press Center</span>
            <span className='footer-effect'>Investor Relations</span>
            <span className='footer-effect'>Amazon Devices</span>
            <span className='footer-effect'>Amazon Tours</span>
          </div>
          
        </div>
        <div className='flex items-center flex-col text-xs text-gray-200 m-2 leading-6'>
          <div className='flex w-1/2 flex-col'>
            <span className='text-base text-white font-bold mb-1'>Make Money with Us</span>
            <span className='footer-effect'>Sell products on Amazon</span>
            <span className='footer-effect'>Sell apps on Amazon</span>
            <span className='footer-effect'>Become an Affiliate</span>
            <span className='footer-effect'>Become a Delivery Driver</span>
            <span className='footer-effect'>Start a package delivery business</span>
            <span className='footer-effect'>Advertise Your Products</span>
            <span className='footer-effect'>Self-Publish with Us</span>
            <span className='footer-effect'>Host an Amazon Hub</span>
            <span className='footer-effect'>&#62; See More Make Money with Us</span>
          </div>
        </div>
        <div className='flex items-center flex-col text-xs text-gray-200 m-2 leading-6 sm:mt-12 lg:mt-2'>
          <div className='flex w-1/2 flex-col'>
            <span className='text-base text-white font-bold mb-1'>Amazon Payment Products</span>
            <span className='footer-effect'>Amazon Rewards Visa Signature Cards</span>
            <span className='footer-effect'>Amazon.com Store Card</span>
            <span className='footer-effect'>Amazon Secured Card</span>
            <span className='footer-effect'>Amazon Business Card</span>
            <span className='footer-effect'>Amazon Business Line of Credit</span>
            <span className='footer-effect'>Shop with Points</span>
            <span className='footer-effect'>Credit Card Marketplace</span>
            <span className='footer-effect'>Reload Your Balance</span>
            <span className='footer-effect'>Amazon Currency Converter</span>
          </div>
        </div>
        <div className='flex items-center flex-col text-xs text-gray-200 m-2 leading-6 sm:mt-12 lg:mt-2'>
          <div className='flex w-1/2 flex-col'>
            <span className='text-base text-white font-bold mb-1'>Let Us Help You</span>
            <span className='footer-effect'>Amazon and COVID-19</span>
            <span className='footer-effect'>Your Account</span>
            <span className='footer-effect'>Your Orders</span>
            <span className='footer-effect'>Shipping Rates & Policies</span>
            <span className='footer-effect'>Amazon Prime</span>
            <span className='footer-effect'>Returns & Replacements</span>
            <span className='footer-effect'>Manage Your Content and Devices</span>
            <span className='footer-effect'>Help</span>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center h-32 border-t border-gray-400'>
        <img className='w-36 h-10 cursor-pointer' src="/images/amazon-logo.png" alt="logo" />
      </div>
    </footer>
  )
}

export default Footer
