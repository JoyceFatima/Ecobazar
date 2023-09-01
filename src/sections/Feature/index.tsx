import { selectCards } from '@/app/homepage/data'
import SelectCard from '@/components/SelectCard'

const Feature = () => {
  return (
    <div className="flex items-center justify-center">
      {selectCards.map(({ title, text, image, selected }, index) => (
        <SelectCard
          key={index}
          text={text}
          title={title}
          image={image}
          selected={selected}
        />
      ))}
    </div>
  )
}

export default Feature
