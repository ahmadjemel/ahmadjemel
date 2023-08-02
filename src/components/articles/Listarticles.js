import React,{useCallback, useEffect, useState}from 'react'
import { useDispatch } from "react-redux";
import {getArticles} from "../features/articlesSlice";
import Affichearticles from './Affichearticles';
const Listarticles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 14;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const dispatch=useDispatch()
  const listproduits= useCallback(()=>{
  const mesParams={
  currentPage:currentPage,
  itemsPerPage:itemsPerPage
  };
  dispatch(getArticles(mesParams))
  },[currentPage])
  useEffect(() => {
  listproduits()
  }, [listproduits])
  return (
    <div>
      <Affichearticles currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage}/>
    </div>
  )
}

export default Listarticles
