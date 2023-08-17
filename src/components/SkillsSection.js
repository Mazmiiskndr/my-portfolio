import { useFetchSkills } from "@hooks/useFetchSkills";

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
                skillsData.map(
                  (skill, index) => (
                    <>
                      {index % 2 === 0 && (
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
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
                    </>
                  )
                  // <>
                  //   <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  //     <div className="skills-items">
                  //       <div
                  //         className="skills-item scrolla-element-anim-1 scroll-animate"
                  //         data-animate="active"
                  //       >
                  //         <h6 className="name">
                  //           <span> PHP </span>
                  //         </h6>
                  //         <div className="text">
                  //           <div>
                  //             <p>
                  //               Utilizing PHP in various projects, I've
                  //               developed complex web applications and
                  //               integrated with different databases, including
                  //               utilizing frameworks like Laravel and etc.
                  //             </p>
                  //           </div>
                  //         </div>
                  //         <div className="dots">
                  //           <div className="dot" style={{ width: "90%" }}>
                  //             <span />
                  //           </div>
                  //         </div>
                  //         <div className="value">
                  //           <span className="num">
                  //             90 <span>%</span>
                  //           </span>
                  //         </div>
                  //       </div>
                  //       <div
                  //         className="skills-item scrolla-element-anim-1 scroll-animate"
                  //         data-animate="active"
                  //       >
                  //         <h6 className="name">
                  //           <span> Laravel </span>
                  //         </h6>
                  //         <div className="text">
                  //           <div>
                  //             <p>
                  //               Specializing in Laravel, I've used it in 90% of
                  //               my e-commerce and web projects, providing
                  //               robust, scalable solutions that ensure
                  //               efficiency and adaptability to various business
                  //               needs.
                  //             </p>
                  //           </div>
                  //         </div>
                  //         <div className="dots">
                  //           <div className="dot" style={{ width: "90%" }}>
                  //             <span />
                  //           </div>
                  //         </div>
                  //         <div className="value">
                  //           <span className="num">
                  //             90 <span>%</span>
                  //           </span>
                  //         </div>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </>
                )
              ) : (
                <div>No Skills Data Available</div>
              )}

              {/* <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> JavaScript </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          With 75% proficiency, I've leveraged JavaScript to
                          create interactive and dynamic user experiences across
                          multiple projects, including React, InertiaJS and
                          VueJS.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "75%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        75 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Docker </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          With 70% proficiency in Docker, I've effectively
                          created, deployed, and run applications using
                          containers, ensuring consistent environments and
                          enhancing collaboration.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "70%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        70 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Tailwind CSS </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          With 80% proficiency in Tailwind CSS, I've created
                          responsive and modern designs for various websites,
                          making them both visually appealing and user-friendly.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "80%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        80 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Figma </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          I have achieved 75% proficiency in Figma, using it to
                          create user-friendly design interfaces and prototypes,
                          supporting both individual and collaborative design
                          projects.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "75%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        75 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
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
