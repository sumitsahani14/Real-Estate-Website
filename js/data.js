/* Halcyon Estates — placeholder listing data.
   Replace with real listings, or wire this up to a CMS/API later. */

const LISTINGS = [
  {
    id: "birchwood-hollow",
    title: "Birchwood Hollow",
    address: "14 Birchwood Lane",
    city: "Willowmere",
    price: 2450000,
    type: "House",
    status: "For Sale",
    beds: 5,
    baths: 4,
    sqft: 4200,
    lot: "0.9 acres",
    year: 2016,
    featured: true,
    description:
      "Set back from the lane behind a stand of mature birch, this five-bedroom residence pairs a restrained brick facade with a light-filled, double-height interior. The kitchen opens onto a covered terrace and a south-facing garden built for slow mornings.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80"
    ],
    agent: { name: "Elena Marsh", role: "Senior Broker", phone: "(555) 014-2288", email: "elena@halcyonestates.example", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" }
  },
  {
    id: "the-cormorant-house",
    title: "The Cormorant House",
    address: "2 Harbor Point Rd",
    city: "Seabrook",
    price: 3875000,
    type: "House",
    status: "For Sale",
    beds: 4,
    baths: 5,
    sqft: 5100,
    lot: "1.4 acres",
    year: 2019,
    featured: true,
    description:
      "A cedar-clad waterfront home built low to the shoreline, with walls of glass that fold open to a stone terrace and private dock. Interiors favor warm oak and honed limestone, kept deliberately spare so the water stays the focus.",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80"
    ],
    agent: { name: "Elena Marsh", role: "Senior Broker", phone: "(555) 014-2288", email: "elena@halcyonestates.example", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" }
  },
  {
    id: "atrium-loft-9",
    title: "Atrium Loft No. 9",
    address: "88 Kettle St, Unit 9",
    city: "Old Mill District",
    price: 1180000,
    type: "Condo",
    status: "For Sale",
    beds: 2,
    baths: 2,
    sqft: 1650,
    lot: "—",
    year: 2021,
    featured: true,
    description:
      "A converted textile mill reimagined as nine private residences around a shared atrium. This corner unit keeps its original steel trusses exposed above a new oak floor, with a kitchen in blackened steel and honed concrete.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80"
    ],
    agent: { name: "Priya Anand", role: "Broker Associate", phone: "(555) 014-9931", email: "priya@halcyonestates.example", photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80" }
  },
  {
    id: "quarry-ridge-farm",
    title: "Quarry Ridge Farmhouse",
    address: "601 Quarry Ridge Rd",
    city: "Standish Valley",
    price: 2190000,
    type: "House",
    status: "For Sale",
    beds: 4,
    baths: 3,
    sqft: 3400,
    lot: "6.2 acres",
    year: 1911,
    featured: false,
    description:
      "A stone farmhouse built in 1911, restored plank by plank and extended with a glass-and-timber wing. The original hearth remains the center of the house; the new wing holds a kitchen built for entertaining and a study that overlooks the ridge.",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=900&q=80"
    ],
    agent: { name: "Priya Anand", role: "Broker Associate", phone: "(555) 014-9931", email: "priya@halcyonestates.example", photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80" }
  },
  {
    id: "linden-court-townhome",
    title: "Linden Court Townhome",
    address: "12 Linden Court",
    city: "Willowmere",
    price: 985000,
    type: "Townhome",
    status: "For Sale",
    beds: 3,
    baths: 3,
    sqft: 2100,
    lot: "—",
    year: 2014,
    featured: false,
    description:
      "One of six townhomes set around a shared courtyard of linden trees. This end unit has a private roof terrace, a kitchen in white oak and marble, and a garden-level studio that works equally well as an office or guest suite.",
    images: [
      "https://images.unsplash.com/photo-1600585153916-d84e0dd39fb2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=900&q=80"
    ],
    agent: { name: "Marcus Boyd", role: "Broker Associate", phone: "(555) 014-5567", email: "marcus@halcyonestates.example", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" }
  },
  {
    id: "the-glasshouse-studio",
    title: "The Glasshouse Studio",
    address: "9 Founders Walk",
    city: "Old Mill District",
    price: 675000,
    type: "Condo",
    status: "For Sale",
    beds: 1,
    baths: 1,
    sqft: 920,
    lot: "—",
    year: 2020,
    featured: false,
    description:
      "A ground-floor studio with a private glass conservatory that doubles the living space in warmer months. Finished in plaster and blackened oak, with a kitchen island in the same honed stone as the entry threshold.",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80"
    ],
    agent: { name: "Marcus Boyd", role: "Broker Associate", phone: "(555) 014-5567", email: "marcus@halcyonestates.example", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" }
  },
  {
    id: "saltmarsh-cottage",
    title: "Saltmarsh Cottage",
    address: "4 Tidewater Ln",
    city: "Seabrook",
    price: 1420000,
    type: "House",
    status: "Pending",
    beds: 3,
    baths: 2,
    sqft: 1980,
    lot: "0.4 acres",
    year: 1948,
    featured: false,
    description:
      "A 1948 shingle-style cottage overlooking the salt marsh, updated with care rather than expanded. Original wide-plank floors throughout, a new kitchen in painted oak, and a screened porch built for the long end of summer.",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80"
    ],
    agent: { name: "Elena Marsh", role: "Senior Broker", phone: "(555) 014-2288", email: "elena@halcyonestates.example", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" }
  },
  {
    id: "hollis-park-manor",
    title: "Hollis Park Manor",
    address: "22 Hollis Park Dr",
    city: "Standish Valley",
    price: 4650000,
    type: "House",
    status: "For Sale",
    beds: 6,
    baths: 7,
    sqft: 7200,
    lot: "2.8 acres",
    year: 2008,
    featured: false,
    description:
      "A brick manor at the end of a private drive, built around a central courtyard and a two-story library. The grounds include a pool house, a regulation tennis court, and a kitchen garden maintained under a standing service agreement.",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80"
    ],
    agent: { name: "Elena Marsh", role: "Senior Broker", phone: "(555) 014-2288", email: "elena@halcyonestates.example", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" }
  }
];

function formatPrice(n) {
  return "$" + n.toLocaleString("en-US");
}
