import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Information System",
    academy: "Nusa Mandiri University",
    dec: "Continuing with S1 program to enhance qualifications and capabilities in information technology.",
    startYear: "2022",
    endYear: "Ongoing",
  },
  {
    id: 2,
    title: "Information System",
    academy: "Bina Sarana Informatika University",
    dec: "Completed D3 program, specializing in web development using various programming languages.",
    startYear: "2019",
    endYear: "2022",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Staff Programmer",
    company: "PT. Varnion Technology Semesta",
    dec: "Working with diverse technologies and managing complex systems for efficient and effective solutions.",
    startYear: "February 2023",
    endYear: "September 2023",
  },
  {
    id: 2,
    title: "PHP Programmer",
    company: "PT. FTF Globalindo",
    dec: "Specializing in PHP for various application developments.",
    startYear: "November 2022",
    endYear: "February 2023",
  },
  {
    id: 3,
    title: "PHP Developer",
    company: "Nusantara Beta Studio (NBS)",
    dec: "Internship experience as a PHP Developer.",
    startYear: "October 2022",
    endYear: "November 2022",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Devifo Studio",
    dec: "Developing full-featured applications as a Full Stack Developer.",
    startYear: "May 2020",
    endYear: "April 2021",
  },
  {
    id: 5,
    title: "Photographer & Editor",
    company: "RM Photostudio",
    dec: "Creative role as a photographer and editor.",
    startYear: "2018",
    endYear: "2019",
  },
];


const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Education </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      educationToggle === education.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        educationToggle == education.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {education.startYear} - {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${
                      experience.id == experienceToggle ? "opened" : ""
                    }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
