import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import "./Home.css";

const categories =[
    {
        to:"detskiy-mir", 
        backgroundColor:"ffce32", 
        img:"https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png", 
        title:"Детский мир"},
    {
        to:"", 
        backgroundColor:"", 
        img:"", 
        title:""},
    {
        to:"", 
        backgroundColor:"", 
        img:"", 
        title:""},

]

function Home() {
    return(
   <Fade>
    <div className="container py-5">
     <h1 className="text-center fs-wold">Главные категории</h1>
     <div className="categories">
         {categories.map(v =>
         <Link to={v.to} className="category">
         <div className="circle" style={{ backgroundColor : v.backgroundColor  }}>
             <img src={v.img} className="" />
          </div>
          <span>{v.title}</span>

     </Link>
            )}
       
     </div>
    </div>
   </Fade>
    );
}

export default Home;