import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

export const Growth = ({goBack}) => {

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
        <h2>Growth</h2>
        <p>I strive to grow as a person and a programmer, delivering consistent, impactful solutions to companies that value teamwork, consistency, maturity and most of all adaptability.  
          </p>
        </div>
    </div>,

    document.getElementById("motinspgrowth")
  );
};
