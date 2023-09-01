import { customCardProducts } from '@/app/homepage/data'
import CustomCard from '@/components/CustomCard'
import TitleWithLink from '@/components/TitleWithLinkProps'

const FeaturedProducts: React.FC = () => {
  return (
    <>
      <TitleWithLink title="Featured Products" linkUrl="" linkText="View All" />
      <div className="flex items-center justify-center mx-56 pb-16">
        {customCardProducts.map(({ image, price, title, sale }, index) => (
          <CustomCard
            key={index}
            image={image}
            price={price}
            title={title}
            sale={sale}
          />
        ))}
      </div>
    </>
  )
}

export default FeaturedProducts
