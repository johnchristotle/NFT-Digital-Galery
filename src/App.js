
import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import SearchIcon from "./assets/search.svg";
import "./App.css";
import { nfts } from "./nfts";


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  

  useEffect(() => {
    searchNfts(searchTerm);
  }, [searchTerm]);

  const searchNfts = (title) => {
    let data = nfts
    let searchResult = data.filter((item) => item == title) 
    return searchResult;
  };

  return (
    <div className="app">
      <h1>LaChristotle NFT Galery</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for NFTs"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchNfts(searchTerm)}
        />
      </div>

      {nfts?.length > 0 ? (
        <div className="container">
          {nfts.map((nft) => (
            <MovieCard nft={nft} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No NFT found</h2>
          <p>Please type in the search box to see an NFT.</p>
        </div>
      )}

    </div>
  );
};

export default App;