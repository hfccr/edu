import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/card";

import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Listed courses you ",
      className: "text-md"
    },
    {
      text: "enrolled .",
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
    <Card className="py-4 bg-green-300 shadow shadow-lg shadow-blue-700">
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
    </Card>
  );
};

const Courses = () => {
  return (
    <div className="min-h-screen bg-blue-400 py-10 px-6">
      <h1 className="text-black text-xl font-bold text-center mb-8">
        <TypewriterEffectSmoothDemo />
      </h1>
      <div className="flex justify-center gap-x-12">
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

export default Courses;
