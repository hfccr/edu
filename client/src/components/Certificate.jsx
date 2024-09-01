import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Your",
      className:"text-md"
    },
    {
      text: "certificate and earnings",
      className: "text-blue-700",
    },
    {
      text: "for completing",
    },
    {
      text: "courses.",
      className: "text-blue-700",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30px]">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

const BlockchainCertificateCard = () => {
  return (
    <Card className="py-4 bg-green-300 shadow shadow-lg shadow-blue-700">
      <CardBody className="overflow-visible py-2">
        <img
          alt="Blockchain Institute"
          className="object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1505685296765-3a2736de412f" // New image for blockchain course
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-medium">Course Name: Blockchain Essentials</h4>
        <p className="text-medium mt-2">Earning: 0.005 ETH</p>
        <p className="text-medium mt-2">Certificate Address: 0xc38fcC4d9C20a85391c39DDA1093EbB315191496</p>
        <button className="text-tiny uppercase font-bold mt-[20px] border border-2 rounded-md px-[4px] py-[1px]
          bg-blue-600 text-white">Mint Certificate</button>
      </CardHeader>
    </Card>
  );
};

const Certificate = () => {
  return (
    <div className="min-h-screen bg-blue-400 py-10 px-6">
      <h1 className="text-black text-xl font-bold text-center mb-8">
        <TypewriterEffectSmoothDemo />
      </h1>
      <div className="flex justify-center">
        <BlockchainCertificateCard />
      </div>
    </div>
  );
}

export default Certificate;
