import {
  bestSellerProducts,
  bestSellersProducts,
  hotDealsProducts,
  topRatedProducts,
} from '@/app/homepage/data'
import { HotSale } from '@/assets'
import CustomCard from '@/components/CustomCard'
import MiniCustomCard from '@/components/MiniCustomCard'
import TitleWithLink from '@/components/TitleWithLinkProps'

const BestProducts = () => {
  return (
    <>
      <TitleWithLink
        title="Best Seller Products"
        linkUrl=""
        linkText="View All"
      />
      <div className="flex items-center justify-center mx-56 pb-12">
        {bestSellerProducts.map(({ image, price, title }, index) => (
          <CustomCard key={index} image={image} price={price} title={title} />
        ))}
      </div>
      <div className="flex mx-56 pb-16">
        <div className="flex flex-col">
          <span className="p-4 font-semibold text-2xl">Hot Deals</span>
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            {hotDealsProducts.map(({ image, price, title }, index) => (
              <MiniCustomCard
                key={index}
                image={image}
                price={price}
                title={title}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="p-4 font-semibold text-2xl">Best Seller</span>
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            {bestSellersProducts.map(({ image, price, title }, index) => (
              <MiniCustomCard
                key={index}
                image={image}
                price={price}
                title={title}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="p-4 font-semibold text-2xl">Top Rated</span>
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            {topRatedProducts.map(({ image, price, title }, index) => (
              <MiniCustomCard
                key={index}
                image={image}
                price={price}
                title={title}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-self-end items-self-end">
          <img src={HotSale.src} alt="" />
        </div>
      </div>
    </>
  )
}

export default BestProducts
