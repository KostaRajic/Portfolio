import { useEffect, useRef } from "react";
import { StarRating } from "./StarRating";

export const GeneralSkills = ({goBack}) => {

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

  const skills = [
    { name: "Problem-Solving", value: 5 },
    { name: "Quality Assurance", value: 4 },
    { name: "User Experience", value: 4 },
    { name: "Communication", value: 5 },
    { name: "Learning Adaptability", value: 4 },
    { name: "Teamwork", value: 4 },
    { name: "Self-Management Skills", value: 4 },
  ];

  return (
<div className="programingLanguagesClass"  >
    <div ref={modalRef}>{skills.map((skill, index) => (
        <span key={index}>
          <strong>{skill.name}:</strong>
          <StarRating value={skill.value} />
        </span>
      ))}</div>
      
    </div>
  );
};
