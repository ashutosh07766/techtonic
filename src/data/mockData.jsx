export const mockProducts = [
  {
    id: '1',
    name: 'Elegant Black Dress',
    price: 299,
    brand: 'Chic Fashion',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A stunning black dress perfect for evening events'
  },
  {
    id: '2',
    name: 'Designer Handbag',
    price: 450,
    brand: 'Luxury Bags',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Premium leather handbag with gold accents'
  },
  {
    id: '3',
    name: 'Summer Collection Dress',
    price: 180,
    brand: 'Sunny Days',
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Light and breezy summer dress'
  },
  {
    id: '4',
    name: 'Casual Denim Jacket',
    price: 120,
    brand: 'Street Style',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Classic denim jacket for everyday wear'
  },
  {
    id: '5',
    name: 'Summer Sundress',
    price: 85,
    brand: 'Sunny Days',
    image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Light and breezy sundress for warm weather'
  },
  {
    id: '6',
    name: 'Slim Fit Grey Pants',
    price: 110,
    brand: 'Urban Tailor',
    image: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Modern slim fit pants for a sharp look'
  },
  {
    id: '7',
    name: 'White Basic Tee',
    price: 40,
    brand: 'Basics Co.',
    image: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Classic white t-shirt for any occasion'
  }
];

export const mockLooks = [
  {
    id: '1',
    title: 'Urban Edge by David',
    description: 'Effortless city style with layers. #UrbanEdge #MensFashion',
    media: [
      {
        id: '1',
        type: 'image',
        url: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=1920',
        annotations: [
          { id: '1', x: 50, y: 32, productId: '4' }, // Jacket (upper body)
          { id: '2', x: 50, y: 70, productId: '6' }, // Pants (legs)
          { id: '3', x: 50, y: 45, productId: '7' }  // Tee (chest)
        ]
      }
    ],
    products: [
      mockProducts[3], // Jacket
      mockProducts[5], // Pants
      mockProducts[6]  // Tee
    ],
    likes: 3200,
    comments: 210,
    timestamp: '1h ago'
  },
  {
    id: '2',
    title: 'Evening Elegance by Emma Stone',
    description: '✨ Red carpet ready with this stunning ensemble! #FashionWeek #RedCarpetReady',
    media: [
      {
        id: '2',
        type: 'image',
        url: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920',
        annotations: [
          { id: '4', x: 50, y: 60, productId: '1' }, // Dress (center body)
          { id: '5', x: 65, y: 65, productId: '2' }  // Bag (right hand)
        ]
      }
    ],
    products: [
      mockProducts[0], // Dress
      mockProducts[1]  // Bag
    ],
    likes: 2458,
    comments: 342,
    timestamp: '2h ago'
  },
  {
    id: '3',
    title: 'Summer Vibes by Margot Robbie',
    description: 'Beach ready with this stunning collection! #SummerStyle #BeachFashion',
    media: [
      {
        id: '3',
        type: 'image',
        url: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1920',
        annotations: [
          { id: '6', x: 50, y: 60, productId: '5' }, // Sundress (center body)
          { id: '7', x: 65, y: 75, productId: '2' }  // Bag (right hand)
        ]
      }
    ],
    products: [
      mockProducts[4], // Sundress
      mockProducts[1]  // Bag
    ],
    likes: 3245,
    comments: 289,
    timestamp: '6h ago'
  },
  {
    id: '4',
    title: 'Casual Chic by Zendaya',
    description: 'Street style perfected! #StreetStyle #FashionInspo',
    media: [
      {
        id: '4',
        type: 'image',
        url: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1920',
        annotations: [
          { id: '8', x: 50, y: 32, productId: '4' }, // Jacket (upper body)
          { id: '9', x: 50, y: 70, productId: '6' }  // Pants (legs)
        ]
      }
    ],
    products: [
      mockProducts[3], // Jacket
      mockProducts[5]  // Pants
    ],
    likes: 1892,
    comments: 156,
    timestamp: '4h ago'
  },
  {
    id: '5',
    title: 'Runway Ready by Bella Hadid',
    description: 'Fashion Week moments ✨ Swipe to see the full collection 👉 #FashionWeek #RunwayReady',
    media: [
      {
        id: '13',
        type: 'image',
        url: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920',
        annotations: [
          { id: '18', x: 50, y: 60, productId: '1' }
        ]
      },
      {
        id: '14',
        type: 'image',
        url: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920&crop=faces&fit=crop&h=1920',
        annotations: [
          { id: '19', x: 50, y: 60, productId: '1' }
        ]
      }
    ],
    products: [mockProducts[0]],
    likes: 5678,
    comments: 789,
    timestamp: '10h ago'
  },
  {
    id: '6',
    title: 'Beach Glam by Hailey Bieber',
    description: 'Summer days in paradise 🏖️ Swipe for more beach looks 👉 #BeachStyle #SummerVibes',
    media: [
      {
        id: '16',
        type: 'image',
        url: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1920',
        annotations: [
          { id: '21', x: 50, y: 65, productId: '5' }
        ]
      },
      {
        id: '17',
        type: 'image',
        url: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1920&crop=faces&fit=crop&h=1920',
        annotations: [
          { id: '22', x: 50, y: 65, productId: '5' }
        ]
      }
    ],
    products: [mockProducts[4]],
    likes: 6789,
    comments: 890,
    timestamp: '12h ago'
  },
  {
    id: '7',
    title: 'Street Style by Kendall Jenner',
    description: 'Urban vibes in the city 🌆 Swipe for more street style 👉 #StreetStyle #UrbanFashion',
    media: [
      {
        id: '19',
        type: 'image',
        url: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1920',
        annotations: [
          { id: '24', x: 50, y: 55, productId: '4' }
        ]
      },
      {
        id: '20',
        type: 'image',
        url: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1920&crop=faces&fit=crop&h=1920',
        annotations: [
          { id: '25', x: 50, y: 55, productId: '4' }
        ]
      }
    ],
    products: [mockProducts[3]],
    likes: 7890,
    comments: 901,
    timestamp: '14h ago'
  },
  {
    id: '8',
    title: 'Evening Glam by Blake Lively',
    description: 'Red carpet moments ✨ Swipe for more glamour 👉 #RedCarpet #EveningGlam',
    media: [
      {
        id: '21',
        type: 'image',
        url: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920',
        annotations: [
          { id: '26', x: 50, y: 60, productId: '1' }
        ]
      },
      {
        id: '22',
        type: 'image',
        url: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920&crop=faces&fit=crop&h=1920',
        annotations: [
          { id: '27', x: 50, y: 60, productId: '1' }
        ]
      }
    ],
    products: [mockProducts[0]],
    likes: 8901,
    comments: 1023,
    timestamp: '16h ago'
  }
]; 