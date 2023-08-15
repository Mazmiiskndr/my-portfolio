import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Backend Programming",
    academy: "CoderHouse Course",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startYear: "2014",
    endYear: "2016",
  },
  {
    id: 2,
    title: "Faculty of Design",
    academy: "Lviv National Academy of Arts",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startYear: "2012",
    endYear: "2014",
  },
  {
    id: 3,
    title: "High School",
    academy: "IT Future",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startYear: "2010",
    endYear: "2012",
  },
];

const experienceData = [
  {
    id: 1,
    title: "UI Head & Manager",
    company: "Soft Tech Inc.",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startYear: "2020",
    endYear: false,
  },
  {
    id: 2,
    title: "UI / UX Specialist",
    company: "Kana Design Studio",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startYear: "2018",
    endYear: "2020",
  },
  {
    id: 3,
    title: "Plugins Developer",
    company: "Fiverr.com",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startYear: "2016",
    endYear: "2018",
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
