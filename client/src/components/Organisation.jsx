import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Listed organisation for ",
      className: "text-md"
    },
    {
      text: "Learning & Earning.",
      className: "text-blue-700",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30px]">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

const DailyMixCard = ({ name, category, url, image }) => {
  return (
    <Card className="relative py-4 bg-green-300 shadow shadow-lg shadow-blue-700">
      <CardBody className="overflow-visible py-2">
        <img
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-medium">Name: {name}</h4>
        <p className="text-tiny uppercase font-bold mt-[20px]">Course URL: <a href={url} className="text-blue-500 hover:underline">{url}</a></p>
        <h4 className="font-bold text-tiny mt-2">Category: {category}</h4>
      </CardHeader>
      <button className="absolute bottom-2 right-2 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">
       <a href='/org-info'>Info</a> 
      </button>
    </Card>
  );
};

const Organisation = () => {
  return (
    <div className="min-h-screen bg-blue-400 py-10 px-6">
      <div className="text-black text-xl font-bold text-center mb-8">
        <TypewriterEffectSmoothDemo />
      </div>
      <div className="flex justify-center gap-x-12">
        <DailyMixCard
          name="WebDev Pro"
          category="WebDev"
          url="https://www.webdevpro.com"
          image="https://images.unsplash.com/photo-1505685296765-3a2736de412f"
        />
        <DailyMixCard
          name="Music Academy"
          category="Music"
          url="https://www.musicacademy.com"
          image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
        />
        <DailyMixCard
          name="Blockchain Institute"
          category="Blockchain"
          url="https://www.blockchaininstitute.org"
          image="https://images.unsplash.com/photo-1505685296765-3a2736de412f"
        />
      </div>
    </div>
  );
}

export default Organisation;
