import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';


export const Motivation = ({goBack}) => {

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

  return createPortal(
    <div className='portalClass'>
        <div ref={modalRef}>
        <h2>Motivation</h2>
        <p>I’m driven by the desire to improve my programming skills, continuously learn, and seek opportunities that align with my passion for problem-solving, adaptability, and collaboration. 
            I aim to find work that embodies these principles, fostering teamwork and knowledge-sharing.</p>

        </div>
    </div>,

    document.getElementById("motinspgrowth")
  );
};

