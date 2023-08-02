import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactLoading from 'react-loading';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
const Affichearticles = ({currentPage,itemsPerPage,setCurrentPage}) => {
const {articles,isLoading,error} = useSelector((state)=>state.storearticles);

const dispatch = useDispatch();
let navigate=useNavigate();

const handleAddToCart = (art) => {{/*import methode dispatch */}
    dispatch(addToCart(art));
  navigate("/cart");
    };
const handlePageChange = (pageNumber) => {
setCurrentPage(pageNumber);
};
/* const handleChange = (event,value) => {
setCurrentPage(value);
}; */
if (isLoading) return <center><ReactLoading type='spokes' color="red"
height={'8%'} width={'8%'} /></center>
if (error) return <p>Impossible d'afficher la liste des articles...</p>
return (
<><React.Fragment>
{articles &&
<div

style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>

{articles.map((art,ind)=>
<Card sx={{ maxWidth: 'auto',margin: 1 }} key={ind}>
<CardMedia
component="img"
alt="image"
height="160"
image={art.imageart}
/>
<CardContent>s
<Typography gutterBottom variant="h6" component="div">
{art.reference}
</Typography>
<Typography variant="body2" color="text.secondary">
Prix : {art.prix} DT
</Typography>


</CardContent>
<CardActions>
{/* <Button disabled={art.qtestock<=1} */}
<Button disabled={art.qtestock<1} onClick={() =>
handleAddToCart(art)}
variant="contained" color="secondary" size="large"
>
{art.qtestock<=1? "OUT OF SOLD": "Add to cart"}
</Button>
</CardActions>
</Card>
)}</div>
}
</React.Fragment>
<center>
<button  onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage ===1}>
Previous
</button>

<button onClick={() => handlePageChange(currentPage + 1)} disabled={articles.length< 14}>
Next
</button>
</center>
{/* <Stack spacing={2}>
<Typography>Page: {currentPage}</Typography>
<Pagination count={11} page={currentPage} onChange={handleChange}/>
</Stack> */}
</>

)
}
export default Affichearticles