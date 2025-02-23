import React, {useState} from 'react';
import './Rating.css';

const Rating = ({ onRate}) => {
    const [rating,setRating] = useState(0);
    const handleClick = (value) => {
        setRating(value);
        onRate(value);
    };
    return (
       <div className='rating'>
            {[1,2,3,4,5].map((value) => (
                <span
                key={value}
                className={`star ${value <= rating ? 'filled' : ''}`}
                onClick={() => handleClick(value)}
                >
                   ★ 
                </span>
                

    ))};
    </div>
    );
};

export default Rating;
