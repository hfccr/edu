import React, { useState } from 'react';

const OrganisationInfo = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const organisation = {
    id: 1,
    name: 'WebDev Pro',
    description: 'A premier organization offering top-notch web development courses.',
    courses: [
      {
        id: 101,
        name: 'Web Development Fundamentals',
        students: [
          { name: 'Alice', walletAddress: '0xA1B2C3D4E5F67890A1B2C3D4E5F67890A1B2C3D4' },
          { name: 'Bob', walletAddress: '0xB2C3D4E5F67890A1B2C3D4E5F67890A1B2C3D4E5' },
          { name: 'Charlie', walletAddress: '0xC3D4E5F67890A1B2C3D4E5F67890A1B2C3D4E5F6' },
        ],
      },
      {
        id: 102,
        name: 'Advanced JavaScript',
        students: [
          { name: 'David', walletAddress: '0xD4E5F67890A1B2C3D4E5F67890A1B2C3D4E5F678' },
          { name: 'Eve', walletAddress: '0xE5F67890A1B2C3D4E5F67890A1B2C3D4E5F67890' },
        ],
      },
    ],
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="min-h-screen bg-blue-400 py-10 px-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">WebDev Pro Organisation</h2>

      {/* Organisation Info */}
      <div className="bg-green-300 p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">{organisation.name}</h3>
        <p className="mb-4 text-black">{organisation.description}</p>

        {/* Course List */}
        <h4 className="text-lg font-semibold mb-2 text-black">Courses Offered:</h4>
        <div className="grid grid-cols-1 gap-4">
          {organisation.courses.map((course) => (
            <div
              key={course.id}
              onClick={() => handleCourseClick(course)}
              className="cursor-pointer p-2 border rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            >
              {course.name}
            </div>
          ))}
        </div>
      </div>

      {/* Selected Course Students */}
      {selectedCourse && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-100">
          <h3 className="text-xl font-semibold mb-2 text-black">
            Students Enrolled in {selectedCourse.name}
          </h3>
          <ul className="list-disc pl-5 text-black">
            {selectedCourse.students.map((student, index) => (
              <li key={index}>
                {student.name} - {student.walletAddress}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrganisationInfo;
