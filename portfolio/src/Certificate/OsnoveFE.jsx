import { useEffect, useRef } from 'react';
import OsnoveFEIMG from '../assets/Images/OsonveFE.png'

export const OsnoveFE = ({closeModal}) => {
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
        <img src={OsnoveFEIMG} alt="Osnove FE"/>
        </div>

    </div>
}