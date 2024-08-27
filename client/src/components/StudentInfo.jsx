import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/card";

const StudentInfo = () => {
  // Assume this is the logged-in student
  const loggedInStudent = {
    id: 1,
    name: 'Alice',
    courses: [
      { id: 101, name: 'Course 1' },
      { id: 102, name: 'Course 2' },
    ],
  };

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
          <h4 className="font-bold text-medium">Name :</h4>
          <p className="text-tiny uppercase font-bold mt-[20px]">Course URL :</p>
          <h4 className="font-bold text-tiny">Category: Music</h4>
        </CardHeader>
      </Card>
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Courses Enrolled by {loggedInStudent.name}</h2>
      <div className="flex gap-6 justify-center">
        <DailyMixCard />
        <DailyMixCard />
        <DailyMixCard />
      </div>
    </div>
  );
};

export default StudentInfo;
