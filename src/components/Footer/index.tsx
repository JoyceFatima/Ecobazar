import {
  apple,
  applePay,
  backgroundFooter,
  cart,
  discover,
  facebook,
  instagram,
  line,
  logoFooter,
  mastercard,
  pinterest,
  playStore,
  twitter,
  visa,
} from '@/assets'
import Logo from '../Logo'
import DownloadApp from '../DownloadApp'

const Footer = () => {
  return (
    <div className="w-full bg-neutral-900 h-[373px] mt-24">
      <div
        style={{
          backgroundImage: `url(${backgroundFooter.src})`,
          backgroundSize: 'cover',
        }}
        className="w-full h-full flex items-center justify-center flex-col"
      >
        <div className="h-full flex items-center justify-between w-full px-56">
          <div className="max-w-[300px] h-[170px]">
            <img src={logoFooter.src} alt="" />
            <span className="text-neutral-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis alias sapiente illum volupt.
            </span>
            <div className="flex gap-2 py-2">
              <div className="p-3 rounded-full hover:bg-green-600">
                <img className="cursor-pointer" src={facebook.src} alt="" />
              </div>
              <div className="p-3 rounded-full hover:bg-green-600">
                <img className="cursor-pointer" src={twitter.src} alt="" />
              </div>
              <div className="p-3 rounded-full hover:bg-green-600">
                <img className="cursor-pointer" src={pinterest.src} alt="" />
              </div>
              <div className="p-3 rounded-full hover:bg-green-600">
                <img className="cursor-pointer" src={instagram.src} alt="" />
              </div>
            </div>
          </div>
          <div className="h-[170px]">
            <span className="text-white text-lg">My Account</span>
            <img className="my-2" src={line.src} alt="" />
            <ul>
              <li>
                <a href="" className="text-neutral-500 hover:text-gray-200">
                  My account
                </a>
              </li>
              <li>
                <a href="" className="text-neutral-500 hover:text-gray-200">
                  Order History
                </a>
              </li>
              <li>
                <a href="" className="text-neutral-500 hover:text-gray-200">
                  Shopping Cart
                </a>
              </li>
              <li>
                <a href="" className="text-neutral-500 hover:text-gray-200">
                  Wishlist
                </a>
              </li>
            </ul>
          </div>
          <div className="h-[170px]">
            <span className="text-white text-lg">Helps</span>
            <img className="my-2" src={line.src} alt="" />
            <ul>
              <li>
                <a href="" className="text-neutral-500 hover:text-gray-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="" className="text-neutral-500 hover:text-gray-200">
                  Faqs
                </a>
              </li>
              <li>
                <a href="" className="text-neutral-500 hover:text-gray-200">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="" className="text-neutral-500 hover:text-gray-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="h-[170px]">
            <span className="text-white text-lg">Proxy</span>
            <img className="my-2" src={line.src} alt="" />
            <ul>
              <li>
                <a href="" className="text-neutral-500 hover:text-gray-200">
                  About
                </a>
              </li>
              <li>
                <a href="" className="text-neutral-500 hover:text-gray-200">
                  Shop
                </a>
              </li>
              <li>
                <a href="" className="text-neutral-500 hover:text-gray-200">
                  Product
                </a>
              </li>
              <li>
                <a href="" className="text-neutral-500 hover:text-gray-200">
                  Track Order
                </a>
              </li>
            </ul>
          </div>
          <div className="h-[170px]">
            <span className="text-white text-lg">Download Mobile App</span>
            <img className="my-2" src={line.src} alt="" />
            <div className="flex gap-4">
              <DownloadApp icon={apple.src} text={'App Store'} />
              <DownloadApp icon={playStore.src} text={'Google play'} />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center py-4 justify-self-end border-t border-t-neutral-700 px-56">
          <span className="text-neutral-500 text-sm">
            Ecobazar eCommerce &copy; 2023. All Rights Reserved
          </span>
          <div className="flex gap-2">
            <img className="cursor-pointer" src={applePay.src} alt="" />
            <img className="cursor-pointer" src={visa.src} alt="" />
            <img className="cursor-pointer" src={mastercard.src} alt="" />
            <img className="cursor-pointer" src={discover.src} alt="" />
            <img className="cursor-pointer" src={cart.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
