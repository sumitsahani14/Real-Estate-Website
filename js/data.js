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
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80"
    ],
    agent: { name: "Aarav Mehta", role: "Senior Property Advisor", phone: "+91 98765 21480", email: "aarav@halcyonestates.example", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" }
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
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80"
    ],
    agent: { name: "Meera Kapoor", role: "Property Advisor", phone: "+91 98290 34172", email: "meera@halcyonestates.example", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" }
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
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80"
    ],
    agent: { name: "Rohan Shah", role: "Broker Associate", phone: "+91 98250 41862", email: "rohan@halcyonestates.example", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" }
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
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=900&q=80"
    ],
    agent: { name: "Meera Kapoor", role: "Property Advisor", phone: "+91 98290 34172", email: "meera@halcyonestates.example", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" }
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
      "https://images.unsplash.com/photo-1600585153916-d84e0dd39fb2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=900&q=80"
    ],
    agent: { name: "Kabir Malhotra", role: "Property Advisor", phone: "+91 98100 52641", email: "kabir@halcyonestates.example", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" }
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
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80"
    ],
    agent: { name: "Aarav Mehta", role: "Senior Property Advisor", phone: "+91 98765 21480", email: "aarav@halcyonestates.example", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" }
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
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80"
    ],
    agent: { name: "Rohan Shah", role: "Broker Associate", phone: "+91 98250 41862", email: "rohan@halcyonestates.example", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" }
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
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80"
    ],
    agent: { name: "Kabir Malhotra", role: "Property Advisor", phone: "+91 98100 52641", email: "kabir@halcyonestates.example", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" }
  }
];

function formatPrice(n) {
  if (n >= 10000000) return "₹" + (n / 10000000).toFixed(2) + " Cr";
  if (n >= 100000) return "₹" + (n / 100000).toFixed(2) + " Lakh";
  return "₹" + n.toLocaleString("en-IN");
}
