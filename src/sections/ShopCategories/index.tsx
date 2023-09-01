import { BGShop } from '@/assets'
import SectionFood from '@/components/SectionFood'
import TitleWithLink from '@/components/TitleWithLinkProps'

const ShopCategories: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BGShop.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="py-8"
      >
        <TitleWithLink
          title="Shop by Top Categories"
          linkUrl=""
          linkText="View All"
        />
        <SectionFood />
      </div>
    </>
  )
}

export default ShopCategories
