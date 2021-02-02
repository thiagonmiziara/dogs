import React from "react";
import Feed from "../Components/Feed/Feed";
import Head from "./Helpers/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site Pets, com o feed de fotos."
      />
      <Feed />
    </section>
  );
};

export default Home;
