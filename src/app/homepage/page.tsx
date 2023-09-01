import Header from '../../components/Header'
import ImageCarousel from '@/components/ImageCarousel'
import Footer from '@/components/Footer'
import { carosselImages } from './data'
import Feature from '@/sections/Feature'
import FeaturedProducts from '@/sections/FeaturedProducts'
import ShopCategories from '@/sections/ShopCategories'
import WhyChooseUs from '@/sections/WhyChooseUs'
import Infos from '@/sections/Infos'
import BestProducts from '@/sections/BestProducts'
import Blog from '@/sections/Blog'
import Banners from '@/sections/Banners'
import Testimonials from '@/sections/Testimonials'
import CompanyLogo from '@/sections/CompanyLogo'
import ContactInformation from '@/sections/ContactInformation'

export default function HomePage() {
  return (
    <div className="min-w-[1820px]">
      <Header companyName="123-456-7890" />
      <ImageCarousel image={carosselImages} />
      <Feature />
      <FeaturedProducts />
      <ShopCategories />
      <WhyChooseUs />
      <Infos />
      <Banners />
      <BestProducts />
      <Blog />
      <Testimonials />
      <CompanyLogo />
      <ContactInformation />
      <Footer />
    </div>
  )
}
