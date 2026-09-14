/* Halcyon Estates — fictional India-focused listing data. */
const LISTINGS = [
  {
    id: "jaipur-courtyard-villa",
    title: "Jaipur Courtyard Villa",
    address: "28 Prithviraj Marg",
    city: "Jaipur",
    price: 12500000,
    type: "Villa",
    status: "For Sale",
    beds: 4,
    baths: 4,
    sqft: 2850,
    lot: "240 sq yd",
    year: 2020,
    featured: true,
    description:
      "A refined four-bedroom villa in a quiet Jaipur neighbourhood, designed around a shaded central courtyard. Natural stone, warm timber and generous verandas give the home a calm indoor-outdoor character suited to family living and entertaining.",
    images: [
      "https://images.pexels.com/photos/36562003/pexels-photo-36562003.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/19223696/pexels-photo-19223696.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/15828308/pexels-photo-15828308.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/31060396/pexels-photo-31060396.jpeg?auto=compress&cs=tinysrgb&w=1400"
    ],
    agent: { name: "Raghav Rathore", role: "Managing Director", phone: "+91 141 412 6800", email: "raghav@halcyonestates.in", photo: "https://images.pexels.com/photos/3400567/pexels-photo-3400567.jpeg?auto=compress&cs=tinysrgb&w=500" }
  },
  {
    id: "udaipur-lakeview-residence",
    title: "Udaipur Lakeview Residence",
    address: "17 Rani Road",
    city: "Udaipur",
    price: 21000000,
    type: "House",
    status: "For Sale",
    beds: 4,
    baths: 5,
    sqft: 3600,
    lot: "420 sq yd",
    year: 2019,
    featured: true,
    description:
      "An elegant residence near the lake with broad terraces, arched openings and landscaped courtyards. The plan balances private family spaces with a generous living and dining level made for long evenings and guests.",
    images: [
      "https://images.pexels.com/photos/15828308/pexels-photo-15828308.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/31060396/pexels-photo-31060396.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/36562003/pexels-photo-36562003.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/19223696/pexels-photo-19223696.jpeg?auto=compress&cs=tinysrgb&w=1400"
    ],
    agent: { name: "Ananya Mehta", role: "Senior Property Advisor", phone: "+91 294 451 2380", email: "ananya@halcyonestates.in", photo: "https://images.pexels.com/photos/7580835/pexels-photo-7580835.jpeg?auto=compress&cs=tinysrgb&w=500" }
  },
  {
    id: "ahmedabad-modern-apartment",
    title: "C.G. Road Modern Residence",
    address: "11 Sagar Avenue, C.G. Road",
    city: "Ahmedabad",
    price: 7800000,
    type: "Apartment",
    status: "For Sale",
    beds: 3,
    baths: 3,
    sqft: 1850,
    lot: "—",
    year: 2022,
    featured: true,
    description:
      "A bright three-bedroom apartment in a well-connected Ahmedabad neighbourhood, with a contemporary kitchen, large windows and a practical open living-dining plan. Finished for comfortable city living with understated materials.",
    images: [
      "https://images.pexels.com/photos/35114454/pexels-photo-35114454.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/9285535/pexels-photo-9285535.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/23534110/pexels-photo-23534110.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/31060396/pexels-photo-31060396.jpeg?auto=compress&cs=tinysrgb&w=1400"
    ],
    agent: { name: "Arjun Shah", role: "Residential Advisor", phone: "+91 79 4892 6400", email: "arjun@halcyonestates.in", photo: "https://images.pexels.com/photos/35977121/pexels-photo-35977121.jpeg?auto=compress&cs=tinysrgb&w=500" }
  },
  {
    id: "pune-row-house",
    title: "Koregaon Park Row House",
    address: "6 Lane 5, Koregaon Park",
    city: "Pune",
    price: 16500000,
    type: "House",
    status: "For Sale",
    beds: 3,
    baths: 3,
    sqft: 2400,
    lot: "185 sq yd",
    year: 2018,
    featured: false,
    description:
      "A thoughtfully planned row house tucked into a leafy Koregaon Park lane. Three bedrooms, a private terrace garden and a flexible study create a comfortable layout for both working from home and relaxed family life.",
    images: [
      "https://images.pexels.com/photos/9285535/pexels-photo-9285535.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/35114454/pexels-photo-35114454.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/23534110/pexels-photo-23534110.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/19223696/pexels-photo-19223696.jpeg?auto=compress&cs=tinysrgb&w=1400"
    ],
    agent: { name: "Ananya Mehta", role: "Senior Property Advisor", phone: "+91 294 451 2380", email: "ananya@halcyonestates.in", photo: "https://images.pexels.com/photos/7580835/pexels-photo-7580835.jpeg?auto=compress&cs=tinysrgb&w=500" }
  },
  {
    id: "indore-garden-home",
    title: "Vijay Nagar Garden Home",
    address: "42 Scheme No. 54",
    city: "Indore",
    price: 9500000,
    type: "House",
    status: "For Sale",
    beds: 3,
    baths: 3,
    sqft: 2200,
    lot: "200 sq yd",
    year: 2021,
    featured: false,
    description:
      "A modern family home with a landscaped front garden, airy living spaces and a private rear courtyard. The kitchen opens naturally into the dining area, while the upper floor keeps bedrooms quiet and well separated.",
    images: [
      "https://images.pexels.com/photos/23534110/pexels-photo-23534110.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/35114454/pexels-photo-35114454.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/9285535/pexels-photo-9285535.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/31060396/pexels-photo-31060396.jpeg?auto=compress&cs=tinysrgb&w=1400"
    ],
    agent: { name: "Kavya Malhotra", role: "Property Advisor", phone: "+91 11 4142 6800", email: "kavya@halcyonestates.in", photo: "https://images.pexels.com/photos/20552542/pexels-photo-20552542.jpeg?auto=compress&cs=tinysrgb&w=500" }
  },
  {
    id: "jaipur-heritage-apartment",
    title: "C-Scheme Heritage Apartment",
    address: "9 Bhagwan Das Road, C-Scheme",
    city: "Jaipur",
    price: 6200000,
    type: "Apartment",
    status: "For Sale",
    beds: 2,
    baths: 2,
    sqft: 1250,
    lot: "—",
    year: 2020,
    featured: false,
    description:
      "A polished two-bedroom apartment in one of central Jaipur's established residential pockets. High ceilings, natural light and a generous balcony give the home a quiet, spacious feel close to the city's cafés, offices and cultural landmarks.",
    images: [
      "https://images.pexels.com/photos/35114454/pexels-photo-35114454.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/23534110/pexels-photo-23534110.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/31060396/pexels-photo-31060396.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/9285535/pexels-photo-9285535.jpeg?auto=compress&cs=tinysrgb&w=1400"
    ],
    agent: { name: "Raghav Rathore", role: "Managing Director", phone: "+91 141 412 6800", email: "raghav@halcyonestates.in", photo: "https://images.pexels.com/photos/3400567/pexels-photo-3400567.jpeg?auto=compress&cs=tinysrgb&w=500" }
  },
  {
    id: "bengaluru-courtyard-villa",
    title: "Indiranagar Courtyard Villa",
    address: "24 12th Main Road, Indiranagar",
    city: "Bengaluru",
    price: 13500000,
    type: "Villa",
    status: "Pending",
    beds: 4,
    baths: 4,
    sqft: 3100,
    lot: "250 sq yd",
    year: 2017,
    featured: false,
    description:
      "A contemporary Bengaluru villa organized around a private planted courtyard. Four bedrooms, a double-height living room and a shaded terrace create a relaxed home with excellent separation between work, family and entertaining spaces.",
    images: [
      "https://images.pexels.com/photos/31060396/pexels-photo-31060396.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/15828308/pexels-photo-15828308.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/19223696/pexels-photo-19223696.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/36562003/pexels-photo-36562003.jpeg?auto=compress&cs=tinysrgb&w=1400"
    ],
    agent: { name: "Arjun Shah", role: "Residential Advisor", phone: "+91 79 4892 6400", email: "arjun@halcyonestates.in", photo: "https://images.pexels.com/photos/35977121/pexels-photo-35977121.jpeg?auto=compress&cs=tinysrgb&w=500" }
  },
  {
    id: "chandigarh-sector-10-home",
    title: "Sector 10 Family Residence",
    address: "38 Sector 10",
    city: "Chandigarh",
    price: 27500000,
    type: "House",
    status: "For Sale",
    beds: 5,
    baths: 5,
    sqft: 3900,
    lot: "500 sq yd",
    year: 2015,
    featured: false,
    description:
      "A spacious independent residence in a quiet Chandigarh sector, with mature planting, broad rooms and a sheltered rear garden. The five-bedroom layout offers generous family accommodation while retaining a formal living and dining zone for entertaining.",
    images: [
      "https://images.pexels.com/photos/23534110/pexels-photo-23534110.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/35114454/pexels-photo-35114454.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/15828308/pexels-photo-15828308.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/31060396/pexels-photo-31060396.jpeg?auto=compress&cs=tinysrgb&w=1400"
    ],
    agent: { name: "Kavya Malhotra", role: "Property Advisor", phone: "+91 11 4142 6800", email: "kavya@halcyonestates.in", photo: "https://images.pexels.com/photos/20552542/pexels-photo-20552542.jpeg?auto=compress&cs=tinysrgb&w=500" }
  }
];

function formatPrice(n) {
  if (n >= 10000000) return "₹" + (n / 10000000).toFixed(2) + " Cr";
  if (n >= 100000) return "₹" + (n / 100000).toFixed(2) + " Lakh";
  return "₹" + n.toLocaleString("en-IN");
}
