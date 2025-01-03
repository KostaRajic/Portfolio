import { useEffect, useRef } from 'react';
import diploma from '../assets/Images/Diploma.png'

export const Diploma = ({closeModal}) => {
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

    return <div className="certificateClass">
        <div ref={modalRef}>
        <img src={diploma} alt="Diploma"/>
        </div>

    </div>
}