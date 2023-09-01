import { backgroundFood, ilustration1, ilustration2 } from '@/assets'

const WhyChooseUs = () => {
  return (
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
    </div>
  )
}

export default WhyChooseUs
