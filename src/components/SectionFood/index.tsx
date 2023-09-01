'use client'

import { buttonCards } from '@/app/homepage/data'
import ButtonCard from '../ButtonCard'

import { useState } from 'react'

const SectionFood = () => {
  const [selectedFood, setSelectedFood] = useState(0)

  const subtracted = () => {
    setSelectedFood(selectedFood - 1)
  }
  const sum = () => {
    setSelectedFood(selectedFood + 1)
  }
  return (
    <div className="flex items-center gap-4 cursor-pointer justify-center mx-56">
      <div onClick={subtracted}>{'<'}</div>
      {buttonCards.map(({ title, product, image }, index) => (
        <ButtonCard
          key={index}
          title={title}
          product={product}
          image={image}
          selected={selectedFood === index}
        />
      ))}
      <div onClick={sum}>{'>'}</div>
    </div>
  )
}

export default SectionFood
