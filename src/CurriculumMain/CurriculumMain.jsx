import './CurriculumMain.css'

export const CurriculumMain = ({ curriculumVitaeData }) => {
    if(!curriculumVitaeData) return;

    let { skills, academic, certificate, experience, interest } = curriculumVitaeData;

    return (
        <>
            <section className="firstSection">
                <div className="skills">    
                    <h3 className="title">Expertise</h3>
                    <ul className="skillsList description">
                        {
                            (() => {
                                return skills.map(skill => {
                                    return (
                                        <li key={skill.name}>{skill.name}</li>
                                    )
                                })
                            })()
                        }
                    </ul>
                </div>
                <div className="certification">
                    <h3 className="title">certification</h3>
                    <>
                        {
                            (() => {
                                return certificate.map((cert, i) => {
                                    return (
                                        <div className="certificationItem" key={'certificate'+i}>
                                            <p className="itemPreTitle">
                                                {cert.date}
                                            </p>
                                            <h4 className="itemTitle">{cert.name}</h4>
                                            <p className="description">{cert.description}</p>
                                            <p className="itemSubtitle">{cert.institution}</p>
                                        </div>
                                    )
                                })
                            })()
                        }
                    </>
                </div>
            </section>

            <section className='secondSection'>
                <div className="experience">
                    <h3 className="title">Experience</h3>
                    <>
                        {
                            (() => {
                                return experience.map((exp, i) => {
                                    return (
                                        <div className="experienceItem" key={'experience'+i}>
                                            <p className="itemPreTitle">
                                                {`${exp.startDate}-${exp.endDate}`}
                                            </p>
                                            <h4 className="itemTitle">{exp.company}</h4>
                                            <p className="description">{exp.jobDescription}</p>
                                            <p className="itemSubtitle">{exp.jobTitle}</p>
                                        </div>
                                    )
                                })
                            })()
                        }
                    </>
                </div>
                <div className="education">
                    <h3 className="title">Education</h3>
                    <>
                        {
                            (() => {
                                return academic.map((acad, i) => {
                                    return (
                                        <div className="educationItem" key={'academic'+i}>
                                            <p className="itemPreTitle">
                                                {`${acad.startDate}-${acad.endDate}`}
                                            </p>
                                            <h4 className="itemTitle">{acad.degree}</h4>
                                            <p className="description">{acad.description}</p>
                                            <p className="itemSubtitle">{acad.institution}</p>
                                        </div>
                                    )
                                })
                            })()
                        }
                    </>
                </div>

                <div className="interest">
                    <h3 className="title">Interest</h3>
                    <div className="interestItems">
                        <>
                            {
                                (() => {
                                    return interest.map((inter, i) => {
                                        return (
                                            <div className="interestItem" key={'interest'+i}>
                                            <div className="interestItem">
                                                <span>{inter}</span>
                                            </div>
                                            </div>
                                        )
                                    })
                                })()
                            }
                        </>
                    </div>
                </div>
            </section>
            <hr />
            <section className='thirdSection'>
                <div className="contact">
                    <h3 className="title">Contact</h3>
                    <div className="contactInfo">
                        <p className="description">
                            { curriculumVitaeData.address }
                        </p>
                        <p className="description">
                            { curriculumVitaeData.phone }
                        </p>
                        <p className="description">
                            { curriculumVitaeData.email }
                        </p>
                    </div>
                </div>
                <div className="social">
                    <h3 className="title">Socials</h3>
                    <div className="socialItems">
                        <a href="#" target="_b" className="socialItem">
                            <i data-feather="github"></i>
                            <span>github</span>
                        </a>
                        <a href="#" target="_blank" className="socialItem">
                            <i data-feather="twitter"></i>
                            <span>twitter</span>
                        </a>
                        <a href="#" target="_blank" className="socialItem">
                            <i data-feather="linkedin"></i>
                            <span>linkedin</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
