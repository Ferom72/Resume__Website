import React, { useState } from "react";
import Navbar from "./newComponents/navbar/Navbar";
import SelectedInfo from "./newComponents/selectedinfo/SelectedInfo";
import "./NewLandingPage.css";

function NewLandingPage() {
  const projects = [
    {
      name: "About Me",
      info: `As a Computer Science graduate from the University of Central
      Florida, I, Felipe Romero, have honed my expertise in several
      high-demand areas of technology. My proficiency extends across a
      variety of programming languages, including Python, Java,
      JavaScript, TypeScript, and C#. I'm also adept in utilizing
      contemporary frameworks and libraries like React, Bootstrap,
      Ruby on Rails, Next.js, Node.js, SQL, MongoDB, and .NET. This
      diverse skill set enables me to contribute significantly to
      innovative and challenging projects in the tech industry`,
      redirects: [],
    },
    {
      name: "MyFlixer",
      info: `MyTickets is a modern web application designed to provide users
      with a hassle-free experience for purchasing event tickets.
      Leveraging the power of React, JavaScript, Node.js, and MongoDB,
      this platform not only simplifies the ticket buying process but
      also ensures security and user-friendliness at every step.`,
      viewsite: false,
      redirects: [
        {
          name: "Git",
          url: "https://github.com/Ferom72/MovieApp",
        },
      ],
    },
    {
      name: "Chat Bot",
      info: `"ChatBot" is an innovative AI chat application that allows users
      to select from six speech styles: Motivational, Formal, Casual,
      Humorous, Academic, and Poetic. Developed with TypeScript and
      the ChatGPT API, it features a specialized database to identify
      and swap keywords to match the chosen speech type. The app
      enhances user experience through server-side rendering, ensuring
      smooth performance without lag, while dynamically altering
      response styles based on the selected speech type.`,
      viewsite: false,
      redirects: [
        {
          name: "Git",
          url: "https://github.com/Ferom72/Ai_ChatBot",
        },
      ],
    },
    {
      name: "Drone Swarm",
      info: `Developed a Python-based collision algorithm for drone navigation, leveraging depth 
      cameras and Lidar sensors to enhance aerial operations. Additionally, I played a pivotal role in 
      establishing an environment within the Unreal Engine, where I designed and implemented four non-player 
      characters (NPCs) capable of autonomous walking and running. Furthermore, I co-developed a specialized 
      training model aimed at differentiating between human and non-human entities, which proved instrumental 
      in our project's success.`,
      viewsite: false,
      redirects: [
        {
          name: "Git",
          url: "https://github.com/ArmandoBarb/Drone-Search-and-Rescue-SD",
        },
      ],
    },
  ];
  const [darkmode, setDarkMode] = useState(false);
  const [selected, setSelected] = useState(projects[0]);

  function updateSelected(newState) {
    if (selected !== newState) {
      setSelected((prev) => (prev = newState));
    }
  }

  return (
    <div className="whole__page">
      <div className="landingpage__outercontainer">
        <div className="left__top"></div>
        <div className="left__down"></div>
        <div className="right__top"></div>
        <div className="right__down"></div>
        {/* code below is for bottom */}
        <div className="leftBottom__up"></div>
        <div className="leftBottom__right"></div>
        <div className="right__up"></div>
        <div className="right__left"></div>
        {/* ------------------------------------- */}
        <div className="landingpage__innercontainer">
          <div className="navbar__container">
            <Navbar />
          </div>
          <div className="info__outercontainer">
            <div className="test__container">
              <div className="selected__Container">
                <SelectedInfo selected={selected} />
              </div>
              <div className="projectlist__container">
                <div className="left__top__project"></div>
                <div className="left__down__project"></div>
                <div>
                  <div className="subheader__container projectsubheader">
                    <h4 className="subheader">Projects</h4>
                  </div>
                  <div className="list__container">
                    <ul className="ul__container">
                      {projects.map((project) => {
                        return (
                          <li
                            onClick={() => updateSelected(project)}
                            key={project.name}
                            name={project.name}
                            className="project"
                          >
                            {project.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLandingPage;
