import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../Hooks/useFetch";

const FeedModal = ({photo}) => {
  const {data,error,loading,request} = useFetch();

  React.useEffect(()=>{
    const{url,options} = PHOTO_GET();

  },[]);

  return <div className={styles.modal}></div>;
};

export default FeedModal;
