import React from "react";
import TitleBar from "./components/TitleBar";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-lime-500 flex flex-col items-center justify-center text-gray-800">
      <TitleBar />
      <div className="mt-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Mindful arcade</h1>
        <p className="text-lg">Try our games!</p>
        <Card
          title={"Game One"}
          description={"loren ipsim"}
          myurl={"https://abhinav-chdhary.github.io/my-portfolio/"}
        />
      </div>
    </div>
  );
}
