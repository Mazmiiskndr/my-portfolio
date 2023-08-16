import { useState, useEffect } from "react";
import { useFetchResume } from "@hooks/useFetchResume";

export default function Resume() {
  const [educationData, educationLoading] = useFetchResume("education");
  const [experienceData, experienceLoading] = useFetchResume("experience");

  const [educationToggle, setEducationToggle] = useState(null);
  const [experienceToggle, setExperienceToggle] = useState(null);

  useEffect(() => {
    // Set educationToggle to the UUID of the first education item
    if (educationData.length > 0) {
      setEducationToggle(educationData[0].id);
    }
  }, [educationData]);

  useEffect(() => {
    // Set experienceToggle to the UUID of the first experience item
    if (experienceData.length > 0) {
      setExperienceToggle(experienceData[0].id);
    }
  }, [experienceData]);

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
          {educationLoading || experienceLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <h5
                  className="history-title scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span> Education </span>
                </h5>
                <div className="history-items">
                  {educationData.length > 0 ? (
                    educationData.map((education, i) => (
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
                              educationToggle == education.id
                                ? null
                                : education.id
                            )
                          }
                        >
                          <span> {education.subtitle} </span>
                        </h6>
                        <div className="history-content">
                          <div className="subname">
                            <span> {education.title} </span>
                          </div>
                          <div className="date lui-subtitle">
                            <span>
                              {" "}
                              {education.start_date} - {education.end_date}{" "}
                            </span>
                          </div>
                          <div className="text">
                            <div>
                              <p>{education.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="history-item">
                      No Education Data Available
                    </div>
                  )}
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
                          <span> {experience.subtitle} </span>
                        </div>
                        <div className="date lui-subtitle">
                          <span>
                            {" "}
                            {experience.start_date} -{" "}
                            {experience.end_date ? (
                              experience.end_date
                            ) : (
                              <b>Present</b>
                            )}
                          </span>
                        </div>
                        <div className="text">
                          <div>
                            <p>{experience.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
}
