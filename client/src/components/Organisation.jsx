import React from 'react'

const organisations = [
  {
    name: 'Org A',
    description: 'Description of Org A. They offer courses in blockchain technology, AI, and more.',
  },
  {
    name: 'Org B',
    description: 'Description of Org B. Specializes in web development, cloud computing, and data science.',
  },
  {
    name: 'Org C',
    description: 'Description of Org C. Focuses on financial technologies, cybersecurity, and big data.',
  },
  // Add more organizations as needed
];

const Organisation = () => {
  return (
    <div className="min-h-screen bg-blue-400 py-10 px-6">
      <h1 className="text-white text-4xl font-bold text-center mb-8">
        Listed Organisations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {organisations.map((org, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-blue-500">
              {org.name}
            </h2>
            <p className="text-gray-700">
              {org.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Organisation
