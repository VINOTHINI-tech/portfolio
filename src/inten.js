import React from 'react';
import './inten.css'; // Ensure CSS is imported
import women from './assets/women.avif'; // Ensure the image path is correct

function Intern() {
    return (
        <div className="intern">
            <h1 className="title">Internship</h1>
            <div className="grid-container">
                {/* Text Content */}
                <div className="text-container">
                    <h2>Front End Developer</h2>
                    <h3>Veranda Race Learning Solution Private Limited</h3>
                    <p>Jun 2023 - Sept 2023</p>
                    <ul>
                        <li>
                            Developed responsive web applications using Angular,
                            ensuring a seamless user experience across devices.
                        </li>
                        <li>
                            Integrated Node.js and RESTful APIs to provide
                            dynamic and scalable backend services for Angular
                            applications.
                        </li>
                        <li>
                            Used Angular features like data binding, form
                            validation, and HTTP client services to connect the
                            front-end with the Node.js backend.
                        </li>
                        <li>
                            Optimized application performance by implementing
                            lazy loading and modular architecture in Angular,
                            reducing load times.
                        </li>
                        <li>
                            Collaborated with cross-functional teams to design
                            and deploy full-stack solutions, ensuring smooth
                            integration between the front-end (Angular) and
                            back-end (Node.js).
                        </li>
                    </ul>
                    <p>
                        <b>Skills:</b> HTML, CSS, JavaScript, Angular
                    </p>
                </div>

                {/* Image Content */}
                <div className="image-container">
                    <img src={women} alt="Working Woman" />
                </div>
            </div>
        </div>
    );
}

export default Intern;
