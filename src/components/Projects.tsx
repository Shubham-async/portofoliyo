import React from 'react';

const projects = [

    {
        title: 'Forever E-commerce',
        description:
            'Built a full-stack e-commerce shopping platform with a modern user interface and seamless shopping experience. Features include JWT-based authentication, product search and filtering, cart and order management, and an admin panel for managing products and orders. Fully responsive for all devices, and powered by React.js, Node.js, Express, MongoDB, and Tailwind CSS.',
        image: 'Forever.png',
        live_link: 'https://e-commerce-web-page.onrender.com/',
        repo_link: 'https://github.com/Shubham-async/E-COMMERCE-Web-Page',
    },
   
];

const Projects: React.FC = () => (
    <section className="py-12 px-4 text-center bg-white dark:bg-gray-950" id="projects">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 w-full">
            {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
                    <img src={project.image} alt={project.title} className="rounded mb-4 w-full h-auto object-cover" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
                    <div className='flex justify-center items-center gap-8 '>
                        <a
                            href={project.live_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            Visit Project
                        </a>
                        <a
                            href={project.repo_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"                        >
                            GitHub Repo
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Projects;