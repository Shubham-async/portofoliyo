import React from "react";

const About: React.FC = () => {
    return (
        <section id="about" className="py-16 px-4 bg-white dark:bg-gray-950">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    About Me
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
  I’m a dedicated <span className="font-medium text-indigo-600">Full Stack MERN Developer</span> with a strong passion for building modern, responsive, and scalable web applications. With solid experience in <span className="font-medium">MongoDB, Express.js, React.js,</span> and <span className="font-medium">Node.js</span>, I specialize in creating full-featured applications from concept to deployment.
</p>

<p className="text-lg text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
  My development style focuses on clean architecture, reusable components, and optimized performance. I’m comfortable working on both the client-side and server-side, and I enjoy solving complex problems through code. Whether it’s developing RESTful APIs, integrating third-party services, or building intuitive user interfaces, I bring a strong understanding of both front-end and back-end technologies.
</p>

<p className="text-lg text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
  I’m constantly exploring new tools and best practices to stay ahead in this fast-evolving tech landscape. I value clean code, collaborative te
</p>

            </div>
        </section>
    );
};

export default About;
