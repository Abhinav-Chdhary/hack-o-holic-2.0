import React from "react";

export default function Card({ title, description, myurl, image }) {
  return (
    <a href={myurl} target="_blank" rel="noopener noreferrer">
      <div className="bg-white p-4 rounded-lg shadow-md mb-4 max-w-xs mx-auto transition-transform transform hover:scale-105">
        <img
          className="w-full h-40 object-cover mb-4 rounded-md"
          src={image}
          alt="Card"
        />
        <div className="text-xl font-bold mb-2">{title}</div>
        <div className="text-gray-600">{description}</div>
      </div>
    </a>
  );
}
