// Sections data array
const sections = [
  {
    title: 'hats',
    imageUrl: '/images/section-img/hats.png',
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'jackets',
    imageUrl: '/images/section-img/jackets.png',
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'sneakers',
    imageUrl: '/images/section-img/sneakers.png',
    id: 3,
    linkUrl: 'shop/sneakers'
  },
  {
    title: 'womens',
    imageUrl: '/images/section-img/womens.png',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens'
  },
  {
    title: 'mens',
    imageUrl: '/images/section-img/men.png',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens'
  }
];

// Shop data array
const shopData = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 6,
        name: 'Brown Brim',
        imageUrl: "/images/shop-img/hats/brown-brim.png",
        price: 25
      },
      {
        id: 7,
        name: 'Blue Beanie',
        imageUrl: "/images/shop-img/hats/blue-beanie.png",
        price: 18
      },
      {
        id: 8,
        name: 'Brown Cowboy',
        imageUrl: "/images/shop-img/hats/brown-cowboy.png",
        price: 35
      },
      {
        id: 9,
        name: 'Grey Brim',
        imageUrl: "/images/shop-img/hats/grey-brim.png",
        price: 25
      },
      {
        id: 10,
        name: 'Green Beanie',
        imageUrl: "/images/shop-img/hats/green-beanie.png",
        price: 18
      },
      {
        id: 11,
        name: 'Palm Tree Cap',
        imageUrl: "/images/shop-img/hats/palm-tree-cap.png",
        price: 14
      },
      {
        id: 12,
        name: 'Red Beanie',
        imageUrl: "/images/shop-img/hats/red-beanie.png",
        price: 18
      },
      {
        id: 13,
        name: 'Wolf Cap',
        imageUrl: "/images/shop-img/hats/wolf-cap.png",
        price: 14
      },
      {
        id: 14,
        name: 'Blue Snapback',
        imageUrl: "/images/shop-img/hats/blue-snapback.png",
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 15,
        name: 'Adidas NMD',
        imageUrl: "/images/shop-img/sneakers/adidas-nmd.png", 
        price: 220
      },
      {
        id: 16,
        name: 'Adidas Yeezy',
        imageUrl: "/images/shop-img/sneakers/yeezy.png",
        price: 280
      },
      {
        id: 17,
        name: 'Black Converse',
        imageUrl: "/images/shop-img/sneakers/black-converse.png",
        price: 110
      },
      {
        id: 18,
        name: 'Nike White AirForce',
        imageUrl: "/images/shop-img/sneakers/white-nike-high-tops.png",
        price: 160
      },
      {
        id: 19,
        name: 'Nike Red High Tops',
        imageUrl: "/images/shop-img/sneakers/nikes-red.png",
        price: 160
      },
      {
        id: 20,
        name: 'Nike Brown High Tops',
        imageUrl: "/images/shop-img/sneakers/nike-brown.png",
        price: 160
      },
      {
        id: 21,
        name: 'Air Jordan Limited',
        imageUrl: "/images/shop-img/sneakers/nike-funky.png",
        price: 190
      },
      {
        id: 22,
        name: 'Timberlands',
        imageUrl: "/images/shop-img/sneakers/timberlands.png",
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 23,
        name: 'Black Jean Shearling',
        imageUrl: "/images/shop-img/jackets/black-shearling.png",
        price: 125
      },
      {
        id: 24,
        name: 'Blue Jean Jacket',
        imageUrl: "/images/shop-img/jackets/blue-jean-jacket.png",
        price: 90
      },
      {
        id: 25,
        name: 'Grey Jean Jacket',
        imageUrl: "/images/shop-img/jackets/grey-jean-jacket.png",
        price: 90
      },
      {
        id: 26,
        name: 'Brown Shearling',
        imageUrl: "/images/shop-img/jackets/brown-shearling.png",
        price: 165
      },
      {
        id: 27,
        name: 'Tan Trench',
        imageUrl: "/images/shop-img/jackets/brown-trench.png",
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 28,
        name: 'Blue Tanktop',
        imageUrl: "/images/shop-img/womens/blue-tank.png",
        price: 25
      },
      {
        id: 29,
        name: 'Floral Blouse',
        imageUrl: "/images/shop-img/womens/floral-blouse.png",
        price: 20
      },
      {
        id: 30,
        name: 'Floral Dress',
        imageUrl: "/images/shop-img/womens/floral-skirt.png",
        price: 80
      },
      {
        id: 31,
        name: 'Red Dots Dress',
        imageUrl: "/images/shop-img/womens/red-polka-dot-dress.png",
        price: 80
      },
      {
        id: 32,
        name: 'Striped Sweater',
        imageUrl: "/images/shop-img/womens/striped-sweater.png",
        price: 45
      },
      {
        id: 33,
        name: 'Yellow Track Suit',
        imageUrl: "/images/shop-img/womens/yellow-track-suit.png",
        price: 135
      },
      {
        id: 34,
        name: 'White Blouse',
        imageUrl: "/images/shop-img/womens/white-vest.png",
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 35,
        name: 'Camo Down Vest',
        imageUrl: "/images/shop-img/mens/camo-vest.png",
        price: 325
      },
      {
        id: 36,
        name: 'Floral T-shirt',
        imageUrl: "/images/shop-img/mens/floral-shirt.png",
        price: 20
      },
      {
        id: 37,
        name: 'Black & White Longsleeve',
        imageUrl: "/images/shop-img/mens/long-sleeve.png",
        price: 25
      },
      {
        id: 38,
        name: 'Pink T-shirt',
        imageUrl: "/images/shop-img/mens/pink-shirt.png",
        price: 25
      },
      {
        id: 39,
        name: 'Jean Long Sleeve',
        imageUrl: "/images/shop-img/mens/roll-up-jean-shirt.png",
        price: 40
      },
      {
        id: 40,
        name: 'Burgundy T-shirt',
        imageUrl: "/images/shop-img/mens/polka-dot-shirt.png",
        price: 25
      }
    ]
  }
];

const Data = {
  sections: sections,
  shopData: shopData
};

export default Data;
