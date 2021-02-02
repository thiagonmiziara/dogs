import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Feed from "../Feed/Feed";
import Head from "../Helpers/Head";
import NofFound from "../NofFound";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (

    <section className="container">
        <Head
        title="Minha conta"
        description="Conta do usuário"
      />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NofFound />} />
      </Routes>
    </section>
  );
};

export default User;
