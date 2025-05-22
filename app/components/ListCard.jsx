import React from 'react';
import Card from './Card';
const wines = [
  {
    image: "https://www.thecocktaildb.com/images/media/drink/qwxuwy1472667570.jpg",
    name: "Bremivin",
    origin: "Iceland",
    price: "₹2,499",
    tags: ["Herbal", "Caraway"],
    premium: false
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/4vobt21643844913.jpg",
    name: "Cachaça Premium",
    origin: "Brazil",
    price: "₹1,799",
    tags: ["Sugarcane", "Aged"],
    premium: true
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/678xt11582481163.jpg",
    name: "Feni",
    origin: "Goa, India",
    price: "₹899",
    tags: ["Cashew", "Traditional"],
    premium: false
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/8xnyke1504352207.jpg",
    name: "Grappa",
    origin: "Italy",
    price: "₹3,999",
    tags: ["Pomace", "Strong"],
    premium: true
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/tppn6i1589574695.jpg",
    name: "Rakija",
    origin: "Balkans",
    price: "₹2,199",
    tags: ["Fruit", "Homemade"],
    premium: false
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
    name: "Cranoa Premium",
    origin: "Caribbean",
    price: "₹4,499",
    tags: ["Aged", "Spiced"],
    premium: true
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/8cl9sm1582581761.jpg",
    name: "Schenaps",
    origin: "Denmark",
    price: "₹5,999",
    tags: ["Akvavit", "Herbal"],
    premium: true
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/uyquuu1439906954.jpg",
    name: "Tequila",
    origin: "Mexico",
    price: "₹3,299",
    tags: ["Blue Agave", "Silver"],
    premium: false
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/qvprvp1483388104.jpg",
    name: "Vodka",
    origin: "Russia",
    price: "₹1,999",
    tags: ["Pure", "Filtered"],
    premium: true
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/qwxuwy1472667570.jpg",
    name: "Bremivin Gold",
    origin: "Iceland",
    price: "₹3,999",
    tags: ["Premium", "Herbal"],
    premium: true
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/4vobt21643844913.jpg",
    name: "Cachaça Reserva",
    origin: "Brazil",
    price: "₹2,999",
    tags: ["Aged", "Oak"],
    premium: true
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/678xt11582481163.jpg",
    name: "Feni Special",
    origin: "Goa, India",
    price: "₹1,499",
    tags: ["Cashew", "Aged"],
    premium: true
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/vqwstv1472811884.jpg",
    name: "Gin Premium",
    origin: "England",
    price: "₹3,899",
    tags: ["Botanical", "Juniper"],
    premium: true
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg",
    name: "Mezcal",
    origin: "Oaxaca, Mexico",
    price: "₹5,499",
    tags: ["Smoky", "Artisanal"],
    premium: true
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    name: "Armagnac",
    origin: "France",
    price: "₹7,999",
    tags: ["Cognac", "Aged"],
    premium: true
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg",
    name: "Pisco",
    origin: "Peru",
    price: "₹3,299",
    tags: ["Grape", "Aromatic"],
    premium: true
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    name: "Calvados",
    origin: "Normandy, France",
    price: "₹6,499",
    tags: ["Apple", "Brandy"],
    premium: true
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/uyrvut1479473214.jpg",
    name: "Sake",
    origin: "Japan",
    price: "₹4,899",
    tags: ["Rice", "Elegant"],
    premium: true
  },
  {
    image: "https://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg",
    name: "Arak",
    origin: "Lebanon",
    price: "₹2,999",
    tags: ["Anise", "Traditional"],
    premium: true
  }
];
const ListCard = () => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
      
      <div className='w-full overflow-x-auto pb-8 [scrollbar-width:none] [-webkit-scrollbar:none]'>
        <div className='flex gap-8 w-max px-4'>
          {wines.map((wine, index) => (
            <Card 
              key={index}
              image={wine.image.startsWith('http') ? wine.image : `/${wine.image}`}
              name={wine.name}
              origin={wine.origin}
              price={wine.price}
              tags={wine.tags}
              premium={wine.premium}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListCard;