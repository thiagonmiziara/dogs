import React from 'react'
import { PHOTOS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch'
import FeedPhotosItem from './FeedPhotosItem'

const FeedPhotos = () => {
  const{data,loading,error,request} = useFetch();

  React.useEffect(()=>{
    async function fetchPhotos(){
      const {url, options} = PHOTOS_GET({page:1, total: 6, user: 0});
      const {response, json} = await request(url,options);
      console.log(json);
    }
    fetchPhotos();
  },[request]);

  return (
    <div>
      <FeedPhotosItem/>
    </div>
  )
}

export default FeedPhotos
