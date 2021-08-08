
import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const obj = useParams();
    console.log(obj);
    return(
    <p>Category </p>

    )
}

export default Category;