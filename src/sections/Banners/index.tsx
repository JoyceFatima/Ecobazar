import { backgroundBanner, banner1, banner2 } from '@/assets'
import Banner from '@/components/Banner'

const Banners = () => {
  return (
    <>
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
    </>
  )
}

export default Banners
