import React from 'react'
import Head from '../Helpers/Head'
import useFetch from "../../Hooks/useFetch";
import Loading from "../Helpers/Loading";
import Error from "../Helpers/Error";
import { GET_STATS } from '../../api';

const UserStatsGraphs = React.lazy(()=> import('./UserStatsGraphs'));

const UserStats = () => {

  const {data,error,loading,request} = useFetch();

  React.useEffect(()=>{
    async function getData(){
      const {url, options} = GET_STATS();
      await request(url,options);
    }
    getData();
  },[request]);
  
  if(loading) return <Loading/>;
  if(error)return <Error error={error}/>;
  if(data)
  return (
    <React.Suspense fallback={<Loading/>}>
       <Head
        title="Estatísticas"
        description="Estatísticas do usuário"
      />
      <UserStatsGraphs data={data}/>
    </React.Suspense>
  );
  else return null;
}

export default UserStats
