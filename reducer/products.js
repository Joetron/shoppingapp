import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';

const bagette = require('../images/bagette.jpeg');
const beef = require('../images/beef.jpeg');
const bell_pepper = require('../images/bell_pepper.jpeg');
const berry_blend = require('../images/berry_blend.jpeg');
const blueberries = require('../images/blueberries.jpeg');
const canteloupe = require('../images/canteloupe.jpg');
const chao = require('../images/chao.jpeg');
const cocoa = require('../images/cocoa.jpeg');
const grapefruit = require('../images/grapefruit.jpeg');
const kale_salad = require('../images/kale_salad.jpeg');
const meatballs = require('../images/meatballs.jpg');
const strawberries = require('../images/strawberries.jpg');
const yaki_soba = require('../images/yaki_soba.jpeg');

const initialState = {
  bagette: {
    id: 'bagette',
    name: 'Baguette',
    src: bagette,
    description: 'Kirkland Signature, 2 x 24 oz',
    price: 5.84,
  },
  meatballs: {
    id: 'meatballs',
    name: 'Plant-Based Meatballs',
    src: meatballs,
    description: 'Beyond Meat, 2/10 Oz',
    price: 11.69,
  },
  chao: {
    id: 'chao',
    name: 'Vegan Chao Slices',
    src: chao,
    description: 'Field Roast, 3 x 7 oz.',
    price: 11.69,
  },
  kale_salad: {
    id: 'kale_salad',
    name: 'Sweet Kale',
    src: kale_salad,
    description: 'Gourmet Salad, 28 oz',
    price: 6.49,
  },
  yaki_soba: {
    id: 'yaki_soba',
    name: 'Vegetable Yakisoba',
    src: yaki_soba,
    description: 'Ajinomoto, 6 x 9 oz',
    price: 6.49,
  },
  blueberries: {
    id: 'blueberries',
    name: 'Organic Blueberries',
    src: blueberries,
    description: 'Kirkland Signature, 3 lb',
    price: 8.69,
  },
  strawberries: {
    id: 'strawberries',
    name: 'Organic Strawberries',
    src: strawberries,
    description: 'Kirkland Signature, 4 lb',
    price: 11.45,
  },
  grapefruit: {
    id: 'grapefruit',
    name: 'Grapefruit',
    src: grapefruit,
    description: '8 lbs',
    price: 11.69,
  },
  canteloupe: {
    id: 'canteloupe',
    name: 'Cantaloupe',
    src: canteloupe,
    description: '2 ct',
    price: 7.01,
  },
  berry_blend: {
    id: 'berry_blend',
    name: "Nature's Three Berry Blend",
    src: berry_blend,
    description: 'Kirkland Signature, 4 lb',
    price: 11.69,
  },
  cocoa: {
    id: 'cocoa',
    name: 'Organic Cacao Powder',
    src: cocoa,
    description: 'Volupta, 32 oz',
    price: 11.69,
  },
  beef: {
    id: 'beef',
    name: 'Grass Fed Beef Sliced Sirloin',
    src: beef,
    description: 'Cuisine Solutions',
    price: 21.77,
  },
  bell_pepper: {
    id: 'bell_pepper',
    name: 'Mixed Bell Peppers',
    src: bell_pepper,
    description: 'Greenhouse Grown, 6 ct',
    price: 10.52,
  },
};

export default function reducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case ADD_TO_CART:
      return state;
    case REMOVE_FROM_CART:
      return state;
    default:
      return state;
  }
}
