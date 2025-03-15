import React from 'react';

export default function About() {
    return (
        <div className="about-wrapper">
            <div>
                <h1>{'Hi, I\'m Anuj! 👋'}</h1>
                <blockquote>
                    <p>💻 Backend Developer | NodeJs + Go | DevOps</p>
                </blockquote>
                <p className="about-links-container">
                    <a href="https://x.com/_anuj_kr5_">
                        <img
                            src="https://img.shields.io/twitter/follow/_anuj_kr5_?style=social"
                            alt="Twitter: @_anuj_kr5_"
                        />
                    </a>
                    <a href="https://github.com/anujkumar-5">
                        <img
                            src="https://img.shields.io/github/followers/anujkumar-5?label=follow&style=social"
                            alt="GitHub: @anujkumar-5"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/anuj-kumar-a1214a167/">
                        <img
                            alt="Linkedin: @anuj-kumar-a1214a167"
                            src="https://img.shields.io/badge/-Anuj%20Kumar-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/anuj-kumar-a1214a167/"
                        />
                    </a>
                    <a href="mailto:anujkumarniranjan.ak@gmail.com">
                        <img
                            src="https://img.shields.io/badge/Gmail-@anujkumarniranjan.ak-red"
                            alt="Gmail: @anujkumarniranjan.ak"
                        />
                    </a>
                </p>
                <p>
                    My passion lies in solving challenging problems, designing algorithms, and
                    communicating complex ideas to non-technical stakeholders.
                </p>
                <p>
                    I always look to exceed expectations and am effective both working as an
                    individual and as part of a team.
                </p>
                <p>
                    In my spare time, I like to travel 🚶, read books 📚, listen to music 🎧 and
                    watch movies 📺.
                </p>
                <p>
                    I enjoy learning new things and connecting with people across a range of
                    industries. If you ever want to bounce ideas off of me, please feel free to
                    reach out. 😄
                </p>
                <hr className="about-separator" />
                <h2>⚡ Technical Skills ⚡</h2>
                <table className="about-skills-table">
                    <tr>
                        <th>Area</th>
                        <th>Proficiencies</th>
                    </tr>
                    {/* <tr>
                        <td>FrontEnd</td>
                        <td>React, Redux, Angular, RxJs, SASS, Webpack</td>
                    </tr> */}
                    <tr>
                        <td>BackEnd</td>
                        <td>Go, Node.js, Express</td>
                    </tr>
                    <tr>
                        <td>CI/CD</td>
                        <td>CircleCI, GitHub Actions, Azure Pipelines</td>
                    </tr>
                    <tr>
                        <td>DevOps</td>
                        <td>Docker, AWS, Consul, Terraform</td>
                    </tr>
                    {/* <tr>
                        <td>Mobile</td>
                        <td>React Native</td>
                    </tr> */}
                    {/* <tr>
                        <td>Bots</td>
                        <td>Botkit, Rasa</td>
                    </tr>
                    <tr>
                        <td>UI Frameworks</td>
                        <td>Material-UI, Bootstrap</td>
                    </tr> */}
                    <tr>
                        <td>Web technologies</td>
                        <td>HTML5, CSS3, ES7+</td>
                    </tr>
                    <tr>
                        <td>Databases</td>
                        <td>MongoDB (Mongoose), MySQL, PostgreSQL</td>
                    </tr>
                    <tr>
                        <td>Misc</td>
                        <td>Git, Eslint, Prettier, Typescript</td>
                    </tr>
                    <tr>
                        <td>Languages</td>
                        <td>C, Java, Go</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
