import React from 'react';

const MovieCard = ({ nft }) => {
  return (
    <div className="movie" key={nft.movieID}>
      <div>
        <p>{nft.year}</p>
      </div>

      <div>
        <img src={nft.image !== "N/A" ? nft.image : "https://via.placeholder.com/400"} alt={nft.title} />
      </div>

      <div>
        <h3>{nft.title}</h3>
        <span>Artist: {nft.artist}</span>
      </div>
    </div>
  );
}

export default MovieCard;