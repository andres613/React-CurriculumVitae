import { httpClient } from "../Vendors/httpClient";
import { useState, useEffect } from "react";
import { CurriculumHeader } from '../CurriculumHeader/CurriculumHeader.jsx'
import { CurriculumMain } from "../CurriculumMain/CurriculumMain";
import './CurriculumVitae.css';

export const CurriculumVitae = () => {
    const [ curriculumVitaeData, setCurriculumVitaeData ] = useState('');

    useEffect(() => {
        httpClient().then(response => {
            setCurriculumVitaeData(response.data);
        });
    }, [])

    return (
        <div className="curriculumContainer">
            <header className="profile">
                <CurriculumHeader curriculumVitaeData={curriculumVitaeData} />
            </header>
            {/* <main className="trajectory"> */}
                <CurriculumMain curriculumVitaeData={curriculumVitaeData} />
            {/* </main> */}
        </div>
    );
}
