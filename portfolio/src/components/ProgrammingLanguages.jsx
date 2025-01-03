import { useEffect, useRef } from "react";
import { StarRating } from "./StarRating";

export const ProgramingLanguages = ({closeModal}) => {

    const modalRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);

    return (() => {
        document.removeEventListener('click', handleClickOutside, true);
        })
    }, [closeModal])

    const handleClickOutside = (e) => {
        if( !modalRef?.current?.contains(e.target)) {
            closeModal()
        }
    };


  const skills = [
    { name: "ReactJS", value: 4 },
    { name: "HTML", value: 5 },
    { name: "CSS and SCSS", value: 4 },
    { name: "JavaScript", value: 3 },
    { name: "NodeJS", value: 2 },
    { name: "WordPress", value: 2 },
    { name: "GitHub", value: 2 },
  ];

  return (
<div className="programingLanguagesClass"  >
    <div ref={modalRef}>{skills.map((skill, index) => (
        <span key={index}  >
          <strong>{skill.name}:</strong>
          <StarRating value={skill.value} />
        </span>
      ))}</div>
      
    </div>
  );
};
