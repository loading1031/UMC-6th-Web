import React, {useState} from "react";
import './App.css'

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
            <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={title} style={{ width: '100%', height: '70%' }} />
            <div className="content-text">
                <span className='title'>{title}</span>
                <span className='voteAv'>{voteAverage}</span>
            </div>
            {isHovered && (
                <div className="movie-overview">
                    <p>{overview}</p>
                </div>
            )}
        </div>
    );
}

export default Movie;