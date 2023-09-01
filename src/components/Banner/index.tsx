interface BannerProps {
  title: string
  text?: string
  price?: number
  hours?: Date
  buttonText?: string
  description?: string
  img: string
}

const Banner = ({
  title,
  text,
  price,
  hours,
  buttonText,
  description,
  img,
}: BannerProps) => {
  const formattedPrice = (value?: number) => {
    if (!value) {
      return ''
    }

    const options = {
      style: 'currency',
      currency: 'USD',
    }

    const formatter = new Intl.NumberFormat('en', options)
    return formatter.format(value)
  }

  return (
    <div className="w-full h-[360px]">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="w-full flex flex-col h-full justify-between items-between bg-white bg-opacity-20 rounded-lg p-8"
      >
        <span className="text-xl text-white">{description}</span>
        <h3 className="text-4xl text-white mt-2">{title}</h3>
        <div className="mt-4">
          <span className="text-sm text-white mt-2 me-2">{text}</span>
          {price && (
            <span className="text-white bg-orange-500 rounded px-2 py-2 ">
              {formattedPrice(price)}
            </span>
          )}
          {hours && (
            <div className="flex">
              <span className="text-white text-center rounded px-1">
                {hours.getDay()} <p>DAYS</p>
              </span>
              <span className="text-white">:</span>
              <span className="text-white text-center rounded px-1">
                {hours.getHours()} <p>HOURS</p>
              </span>
              <span className="text-white">:</span>
              <span className="text-white text-center rounded px-1">
                {hours.getMinutes()} <p>MINS</p>
              </span>
              <span className="text-white">:</span>
              <span className="text-white text-center rounded px-1">
                {hours.getSeconds()} <p>SECS</p>
              </span>
            </div>
          )}
        </div>
        <button className="flex w-[162px] text-white items-center bg-green-500 rounded-full px-4 py-2">
          {buttonText}
          <svg
            className="w-4 h-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Banner
