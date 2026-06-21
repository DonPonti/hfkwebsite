import { Celebrity, BlogPost, SightingReport } from './types';

export const CELEBRITIES: Celebrity[] = [
  {
    id: 'travis-scott',
    name: 'Travis Scott',
    category: 'Musician',
    avatarUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Jacques Bermon Webster II, known professionally as Travis Scott, is an American rapper, singer, songwriter, and record producer. He is arguably the most influential figure in modern sneaker culture, famous for his Cactus Jack collaborations with Nike and Jordan Brand.',
    birthYear: 1991,
    nationality: 'American',
    styleStyle: 'Streetwear, Utilitarian, Earth Tones & Collaborations',
    popularBrands: ['Jordan Brand', 'Nike', 'Travis Scott x Nike', 'Yeezy'],
    sneakers: [
      {
        id: 'ts-jordan-1-canary',
        name: 'Air Jordan 1 Retro Low OG SP "Canary"',
        brand: 'Jordan Brand',
        colorway: 'Canary/Light Silver-Co. Yellow',
        releaseYear: 2024,
        retailPrice: 150,
        estimatedPrice: 420,
        imageUrl: '👟',
        sightingContext: 'Spotted leaving his private jet in Los Angeles, paired with olive cargo pants and a vintage Texas Oilers t-shirt.',
        rating: 5
      },
      {
        id: 'ts-mac-attack',
        name: 'Travis Scott x Nike Mac Attack "Cactus Jack"',
        brand: 'Nike',
        colorway: 'Light Smoke Grey/Black-White',
        releaseYear: 2023,
        retailPrice: 120,
        estimatedPrice: 220,
        imageUrl: '👟',
        sightingContext: 'Worn courtside at a Houston Rockets game with matching leather jackets.',
        rating: 4
      },
      {
        id: 'ts-jordan-1-reverse-mocha',
        name: 'Air Jordan 1 Low OG "Reverse Mocha"',
        brand: 'Jordan Brand',
        colorway: 'Sail/University Red-Ridgerock',
        releaseYear: 2022,
        retailPrice: 150,
        estimatedPrice: 1100,
        imageUrl: '👟',
        sightingContext: 'Spotted during his performance at the Billboard Music Awards rehearsal.',
        rating: 5
      }
    ]
  },
  {
    id: 'billie-eilish',
    name: 'Billie Eilish',
    category: 'Musician',
    avatarUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Billie Eilish Pirate Baird O\'Connell is an American singer-songwriter. Known for her unique, oversized fashion sense that challenges traditional industry expectations, she has released several eco-friendly, vegan sneaker collaborations with Nike.',
    birthYear: 2001,
    nationality: 'American',
    styleStyle: 'Oversized, Goth-Punk & Modular Techwear',
    popularBrands: ['Nike', 'Jordan Brand', 'Converse', 'Balenciaga'],
    sneakers: [
      {
        id: 'billie-force-88',
        name: 'Billie Eilish x Nike Air Alpha Force 88',
        brand: 'Nike',
        colorway: 'White/Black-Grey',
        releaseYear: 2023,
        retailPrice: 130,
        estimatedPrice: 160,
        imageUrl: '👟',
        sightingContext: 'Featured in her "What Was I Made For?" press run, styled with a vintage knit cardigan and giant beige khaki shorts.',
        rating: 4
      },
      {
        id: 'billie-jordan-15',
        name: 'Billie Eilish x Air Jordan 15 "Beige"',
        brand: 'Jordan Brand',
        colorway: 'Beige/Beige',
        releaseYear: 2021,
        retailPrice: 190,
        estimatedPrice: 240,
        imageUrl: '👟',
        sightingContext: 'Seen wearing these on stage during her Happier Than Ever World Tour. The model is 100% vegan and made with 20% recycled materials.',
        rating: 3
      },
      {
        id: 'nike-air-force-1-billie',
        name: 'Air Force 1 Low "Billie Sequoia"',
        brand: 'Nike',
        colorway: 'Sequoia/Sequoia-Sequoia',
        releaseYear: 2022,
        retailPrice: 140,
        estimatedPrice: 175,
        imageUrl: '👟',
        sightingContext: 'Spotted at the Environmental Media Association Awards. She matched the forest green tones with an eco-conscious linen suit.',
        rating: 4
      }
    ]
  },
  {
    id: 'michael-b-jordan',
    name: 'Michael B. Jordan',
    category: 'Actor',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Michael Bakari Jordan is an American actor, director, and producer. Famous for his roles in Creed and Black Panther, his style merges sleek luxury mens tailoring with timeless, heritage court sneakers like Jordan 3s and classic Nike Dunks.',
    birthYear: 1987,
    nationality: 'American',
    styleStyle: 'Elevated Gym Wear, Tailored Suiting & Vintage Jordans',
    popularBrands: ['Jordan Brand', 'Nike', 'New Balance', 'Prada'],
    sneakers: [
      {
        id: 'jordan-3-white-cement',
        name: 'Air Jordan 3 Retro "White Cement Reimagined"',
        brand: 'Jordan Brand',
        colorway: 'Summit White/Fire Red-Black',
        releaseYear: 2023,
        retailPrice: 210,
        estimatedPrice: 290,
        imageUrl: '👟',
        sightingContext: 'Worn while promoting Creed III on Jimmy Kimmel Live, paired with a relaxed-fit olive jacket and cream trousers.',
        rating: 5
      },
      {
        id: 'nike-dunk-panda',
        name: 'Nike Dunk Low "Panda"',
        brand: 'Nike',
        colorway: 'White/Black',
        releaseYear: 2021,
        retailPrice: 115,
        estimatedPrice: 140,
        imageUrl: '👟',
        sightingContext: 'Spotted grabbing organic juices in Silver Lake, wearing dark fleece sweats and a retro baseball cap.',
        rating: 3
      },
      {
        id: 'nb-550-white-grey',
        name: 'New Balance 550 "White Grey"',
        brand: 'New Balance',
        colorway: 'White/Rain Cloud',
        releaseYear: 2021,
        retailPrice: 110,
        estimatedPrice: 130,
        imageUrl: '👟',
        sightingContext: 'Spotted at a celebrity charity basketball event in New York City with athletic shorts and a lightweight windbreaker.',
        rating: 4
      }
    ]
  },
  {
    id: 'zendaya',
    name: 'Zendaya',
    category: 'Actor',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Zendaya Maree Stoermer Coleman is an American actress, singer, and high-fashion icon. Whether she is stunning the red carpet in custom archival gowns or sporting comfortable running shoes, her footwear choices always spark global trends.',
    birthYear: 1996,
    nationality: 'American',
    styleStyle: 'High Fashion Archival, Athleisure & On Running Footwear',
    popularBrands: ['On Running', 'Louis Vuitton', 'Nike', 'Christian Louboutin'],
    sneakers: [
      {
        id: 'on-cloudtilt-loewe',
        name: 'Loewe x On Cloudtilt "All Black"',
        brand: 'On Running',
        colorway: 'Black/Dark Grey',
        releaseYear: 2023,
        retailPrice: 450,
        estimatedPrice: 620,
        imageUrl: '👟',
        sightingContext: 'Spotted walking in Paris during Fashion Week. Styled elegantly with a long tailored trench coat and black leggings.',
        rating: 5
      },
      {
        id: 'lv-archlight',
        name: 'Louis Vuitton Archlight Sneaker',
        brand: 'Louis Vuitton',
        colorway: 'White/Silver/Grey',
        releaseYear: 2018,
        retailPrice: 1090,
        estimatedPrice: 850,
        imageUrl: '👟',
        sightingContext: 'Worn to the Louis Vuitton Fall-Winter showcase in Paris with a graphic sweater and leather skirt.',
        rating: 4
      },
      {
        id: 'jordan-1-chicago-85',
        name: 'Air Jordan 1 "Lost & FoundChicago"',
        brand: 'Jordan Brand',
        colorway: 'Varsity Red/Black-Sail-White',
        releaseYear: 2022,
        retailPrice: 180,
        estimatedPrice: 400,
        imageUrl: '👟',
        sightingContext: 'Seen while walking around London with her partner Tom Holland. Coupled with oversized blue jeans and a fuzzy brown coat.',
        rating: 4
      }
    ]
  },
  {
    id: 'justin-bieber',
    name: 'Justin Bieber',
    category: 'Musician',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Justin Drew Bieber is a Canadian singer who is widely credited with cementing casual, ultra-baggy "Scumbro" aesthetics into modern luxurious streetwear. He frequently pairs high-end luxury slippers or retro skate shoes with baggy cargo layouts.',
    birthYear: 1994,
    nationality: 'Canadian',
    styleStyle: 'Oversized Streetwear, Drew House Casual & Skate Culture',
    popularBrands: ['Adidas', 'Nike', 'Yeezy', 'Drew House', 'Balenciaga'],
    sneakers: [
      {
        id: 'adidas-samba-black',
        name: 'Adidas Samba Classic "Core Black"',
        brand: 'Adidas',
        colorway: 'Core Black/Cloud White',
        releaseYear: 1950,
        retailPrice: 90,
        estimatedPrice: 100,
        imageUrl: '👟',
        sightingContext: 'Photoed walking with Hailey Bieber in Beverly Hills. He wore them with baggy distressed denim and his trademark oversized pink hoodie.',
        rating: 4
      },
      {
        id: 'yeezy-foam-runner-sand',
        name: 'Yeezy Foam Runner "Sand"',
        brand: 'Yeezy',
        colorway: 'Sand/Sand-Sand',
        releaseYear: 2021,
        retailPrice: 80,
        estimatedPrice: 280,
        imageUrl: '👟',
        sightingContext: 'Spotted leaves the studio in Calabasas in a bright yellow Drew House fleece and grey gym shorts.',
        rating: 3
      },
      {
        id: 'nike-dunk-chunky-dunky',
        name: 'Nike SB Dunk Low "Chunky Dunky"',
        brand: 'Nike',
        colorway: 'Blue Fury/Black-White',
        releaseYear: 2020,
        retailPrice: 100,
        estimatedPrice: 1450,
        imageUrl: '👟',
        sightingContext: 'Spotted skateboarding outside his estate, rocking the rare cow-printed dunks with tie-dye tube socks.',
        rating: 5
      }
    ]
  },
  {
    id: 'lebron-james',
    name: 'LeBron James',
    category: 'Athlete',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'LeBron Raymone James Sr. is an American professional basketball player for the Los Angeles Lakers. Respected as one of the greatest NBA players of all time, "King James" rules the pre-game tunnel walk with rare custom sneakers and ultra-exclusive collabs.',
    birthYear: 1984,
    nationality: 'American',
    styleStyle: 'Ultra-Exclusive Collabs, Bespoke Tailored Outfits & Luxury Athleisure',
    popularBrands: ['Nike', 'Tiffany & Co.', 'Jordan Brand', 'Audemars Piguet'],
    sneakers: [
      {
        id: 'nike-af1-tiffany',
        name: 'Tiffany & Co. x Nike Air Force 1 Low "1837"',
        brand: 'Tiffany & Co.',
        colorway: 'Black/Tiffany Blue',
        releaseYear: 2023,
        retailPrice: 400,
        estimatedPrice: 1050,
        imageUrl: '👟',
        sightingContext: 'Tunnel walk entrance at Crypto.com Arena, dressed in a custom matching black varsity jacket with Tiffany-blue sleeves.',
        rating: 5
      },
      {
        id: 'lebron-21-purple',
        name: 'Nike LeBron 21 "Purple Rain"',
        brand: 'Nike',
        colorway: 'Violet Dust/Melon Tint',
        releaseYear: 2023,
        retailPrice: 200,
        estimatedPrice: 180,
        imageUrl: '👟',
        sightingContext: 'Debuted on-court during the first game of his 21st NBA season, dazzling fans with the premium suede upper.',
        rating: 4
      },
      {
        id: 'air-max-1-ts-baroque',
        name: 'Travis Scott x Nike Air Max 1 "Baroque Brown"',
        brand: 'Nike',
        colorway: 'Baroque Brown/Lemon Drop',
        releaseYear: 2022,
        retailPrice: 150,
        estimatedPrice: 380,
        imageUrl: '👟',
        sightingContext: 'Spotted at the Super Bowl afterparty, styled with customized brown wide-leg pants.',
        rating: 4
      }
    ]
  },
  {
    id: 'tom-holland',
    name: 'Tom Holland',
    category: 'Actor',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Thomas Stanley Holland is an English actor. Famous for playing Spider-Man in the MCU, he maintains a grounded, approachable wardrobe consisting of durable classic runners, stylish Nike Blazers, and iconic Air Maxes.',
    birthYear: 1996,
    nationality: 'British',
    styleStyle: 'Smart Casual, Classic British Wardrobe & Reliable Retro Kicks',
    popularBrands: ['Nike', 'Adidas', 'Converse', 'Cartier'],
    sneakers: [
      {
        id: 'nike-blazer-mid-77',
        name: 'Nike Blazer Mid \'77 Vintage "White/Black"',
        brand: 'Nike',
        colorway: 'White/Black-Sail',
        releaseYear: 1977,
        retailPrice: 105,
        estimatedPrice: 95,
        imageUrl: '👟',
        sightingContext: 'Frequently observed wearing these beaters with cuff trousers and simple beige crewnecks during Marvel panel events.',
        rating: 3
      },
      {
        id: 'nike-air-max-90-ir',
        name: 'Nike Air Max 90 "Infrared"',
        brand: 'Nike',
        colorway: 'White/Black-Cool Grey-Radiant Red',
        releaseYear: 1990,
        retailPrice: 140,
        estimatedPrice: 210,
        imageUrl: '👟',
        sightingContext: 'Seen boarding a helicopter in London, keeping his travel outfit simple with sweatpants and a structured utility coat.',
        rating: 4
      }
    ]
  },
  {
    id: 'rihanna',
    name: 'Rihanna',
    category: 'Musician',
    avatarUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Robyn Rihanna Fenty is a Barbadian singer, businesswoman, and fashion revolutionary. She single-handedly redefined maternity style and owns several sportswear brands. Her sneaker rotation includes futuristic outdoor tech-wear and her Fenty Puma line.',
    birthYear: 1988,
    nationality: 'Barbadian',
    styleStyle: 'Met Gala Trailblazer, High-Low Styling & Gorpcore Salomon',
    popularBrands: ['Puma x Fenty', 'Salomon', 'Nike', 'Chanel'],
    sneakers: [
      {
        id: 'salomon-xt6-red',
        name: 'Salomon XT-6 "Red/Black"',
        brand: 'Salomon',
        colorway: 'Racing Red/Black',
        releaseYear: 2013,
        retailPrice: 200,
        estimatedPrice: 250,
        imageUrl: '👟',
        sightingContext: 'Worn during her historic 2023 Super Bowl Halftime show, matched with a fiery red custom flight suit.',
        rating: 5
      },
      {
        id: 'fenty-puma-creeper-phatty',
        name: 'Fenty x Puma Creeper Phatty "Blue/Lavender"',
        brand: 'Puma x Fenty',
        colorway: 'Speed Blue/Lavender Alert',
        releaseYear: 2023,
        retailPrice: 140,
        estimatedPrice: 180,
        imageUrl: '👟',
        sightingContext: 'Seen celebrating her Fenty launch event, paired with an oversized plush blue shearling jacket.',
        rating: 4
      }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'travis-scott-jordan-legacy',
    title: 'Inside Travis Scott’s Colossal Air Jordan Legacy',
    excerpt: 'We analyze the incredible design choices, release numbers, and valuation charts behind Cactus Jack’s decade-long subversion of SNKRS app algorithms.',
    author: 'Eleanor Vance',
    date: 'Jun 18, 2026',
    readingTime: '4 min read',
    tags: ['Travis Scott', 'Jordan Brand', 'Market Valuation', 'Spotlight'],
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600&h=400',
    featured: true,
    content: `In the history of footwear design, few personalities have commanded the primary real estate of global resale tickers quite like Jacques Webster, professionally known as **Travis Scott**. 

What began in 2017 as a relatively restrained canvas AF1 collab featuring removable metallic Swooshes has morphed into a multi-billion dollar cultural economy. But what makes a "Cactus Jack" sneaker so universally instantly recognizable?

### The Trademark Architecture
The secret is not merely slapping a logo on a regular retro colorway. Scott engineered physical alterations that subvert expectations:
1. **The Reversed Swoosh**: First seen on the Air Jordan 1 High "Cactus Jack" in 2019, turning the iconic brand symbol backward was a stroke of design genius. It created immediate visual tension and became the ultimate badge of streetwear credibility.
2. **Hidden Pocket Compartments**: Inspired by technical utility gear and hiking equipment, many Jordan 6 or Jordan 1 custom releases feature low-profile pockets inside the ankle collar.
3. **Muted Earth Tones**: Scott restricted his palette almost exclusively to "Sail", "Military Blue", "Dark Mocha", "Khaki", and "Baroque Brown". These muted, neutral tones made historic neon basketball shoes highly wearable with general cargo streetwear.

### Market Cap of the Reverse Mocha
No shoe captures this era better than the **Air Jordan 1 Low OG "Reverse Mocha"**. Released in 2022 with a retail price of $150, its current deadstock price hovers around **$1,100**. This represents a staggering **633% resale markup**, surpassing gold standards or index funds over the same period. 

According to scanner tracking metrics, over 3.8 million users entered the official raffle on Travis Scott's site, temporarily disabling web pipelines. Our performance dashboard clocks this raffle as one of the densest server congestions in modern web retail history.

Whether you favor his avant-garde silhouettes or find the continuous low-top iterations exhausting, one thing remains certain: the reverse Swoosh guides the modern gold rush of sneaker collecting.`
  },
  {
    id: 'retro-runners-hollywood',
    title: 'Retro Runners Take Over Hollywood: Samba & 550s',
    excerpt: 'The death of the bulky triple-soled "dad shoe" ushered in an era of pristine, flat court shoes. How the Adidas Samba and New Balance 550 conquered Beverly Hills.',
    author: 'Clara Oswald',
    date: 'May 12, 2026',
    readingTime: '3 min read',
    tags: ['Adidas', 'New Balance', 'Trends', 'Street Style'],
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600&h=400',
    content: `If you walked down Rodeo Drive in 2018, your eyes would be assaulted by three-inch thick Vibram soles, neon green Balenciaga Triple S, and chunky mesh Yeezy 700s. Today, things look vastly different. The aesthetic has completely collapsed toward the pavement.

### The Return of Ground Control
The modern Hollywood shift toward minimalism in footwear is spearheaded by two prominent retro models: the **Adidas Samba** (first released in 1950 as an indoor soccer shoe) and the **New Balance 550** (originally designed in 1989 for collegiate basketball).

These shoes share key design DNA:
- **Low Profiles**: They hug the ankle closely, providing a streamlined line when paired with baggy trousers.
- **Gum Soles & Suede Accents**: Natural cream gums and soft grey leather trims offer organic, warm texturing.
- **Sub-$120 Accessibility**: Unlike previous luxury footwear fads, these silhouettes remain relatively inexpensive at retail, making them the ultimate democratic style staple.

### The Paparazzi Effect
When style icons like **Justin Bieber** or **Zendaya** are captured in candid paparazzi shots wearing simple Sambas or 550s, the psychological messaging is simple: *unpretentious, comfortable, and off-duty elegance*. 

By ditching the heavy padding for vintage athletic leather, Hollywood's elite have turned normal everyday vintage items into high-fashion statements. High-performance blog stats suggest search inquiries for "Gum sole retro shoes" rose 400% during this shift, solidifying these models as the ultimate timeless choices for the modern wardrobe.`
  },
  {
    id: 'performance-spotting-guide',
    title: 'The High-Performance Sneaker Spotting Guide',
    excerpt: 'How journalists and sneakerheads decode blurry paparazzi shots, low-res CCTV footage, and compressed Instagram frames in milliseconds.',
    author: 'Miles Marcus',
    date: 'Apr 03, 2026',
    readingTime: '5 min read',
    tags: ['Sneaker Spotting', 'Sighting Guide', 'Paparazzi Tech', 'Opinion'],
    imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=600&h=400',
    content: `To the untrained eye, a paparazzi crop of a celebrity exiting a grocery store shows nothing but a blurry mass of white rubber and black trim. To a dedicated shoe investigator, those exact 20 pixels speak volumes: the herringbone outsole pattern, the exact thickness of the flat cotton laces, and the subtle perforations on the lateral mudguard.

In the spirit of high-performance efficiency, we present the internal spotting protocol used to catalog shoes in our Hollywood Celeb Directory.

### 1. The Silhouette Contour Walk
Before looking at colorway details, observe the pitch and shape of the shoe from the side.
- **The Flat Skate Slope**: If the sole is flat with a rounded nose and high padding, think **Nike SB Dunks** or **Adidas Forum**.
- **The Curved Arch Curve**: Running shoes like the **Salomon XT-6** have a distinct upwards nose curvature and quick-lace drawstring cord tags.
- **The Chevron Panels**: New Balance relies heavily on triangular panels on the heel, whereas Nike favors sweeping parallel stitching.

### 2. Identifying Branding Shadows
When direct logos are obscured by denim cuffs, look for the logo's negative space shadow:
- **The Three Stripes shadow**: Appears as diagonal parallel ridges.
- **The Swoosh sweep**: Loops over the Achilles heel collar.
- **The New Balance "N" bulge**: A boxy, raised side reflection.

### 3. Verification & Local Intelligence
Once a sneaker has been spotted, cross-examine it against known flight details. Did Travis Scott fly to Paris today? Checked. Is it raining there? Checked (thus, he is wearing Gore-Tex, ruling out canvas suede). This structural sleuthing ensures our directory remains pristine, ultra-factual, and 100% accurate. 

Next time you see an unidentified item on a red carpet, put on your detective lens and help us report a spot!`
  }
];

export const INITIAL_REPORTS: SightingReport[] = [
  {
    id: 'rep-1',
    celebrityName: 'Travis Scott',
    sneakerName: 'Jordan 1 Low OG "Reverse Mocha"',
    brand: 'Jordan Brand',
    location: 'Houston Rockets VIP Lounge',
    dateReported: '2026-06-19',
    reporterName: 'KicksWiz99',
    description: 'Holding court at the Rockets game, wearing vintage heavy wash cargo layers and what looked like a rare brown sample version of his Jordan low.',
    approved: true
  },
  {
    id: 'rep-2',
    celebrityName: 'Billie Eilish',
    sneakerName: 'Air Force 1 Low "Billie Sequoia"',
    brand: 'Nike',
    location: 'Sunset Blvd Organic Market',
    dateReported: '2026-06-18',
    reporterName: 'GreenBeast',
    description: 'Shopping with her friends wearing her trademark baggy shorts and the eco-leather brown patches AF1.',
    approved: true
  }
];
