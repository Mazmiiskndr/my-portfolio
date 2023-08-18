import { useFetchSkills } from "@hooks/useFetchSkills";
import React from "react";

export default function SkillsSection() {
  const [skillsData, skillsLoading] = useFetchSkills();

  return (
    <section className="lui-section lui-gradient-center" id="skills-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Professional Skills </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Talent</b>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="v-line v-line-left">
        <div className="container">
          {skillsLoading ? (
            <div>Loading skills...</div>
          ) : (
            <div className="row">
              {skillsData && skillsData.length > 0 ? (
                skillsData.map((skill, index) => (
                  <React.Fragment key={`fragment-${skill.id}`}>
                    {index % 2 === 0 && (
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mt-md-3 mt-0">
                        <div className="skills-items">
                          {skillsData
                            .slice(index, index + 2)
                            .map((innerSkill) => (
                              <div
                                className="skills-item scrolla-element-anim-1 scroll-animate"
                                data-animate="active"
                                key={innerSkill.id}
                              >
                                <h6 className="name">
                                  <span>{innerSkill.skill_name}</span>
                                </h6>
                                <div className="text">
                                  <div>
                                    <p>{innerSkill.description}</p>
                                  </div>
                                </div>
                                <div className="dots">
                                  <div
                                    className="dot"
                                    style={{
                                      width: `${innerSkill.proficiency_percentage}%`,
                                    }}
                                  >
                                    <span />
                                  </div>
                                </div>
                                <div className="value">
                                  <span className="num">
                                    {innerSkill.proficiency_percentage}{" "}
                                    <span>%</span>
                                  </span>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <div>No Skills Data Available</div>
              )}
            </div>
          )}
          <div className="lui-bgtitle">
            <span> Skills </span>
          </div>
        </div>
      </div>
    </section>
  );
}
