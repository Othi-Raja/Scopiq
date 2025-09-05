import React from "react";
import aboutcCardBg from '../../assets/aboutcCardBg.jpg'
import contactusBG from '../../assets/contactusBGImage.jpg'
import orderbg from '../../assets/aboutpg/orderbg.jpg'

// requirements use Tailwindcss 
const HoverCards = () => {
  const cards = [
    {
      id: 1,
      img: aboutcCardBg,
      text: "This is card 1 description",
    },
    {
      id: 2,
      img: contactusBG,
      text: "This is card 2 description",
    },
    {
      id: 3,
      img: orderbg,
      text: "This is card 3 description",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 mb-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
        >
          {/* Card Image */}
          <img
            src={card.img}
            alt={`Card ${card.id}`}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Hidden Text Reveal */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black bg-opacity-70 text-white flex items-center justify-center p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-center text-sm md:text-base">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HoverCards;
