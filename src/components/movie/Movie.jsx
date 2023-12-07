import React from "react";
import { useFetch } from "../../utils/FetchData";
import noimage from "../../assets/images/noimage.png";

const Movie = ({ genre }) => {
  const url = `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "321656a428msh72cbecc728eb64dp14568ajsnf28d506e0437",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const { isLoading, apiData } = useFetch(url, options);

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        apiData?.results
          ?.splice(0, 4)
          .map((data, idx) => (
            <img
              key={idx}
              alt="movie-image"
              src={data?.primaryImage?.url ? data?.primaryImage?.url : noimage}
            />
          ))
      )}
    </>
  );
};
export default Movie;
