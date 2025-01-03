import { useEffect, useRef, useState } from "react";
import { ProgramingLanguages } from "./ProgrammingLanguages";
import { GeneralSkills } from "./GeneralSkills";

export const Skills = ({goBack}) => {
    const [ showProgramingLanguages, setShowProgramingLanguages ] = useState(false);
    const [ showGeneralSkills, setShowGeneralSkills ] = useState(false)

    const modalRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);

    return (() => {
        document.removeEventListener('click', handleClickOutside, true);
        })
    }, [goBack])

    const handleClickOutside = (e) => {
        if( !modalRef?.current?.contains(e.target)) {
            goBack()
        }
    };

    return <div>
        <div className='skillsClass'>
        <div ref={modalRef}>
            <p onClick={() => setShowProgramingLanguages(true)}>Programming Languages</p>
            <p onClick={() => setShowGeneralSkills(true)}>General Skills</p>
       </div>
    </div>
    {showProgramingLanguages && <ProgramingLanguages closeModal={() => setShowProgramingLanguages()}/>}
    {showGeneralSkills && <GeneralSkills closeModal={() => setShowGeneralSkills()}/>}
    </div>
}