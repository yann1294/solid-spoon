'use client'
import React, { useState } from 'react';
import Image from 'next/image';

// Define interface for project
interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    name: 'Project 1',
    description: 'Description of Project 1',
    imageUrl: '/palmier.jpg',
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'Description of Project 2',
    imageUrl: '/palmier.jpg',
  },
  {
    id: 3,
    name: 'Project 3',
    description: 'Description of Project 3',
    imageUrl: '/palmier.jpg',
  },
  {
    id: 4,
    name: 'Project 4',
    description: 'Description of Project 4',
    imageUrl: '/palmier.jpg',
  },
  {
    id: 5,
    name: 'Project 5',
    description: 'Description of Project 5',
    imageUrl: '/palmier.jpg',
  },
  // Add more projects as needed
];

const ProjectSection: React.FC = () => {
  // State to store selected project
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Handle dropdown change event
  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const projectId = parseInt(event.target.value);
    const selectedProject = projectsData.find(project => project.id === projectId);
    setSelectedProject(selectedProject || null);
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Dropdown */}
        <div className="mb-8">
          <label htmlFor="projectDropdown" className="block text-lg font-semibold mb-2">
            Projects Realized
          </label>
          <select
            id="projectDropdown"
            name="projectDropdown"
            className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            onChange={handleDropdownChange}
          >
            {projectsData.map(project => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>

        {/* Grid of project boxes */}
        {selectedProject && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Map through project data and render project boxes */}
            {projectsData.map(project => (
              <div key={project.id} className="bg-green-500 p-4 rounded-lg">
                <Image width={100} height={100} src={project.imageUrl} alt={project.name} className="w-full h-32 object-cover mb-4" />
                <p className="text-white font-semibold">{project.name}</p>
                <p className="text-white">{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
