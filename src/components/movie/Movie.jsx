import React from "react";
import { useFetch } from "../../api/FetchData";
import noimage from "../../assets/images/noimage.png";

const Movie = ({ genre }) => {
  const url = `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&limit=4`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "321656a428msh72cbecc728eb64dp14568ajsnf28d506e0437",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const { isLoading, apiData, serverError } = useFetch(url, options);
  serverError && console.log(serverError.message);
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        apiData?.results.map((data, idx) => (
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
