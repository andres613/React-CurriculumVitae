import './CurriculumHeader.css';

export const CurriculumHeader = ({ curriculumVitaeData }) => {
    let { avatar, firstName, lastName, profession, profile } = curriculumVitaeData;

    let fileName = `${firstName}_${lastName}.pdf`;

    return (
        <>
            <div className="profile">
                <div className="profileContainer">
                    <div className="profileImg">
                        <img
                            src={ avatar }
                            alt={`${firstName} ${lastName}`}
                        />
                    </div>
                    <div>
                        <h1 className="profileName">
                            <span className="profileFirstName">
                                { firstName }
                            </span>
                            <span className="profileLastName">
                                { lastName }
                            </span>
                        </h1>
                        <p className="profileTitle">
                            { profession }
                        </p>
                        <p className="profileDescription description">
                            { profile }
                        </p>
                        <a className="downloadBtn"
                            href="./cv.pdf"
                            download={ fileName  }
                        >Descargar HHVV</a>
                    </div>
                </div>
            </div>
        </>
    );
}
