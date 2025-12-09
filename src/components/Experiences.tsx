import React from 'react';

const experiencesArray = [
      {
        title: 'Full Stack Developer Intern',
        Location: 'Gorakhpur',
        company: 'National Institute of Electronics & Information Technology,Gorakhpur',
        date: 'Jan 2025 – Mar 2025',
        description: 'Worked on an RMS project using the MERN stack. Debugged and fixed major issues, optimized a scalable API backend improving performance by 20%. Integrated React Hook Form with Zod validation in complex forms, boosting validation efficiency by 30%. Gained strong teamwork skills in a collaborative, fast-paced environment.',
       Website: 'https://e-commerce-web-page.onrender.com/',
        certification: 'https://drive.google.com/file/d/1IPw7KGFo_LyzcyZW2q0v7ixNh2FcHTmu/view?usp=drivesdk'
    },
    {
        title: 'Web Developer Intern',
        company: 'OCTANET Services Pvt Ltd',
        date: 'November ',
        description: 'Completed 1 projects, Developed responsive and user-friendly web applications using HTML, CSS, JavaScript,. Gained experience in version control using Git and GitHub.', 
        Website: 'https://octanet-november.vercel.app/',
        certification: 'https://drive.google.com/file/d/1PktnRqHbMjG4UuwZkikhmjwBg46CQ0mj/view?usp=drivesdk'
    }
  
 

];

const Experiences: React.FC = () => {
    return (
        <section className="py-12 px-4 bg-white dark:bg-gray-950" id="experience">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Experience</h2>
            <div className="relative border-l-4 border-blue-500 pl-6 space-y-10 max-w-3xl mx-auto">
                {experiencesArray.map((exp, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-950"></div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                            <p className="text-sm text-blue-600 font-medium">{exp.company}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.date}</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">{exp.description}</p>
                            {exp.certification && (
                                <a
                                    href={exp.certification}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:bg-blue-700 mt-2 inline-block bg-blue-600 py-2 px-3 rounded-md text-sm"
                                >
                                    View Certification
                                </a>
                            )}
                            {exp.Website && (
                                <a
                                    href={exp.Website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:bg-blue-700 mt-2 inline-block bg-blue-600 py-2 px-6 rounded-md text-sm ml-2"
                                >
                                    View Website
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default Experiences;
