import { useEffect, useRef } from 'react';
import ReactImg from '../assets/Images/React.png'

export const ReactCertificate = ({closeModal}) => {
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
        <img src={ReactImg} alt="React Img"/>
        </div>

    </div>
}