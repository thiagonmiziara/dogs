import React from 'react'
import Head from '../Helpers/Head'
import useFetch from "../../Hooks/useFetch";
const UserStats = () => {

  const {data,error,loading,request} = useFetch();
  return (
    <div>
       <Head
        title="Estatísticas"
        description="Estatísticas do usuário"
      />
      estatisticas
    </div>
  )
}

export default UserStats
