import {
  BGCarossel1,
  Product1,
  Product10,
  Product11,
  Product12,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
  Product8,
  Product9,
  bag,
  blog1,
  blog2,
  blog3,
  fish,
  fruits,
  headphone,
  meat,
  package1,
  snacks,
  softDrink,
  truck,
  user1,
  user2,
  user3,
  vegetable,
} from '@/assets'

export const blogs = [
  {
    image: blog1.src,
    day: '18',
    month: 'Nov',
    theme: 'Food',
    role: 'By Admin',
    comments: 'Comments',
    text: 'Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.',
  },
  {
    image: blog2.src,
    day: '23',
    month: 'Jan',
    theme: 'Food',
    role: 'By Admin',
    comments: 'Comments',
    text: 'Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.',
  },
  {
    image: blog3.src,
    day: '18',
    month: 'Nov',
    theme: 'Food',
    role: 'By Admin',
    comments: 'Comments',
    text: 'Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.',
  },
]

export const selectCards = [
  {
    title: 'Free Shipping',
    text: 'Free shipping with discount',
    image: truck.src,
  },
  {
    title: 'Great Support 24/7',
    text: 'Instant access to Contact',
    image: headphone.src,
  },
  {
    title: '100% Sucure Payment',
    text: 'We ensure your money is save',
    image: bag.src,
    selected: true,
  },
  {
    title: 'Money-Back Guarantee',
    text: '30 days money-back',
    image: package1.src,
  },
]

export const numbersCards = [
  {
    title: '37+',
    text: 'Years of Hard Work',
  },
  {
    title: '500k+',
    text: 'Happy Customer',
  },
  {
    title: '28',
    text: 'Qualified Team Member',
  },
  {
    title: '750k+',
    text: 'Monthly Orders',
  },
]

export const profileBoxes = [
  {
    comments:
      'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
    user: 'Robert Fox',
    role: 'Customer',
    image: user1.src,
  },
  {
    comments:
      'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
    user: 'Dianne Russell',
    role: 'Customer',
    image: user2.src,
  },
  {
    comments:
      'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
    user: 'Eleanor Pena',
    role: 'Customer',
    image: user3.src,
  },
]

export const buttonCards = [
  {
    title: 'Vegetables',
    product: '123',
    image: vegetable.src,
  },
  {
    title: 'Fresh Fruit',
    product: '123',
    image: fruits.src,
  },
  {
    title: 'Fish',
    product: '231',
    image: fish.src,
  },
  {
    title: 'Meat',
    product: '238',
    image: meat.src,
  },
  {
    title: 'Water and Drinks',
    product: '82',
    image: softDrink.src,
  },
  {
    title: 'Snacks',
    product: '32',
    image: snacks.src,
  },
]

export const carosselImages = [
  BGCarossel1.src,
  BGCarossel1.src,
  BGCarossel1.src,
]

export const customCardProducts = [
  {
    image: Product4.src,
    title: 'Green Apple',
    price: 14.99,
    sale: 50,
  },
  {
    image: Product3.src,
    title: 'Chanise Cabbage',
    price: 14.99,
  },
  {
    image: Product2.src,
    title: 'Green Capsicum',
    price: 14.99,
  },
  {
    image: Product1.src,
    title: 'Ladies Finger',
    price: 14.99,
  },
]

export const bestSellerProducts = [
  {
    image: Product4.src,
    title: 'Green Apple',
    price: 14.99,
  },
  {
    image: Product3.src,
    title: 'Chanise Cabbage',
    price: 14.99,
  },
  {
    image: Product5.src,
    title: 'Green Lettuce',
    price: 14.99,
  },
  {
    image: Product6.src,
    title: 'Green Chili',
    price: 14.99,
  },
  {
    image: Product7.src,
    title: 'Corn',
    price: 14.99,
  },
]

export const hotDealsProducts = [
  {
    image: Product4.src,
    title: 'Green Apple',
    price: 14.99,
  },
  {
    image: Product8.src,
    title: 'Indian Malta',
    price: 14.99,
  },
  {
    image: Product5.src,
    title: 'Green Lettuce',
    price: 14.99,
  },
]

export const bestSellersProducts = [
  {
    image: Product9.src,
    title: 'Eggplant',
    price: 14.99,
  },
  {
    image: Product1.src,
    title: 'Red Capsicum',
    price: 14.99,
  },
  {
    image: Product10.src,
    title: 'Red Tomatos',
    price: 14.99,
  },
]
export const topRatedProducts = [
  {
    image: Product11.src,
    title: 'Big Potatos',
    price: 14.99,
  },
  {
    image: Product7.src,
    title: 'Corn',
    price: 14.99,
  },
  {
    image: Product12.src,
    title: 'Fresh cauliflower',
    price: 14.99,
  },
]
