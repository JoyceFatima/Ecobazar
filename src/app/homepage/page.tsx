import {
  ilustration1,
  ilustration2,
  banner1,
  banner2,
  image3,
  food,
  bookoff,
  group1,
  group2,
  mango,
  map,
  phoneCall,
  email,
  backgroundBlog,
  backgroundBanner,
  backgroundNumbers,
  backgroundFood,
  BGShop,
  HotSale,
  steps,
} from '@/assets'

import Header from '../../components/Header'
import ImageCarousel from '@/components/ImageCarousel'
import TitleWithLink from '@/components/TitleWithLinkProps'
import CustomCard from '@/components/CustomCard'
import Banner from '@/components/Banner'
import BlogCard from '@/components/BlogCard'
import ProfileBox from '@/components/ProfileBox'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import {
  bestSellerProducts,
  bestSellersProducts,
  blogs,
  carosselImages,
  customCardProducts,
  hotDealsProducts,
  numbersCards,
  profileBoxes,
  topRatedProducts,
} from './data'
import NumbersCard from '@/components/NumbersCard'
import SectionFood from '@/components/SectionFood'
import MiniCustomCard from '@/components/MiniCustomCard'
import Feature from '@/sections/Feature'

export default function HomePage() {
  return (
    <div className="min-w-[1820px]">
      <Header companyName="123-456-7890" />
      <ImageCarousel image={carosselImages} />
      <Feature />
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
      <div
        style={{
          backgroundImage: `url(${backgroundFood.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex justify-center items-center py-14 mx-56">
          <div className="flex gap-[1.625rem] justify-center">
            <img src={ilustration1.src} alt="" />
            <img src={ilustration2.src} alt="" />
          </div>
          <div className="w-[30rem] h-[23.75rem]  justify-center gap-[1.625rem]">
            <div className="ml-[2.7rem]">
              <h2 className="text-4xl font-semibold text-black">
                100% Trusted Organic Food Store
              </h2>
              <p className="text-sm  font-semibold text-black mt-2">
                Healthy & natural food for lovers of healthy food.
              </p>
              <span className="text-xs text-gray-500 mt-2">
                Ut quis tempus erat. Phasellus euismod bibendum magna non
                tristique. Pellentesque semper vestibulum elit sed condimentum.
                Nunc pretium fermentum interdum.
              </span>
              <p className="text-sm  font-semibold text-black mt-6">
                Every day fresh and quality products for you.
              </p>
              <span className="text-xs text-gray-500 mt-2">
                Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a
                posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus
                lobortis felis. Sed vestibulum nisl sit amet sapien.
              </span>
              <button className="bg-green-500 hover:bg-green-600 font-semibold text-white rounded-full py-2 px-6 mt-6 flex items-center">
                <span className="mr-2">Shop Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${backgroundNumbers.src})`,
          backgroundSize: 'cover',
        }}
        className="relative flex justify-center items-center text-center"
      >
        <div className="flex justify-center items-center text-center my-10 mx-56 gap-6">
          {numbersCards.map(({ title, text }, index) => (
            <NumbersCard key={index} title={title} text={text} />
          ))}
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${backgroundBanner.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        <div className="grid grid-cols-2 mx-56 py-16 justify-center items-center gap-6">
          <Banner
            title={'Fruit & Vegetable'}
            description={'100% Organic'}
            text={'Starting at:'}
            price={23}
            buttonText={'Shop Now'}
            img={banner1.src}
          />
          <Banner
            title={'Sales of the Year'}
            description={'SALE OFF THE WEEK'}
            buttonText={'Shop Now'}
            hours={new Date()}
            img={banner2.src}
          />
        </div>
      </div>
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
      <div
        style={{
          backgroundImage: `url(${backgroundBlog.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-56 my-10 justify-center align-center text-center">
          <div className="my-16">
            <span className="text-green-500">BLOG</span>
            <h2 className="font-extrabold text-4xl">Latest News</h2>
          </div>
          <div className="flex gap-6">
            {blogs.map(
              ({ comments, day, image, month, role, text, theme }, index) => (
                <BlogCard
                  key={index}
                  comments={comments}
                  day={day}
                  image={image}
                  month={month}
                  role={role}
                  text={text}
                  theme={theme}
                />
              ),
            )}
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: 'linear-gradient(#FFF, #F2F5F3)' }}
        className="py-10"
      >
        <div
          style={{
            backgroundImage: `url(${image3.src})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        >
          <div className="mx-56 my-10 justify-start align-center text-left">
            <div className="my-16">
              <span className="text-green-500 mb-4">Testimonial</span>
              <h2 className="font-semibold text-4xl">What Our Customer Says</h2>
            </div>
            <div className="flex gap-2">
              {profileBoxes.map(({ comments, image, user, role }, index) => (
                <ProfileBox
                  key={index}
                  comments={comments}
                  image={image}
                  user={user}
                  role={role}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-56">
        <div className="flex justify-between items-center my-20">
          <a href="">
            <img src={steps.src} alt="" />
          </a>

          <a className="hover:fill-green-500" href="">
            <img src={food.src} alt="" />
          </a>

          <a href="">
            <img src={mango.src} alt="" />
          </a>

          <a href="">
            <img src={bookoff.src} alt="" />
          </a>

          <a href="">
            <img src={group1.src} alt="" />
          </a>

          <a href="">
            <img src={group2.src} alt="" />
          </a>
        </div>
      </div>
      <div className="mx-56 flex gap-6">
        <Card title="Our Location" icon={map.src}>
          <p className=" text-gray-500">
            1901 Thornridge Cir. Shiloh, Washington DC 20020, United States
          </p>
        </Card>
        <Card title="Call Us 24/7" icon={phoneCall.src}>
          <p className="text-2xl text-green-500">(303) 555-0105</p>
        </Card>
        <Card title="Subscribe Newsletter" icon={email.src}>
          <div className="flex border rounded-full ps-2">
            <input
              type="text"
              placeholder="Your email address"
              className="px-8 py-2"
            />
            <button className="flex text-white items-center text-center bg-green-600 rounded-full px-8 py-2">
              Subscribe
            </button>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  )
}
