import React, {useState} from "react";
import Overview from './Overview';
import styled from 'styled-components';

const Poster = styled.img`
    width: 100%;
    height: 70%;
`;

function Movie({ title, posterPath, voteAverage, overview }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        console.log('Mouse entered');
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        console.log('Mouse left');
        setIsHovered(false);
    };

    return (
        <div className='poster'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Poster src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={title} />
            <div className="content-text">
                <span className='title'>{title}</span>
                <span className='voteAv'>⭐️{voteAverage}</span>
            </div>
            {isHovered && <Overview overview={overview}/>}
        </div>
    );
}

export default Movie;