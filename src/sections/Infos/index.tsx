import { numbersCards } from '@/app/homepage/data'
import { backgroundNumbers } from '@/assets'
import NumbersCard from '@/components/NumbersCard'

const Infos = () => {
  return (
    <>
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
    </>
  )
}

export default Infos
