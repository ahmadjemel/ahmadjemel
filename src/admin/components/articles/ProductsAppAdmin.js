import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import {getArticles} from "../../../components/features/articlesSlice";


import AffichearticlesAdmin from '../../../admin/components/articles/AffichearticleAdmin';
import CreateArticle from '../../../admin/components/articles/CreateArticle';
const ProductsAppAdmin = () => {
const dispatch = useDispatch();
useEffect(() => {
dispatch(getArticles());
},[])
return (
<div>
 <CreateArticle/> 
<AffichearticlesAdmin/>
</div>
)
}
export default ProductsAppAdmin