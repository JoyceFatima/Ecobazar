import { food, mango, bookoff, group1, group2, steps } from '@/assets'

const CompanyLogo = () => {
  return (
    <>
      <div className="mx-56">
        <div className="flex justify-between items-center my-20">
          <a href="">
            <img src={steps.src} alt="" />
          </a>

          <a href="">
            <img src={mango.src} alt="" />
          </a>

          <a href="">
            <img src={group2.src} alt="" />
          </a>

          <a className="hover:fill-green-500" href="">
            <img src={food.src} alt="" />
          </a>

          <a href="">
            <img src={bookoff.src} alt="" />
          </a>

          <a href="">
            <img src={group1.src} alt="" />
          </a>
        </div>
      </div>
    </>
  )
}

export default CompanyLogo
