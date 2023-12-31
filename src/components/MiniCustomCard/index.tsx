'use client'

import { bagBlack, bagWhite, eye, heart2 } from '@/assets'
import React, { useState } from 'react'

interface MiniCustomCardProps {
  image: string
  title: string
  price: number
  sale?: number
}

const MiniCustomCard = ({ image, price, title, sale }: MiniCustomCardProps) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleCardClick = () => {
    setIsSelected(!isSelected)
  }

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
    <div
      className={`w-[321px] h-[130px] p-4 border mx-3 border-gray-300 rounded-[0.5rem] transition duration-300 ease-in-out transform ${
        isSelected ? 'border-green-400' : ''
      }`}
      onClick={handleCardClick}
    >
      <div className="flex items-center h-full">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'relative',
            width: '102px',
            height: '70px',
          }}
        >
          {sale && (
            <div className="w-[100px] flex justify-center font-light whitespace-nowrap text-start text-white bg-red-500 rounded-md p-1">{`Sale ${sale}%`}</div>
          )}
        </div>
        <div className="flex justify-between">
          <div className="py-2">
            <span className={'block text-gray-700'}>{title}</span>
            {isSelected ? (
              <div className="flex gap-2 mt-2 items-center justify-end">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition duration-300 ease-in-out transform ${
                    isSelected ? 'bg-emerald-400' : 'bg-gray-200'
                  }`}
                >
                  <img
                    className="w-5 h-5"
                    src={isSelected ? bagWhite.src : bagBlack.src}
                    alt=""
                  />
                </div>
                <div className="w-10 h-10 flex items-center border cursor-pointer  justify-center rounded-full bg-white transition duration-300 ease-in-out transform">
                  <img className="w-5 h-5" src={heart2.src} alt="" />
                </div>
                <div className="w-10 h-10 flex items-center border cursor-pointer justify-center rounded-full bg-white transition duration-300 ease-in-out transform">
                  <img className="w-5 h-5" src={eye.src} alt="" />
                </div>
              </div>
            ) : (
              <>
                <span className={'block text-black font-semibold'}>
                  {formattedPrice(price)}
                </span>
                <div className="flex items-center">
                  <span className="text-yellow-500">⭐️</span>
                  <span className="text-yellow-500">⭐️</span>
                  <span className="text-yellow-500">⭐️</span>
                  <span className="text-yellow-500">⭐️</span>
                  <span className="text-yellow-500">⭐️</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniCustomCard
