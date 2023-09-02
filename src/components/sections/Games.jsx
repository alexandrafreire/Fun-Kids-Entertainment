import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Games as GamesModel } from "./../../models";
import "./Games.css";

function GamesComponent() {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(10); // Set the number of items you want to display per page

  useEffect(() => {
    const fetchGames = async () => {
      const gameData = await DataStore.query(GamesModel);
      setGames(gameData);
    };

    fetchGames();
  }, []);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="flexContainer">
        {currentGames.map((game, index) => (
          <div className="flexItem" key={index}>
            <div className="gameCard">
              <img
                src={game.gameImage}
                alt={`${game.gameImage} Thumbnail`}
                className="games"
              />
              <div className="gameInfo">
                <h2 className="gameTitle">{game.gameName}</h2>
                <p className="gameDescription">{game.gameDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(games.length / gamesPerPage) },
          (_, i) => i + 1
        ).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
}

export default GamesComponent;
