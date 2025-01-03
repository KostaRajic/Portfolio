/* eslint-disable react/jsx-key */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';


export const StarRating = ({maxStars = 5, value, goBack}) => {
    

    return <>
        {[...Array(maxStars)].map((_, index) => 
                <FontAwesomeIcon icon={faStar} 
                key={index}
                style={{
                    color: index < value ? "#FFD700" : "#000000"
                  }}
                />
                
        )}

    </>
}