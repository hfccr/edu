import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/card";

const DailyMixCard = () => {
  return (
    <Card className="py-4 bg-green-300 shadow shadow-lg shadow-blue-700">
      <CardBody className="overflow-visible py-2">
        <img
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <h4 className="font-bold text-large">Name :</h4>
      <p className="text-tiny uppercase font-bold mt-[20px]">course url :</p>
     
      <h4 className="font-bold text-tiny">Category:Music</h4>
      
    </CardHeader>
    </Card>
  );
};

const Organisation = () => {
  return (
    <div className="min-h-screen bg-blue-400 py-10 px-6">
      <h1 className="text-black text-xl font-bold text-center mb-8">
        Listed Organisations
      </h1>
      <div className="flex justify-center gap-x-12">
        <DailyMixCard />
        <DailyMixCard />
        <DailyMixCard />
      </div>
    </div>
  );
}

export default Organisation;
