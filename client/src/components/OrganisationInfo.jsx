import React, { useState } from 'react';

const OrganisationInfo = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const organisations = [
    {
      id: 1,
      name: 'mETA',
      description: 'Description of Organization A',
      courses: [
        {
          id: 101,
          name: 'Course 1',
          students: ['Alice', 'Bob', 'Charlie'],
        },
        {
          id: 102,
          name: 'Course 2',
          students: ['David', 'Eve'],
        },
      ],
    },
    {
      id: 2,
      name: 'Organization B',
      description: 'Description of Organization B',
      courses: [
        {
          id: 201,
          name: 'Course 3',
          students: ['Frank', 'Grace'],
        },
      ],
    },
    // Add more organizations here
  ];

  // Filter organisations based on search query
  const filteredOrganisations = organisations.filter((org) =>
    org.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Registered Organisations</h2>
      
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by organisation name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 mb-4 border rounded-lg"
      />

      {/* Organisation Table */}
      <table className="min-w-full bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">Organisation Name</th>
            <th className="py-2 px-4 border">Description</th>
            <th className="py-2 px-4 border">Courses</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrganisations.map((org) => (
            <tr key={org.id}>
              <td className="py-2 px-4 border">{org.name}</td>
              <td className="py-2 px-4 border">{org.description}</td>
              <td className="py-2 px-4 border">
                <div className="grid grid-cols-1 gap-4">
                  {org.courses.map((course) => (
                    <div
                      key={course.id}
                      onClick={() => handleCourseClick(course)}
                      className="cursor-pointer p-2 border rounded-lg bg-blue-200 hover:bg-blue-300"
                    >
                      {course.name}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Selected Course Students */}
      {selectedCourse && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-100">
          <h3 className="text-xl font-semibold mb-2">
            Students Enrolled in {selectedCourse.name}
          </h3>
          <ul className="list-disc pl-5">
            {selectedCourse.students.map((student, index) => (
              <li key={index}>{student}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrganisationInfo;
