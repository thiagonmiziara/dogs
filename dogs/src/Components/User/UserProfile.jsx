import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import Head from "../Helpers/Head";

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container mainSection">
      <Head
        title={user}
        description="Perfil do usuário"
      />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
