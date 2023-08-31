'use client'

import React, { useState } from 'react'

interface CustomCardProps {
  imagePath: string
  altText: string
  description: string
  text: string
  likeds: number
}

const CustomCard = ({
  imagePath,
  altText,
  description,
  text,
  likeds,
}: CustomCardProps) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleCardClick = () => {
    setIsSelected(!isSelected)
  }

  return (
    <div
      className={`w-[19.5rem] h-[25.4375rem] border mx-3 border-gray-300 rounded-[0.5rem] transition duration-300 ease-in-out transform ${
        isSelected ? 'border-green-400' : ''
      }`}
      onClick={handleCardClick}
    >
      <img src={imagePath} alt={altText} className="w-full h-auto" />
      <span className={'block text-gray-700'}>{description}</span>
      <span className={'block text-gray-700'}>{text}</span>
      <span className={'text-gray-700'}>{likeds}</span>
    </div>
  )
}

export default CustomCard
