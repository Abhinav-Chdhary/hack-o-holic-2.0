import React from "react";
import TitleBar from "./components/TitleBar";
import Card from "./components/Card";

import "tailwindcss/tailwind.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-lime-500 flex flex-col items-center justify-center text-gray-800">
      <TitleBar />
      <div className="mt-8 text-center px-4 lg:px-0">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Welcome to Mindful Arcade
        </h1>
        <p className="text-lg lg:text-xl mb-8">Try our games!</p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <Card
            title={"Story.io"}
            description={"Cause and effect-based collection of story games"}
            myurl={"https://abhinav-chdhary.github.io/story-io/"}
          />
          <Card
            title={"Animal Guesser"}
            description={"Pictorial game to sharpen knowledge of Animal Names"}
            myurl={"https://rahulkarki226.github.io/Animal_Guessing_game/"}
          />
          <Card
            title={"Fruit Guesser"}
            description={"Pictorial game to sharpen knowledge of Fruit Names"}
            myurl={"https://rahulkarki226.github.io/Fruit_Guessing/"}
          />
          <Card
            title={"Word Completion"}
            description={"Guess the letters, in this interactive puzzle game"}
            myurl={"https://kirsaliaditya.github.io/reveal/"}
          />
        </div>
      </div>
    </div>
  );
}
