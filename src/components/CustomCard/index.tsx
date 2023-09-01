'use client'

import { bagBlack, bagWhite, eye, heart2 } from '@/assets'
import React, { useState } from 'react'

interface CustomCardProps {
  image: string
  title: string
  price: number
  sale?: number
}

const CustomCard = ({ image, price, title, sale }: CustomCardProps) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleCardClick = () => {
    setIsSelected(!isSelected)
  }

  return (
    <div
      className={`w-[19.5rem] p-4 border mx-3 border-gray-300 rounded-[0.5rem] transition duration-300 ease-in-out transform ${
        isSelected ? 'border-green-400' : ''
      }`}
      onClick={handleCardClick}
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position: 'relative',
          width: '100%',
          height: '250px',
        }}
      >
        {sale && (
          <div className="w-[100px] flex justify-center font-light whitespace-nowrap text-start text-white bg-red-500 rounded-md p-1">{`Sale ${sale}%`}</div>
        )}
        {isSelected && (
          <>
            <div className="w-10 h-10 flex items-center border absolute top-1 cursor-pointer right-1 justify-center rounded-full bg-white transition duration-300 ease-in-out transform">
              <img className="w-5 h-5" src={heart2.src} alt="" />
            </div>
            <div className="w-10 h-10 flex items-center border absolute top-12 cursor-pointer right-1 justify-center rounded-full bg-white transition duration-300 ease-in-out transform">
              <img className="w-5 h-5" src={eye.src} alt="" />
            </div>
          </>
        )}
      </div>
      <div className="flex justify-between">
        <div className="py-2">
          <span className={'block text-gray-700'}>{title}</span>
          <span className={'block text-black font-semibold'}>{price}</span>
          <div className="flex items-center">
            <span className="text-yellow-500">⭐️</span>
            <span className="text-yellow-500">⭐️</span>
            <span className="text-yellow-500">⭐️</span>
            <span className="text-yellow-500">⭐️</span>
            <span className="text-yellow-500">⭐️</span>
          </div>
        </div>
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-gray-200 transition duration-300 ease-in-out transform ${
            isSelected ? 'bg-emerald-400' : ''
          }`}
        >
          <img
            className="w-5 h-5"
            src={isSelected ? bagWhite.src : bagBlack.src}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default CustomCard
