import {
  image1,
  ilustration1,
  ilustration2,
  bg2,
  banner1,
  banner2,
} from '@/assets'

import Header from '../../components/Header'
import ImageCarousel from '@/components/ImageCarousel'
import TitleWithLink from '@/components/TitleWithLinkProps'
import CustomCard from '@/components/CustomCard'
import Banner from '@/components/Banner'
import BlogCard from '@/components/BlogCard'

export default function HomePage() {
  const images = [image1.src, image1.src, image1.src]

  return (
    <div className="mb-36">
      <Header companyName="123-456-7890" />
      <ImageCarousel images={images} />

      <div className="flex items-center justify-center">
        <div className="w-[19.5rem] h-[14rem] py-10 px-0 md:px-10 bg-white transition duration-300 ease-in-out transform border-b-2 border-gray-100 hover:border-b-4 hover:border-green-400">
          <img
            src="/caminho-da-imagem.jpg"
            alt="Imagem"
            className="w-16 h-16 mx-auto"
          />
          <h3 className="text-center mt-4 text-lg font-semibold">
            Título do H3
          </h3>
          <span className="block text-center text-gray-400 mt-2">
            Texto de exemplo
          </span>
        </div>
        <div className="w-[19.5rem] h-[14rem] py-10 px-0 md:px-10 bg-white transition duration-300 ease-in-out transform  border-b-2 border-gray-100 hover:border-b-4 hover:border-green-400">
          <img
            src="/caminho-da-imagem.jpg"
            alt="Imagem"
            className="w-16 h-16 mx-auto"
          />
          <h3 className="text-center mt-4 text-lg font-semibold">
            Título do H3
          </h3>
          <span className="block text-center text-gray-400 mt-2">
            Texto de exemplo
          </span>
        </div>
        <div className="w-[19.5rem] h-[14rem] py-10 px-0 md:px-10 bg-white transition duration-300 ease-in-out transform  border-b-2 border-gray-100 hover:border-b-4 hover:border-green-400">
          <img
            src="/caminho-da-imagem.jpg"
            alt="Imagem"
            className="w-16 h-16 mx-auto"
          />
          <h3 className="text-center mt-4 text-lg font-semibold">
            Título do H3
          </h3>
          <span className="block text-center text-gray-400 mt-2">
            Texto de exemplo
          </span>
        </div>
        <div className="w-[19.5rem] h-[14rem] py-10 px-0 md:px-10 bg-white transition duration-300 ease-in-out transform  border-b-2 border-gray-100 hover:border-b-4 hover:border-green-400">
          <img
            src="/caminho-da-imagem.jpg"
            alt="Imagem"
            className="w-16 h-16 mx-auto"
          />
          <h3 className="text-center mt-4 text-lg font-semibold">
            Título do H3
          </h3>
          <span className="block text-center text-gray-400 mt-2">
            Texto de exemplo
          </span>
        </div>
      </div>
      <TitleWithLink title="Featured Products" linkUrl="" linkText="View All" />
      <div className="flex items-center justify-center mx-56">
        <CustomCard
          imagePath="/caminho-da-imagem.jpg"
          altText=""
          description="Green Apple"
          text="ASD"
          likeds={2}
        />
        <CustomCard
          imagePath="/caminho-da-imagem.jpg"
          altText=""
          description="Green Apple"
          text="ASD"
          likeds={2}
        />
        <CustomCard
          imagePath="/caminho-da-imagem.jpg"
          altText=""
          description="Green Apple"
          text="ASD"
          likeds={2}
        />
        <CustomCard
          imagePath="/caminho-da-imagem.jpg"
          altText=""
          description="Green Apple"
          text="ASD"
          likeds={2}
        />
      </div>
      <TitleWithLink
        title="Shop by Top Categories"
        linkUrl=""
        linkText="View All"
      />
      <ImageCarousel images={images} />
      <div className="flex justify-center items-center my-20 mx-56">
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
              posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis
              felis. Sed vestibulum nisl sit amet sapien.
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

      <div
        style={{ backgroundImage: `url(${bg2.src})`, backgroundSize: 'cover' }}
        className="relative flex justify-center items-center text-center"
      >
        <div className="flex justify-center items-center text-center my-10 mx-56 gap-6">
          <div className="flex justify-center items-center h-[174px] w-[312px] p-4 bg-white bg-opacity-10 rounded-lg">
            <div className="">
              <div className="text-center text-4xl text-green-500">37+</div>
              <span className="block text-center mt-2  text-white">
                Years of Hard Work
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center h-[174px] w-[312px] p-4 bg-white bg-opacity-10 rounded-lg">
            <div className="">
              <div className="text-center text-4xl text-green-500">500k+</div>
              <span className="block text-center mt-2  text-white">
                Happy Customer
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center h-[174px] w-[312px] p-4 bg-white bg-opacity-10 rounded-lg">
            <div className="">
              <div className="text-center text-4xl text-green-500">28</div>
              <span className="block text-center mt-2  text-white">
                Qualified Team Member
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center h-[174px] w-[312px] p-4 bg-white bg-opacity-10 rounded-lg">
            <div className="">
              <div className="text-center text-4xl text-green-500">750k+</div>
              <span className="block text-center mt-2  text-white">
                Monthly Orders
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-56 my-16 justify-center items-center gap-6">
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
          description={'sale off the week'}
          buttonText={'Shop Now'}
          hours={new Date()}
          img={banner2.src}
        />
      </div>
      <TitleWithLink
        title="Best Seller Products"
        linkUrl=""
        linkText="View All"
      />
      <div className="mx-56 my-10 justify-center align-center text-center">
        <div className="my-16">
          <span className="text-green-500">BLOG</span>
          <h2 className="font-extrabold text-4xl">Latest News</h2>
        </div>
        <div className="flex gap-6">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  )
}
