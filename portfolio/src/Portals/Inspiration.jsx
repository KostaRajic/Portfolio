import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';


export const Inspiration = ({goBack}) => {

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
        <h2>Inspiration</h2>
        <p>My inspiration comes from modern web development, focusing on intuitive design, functionality, and seamless user experiences.            </p>
        </div>
    </div>,

    document.getElementById("motinspgrowth")
  );
};
