import React, { useEffect, useState } from 'react';
import './style.scss';
const axios = require('axios').default;
const Restapi = () => {
    const [productData, setproductData] = useState([]);
    const getData = async () => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        setproductData(data);
      };
      useEffect(() => {
        getData();
      }, []);

    console.log(productData);
    return (
        <div className='container api-wrapper'>
            <h2>Here the API DATA</h2>
            <div>{productData.map((data,index)=>{
                return(
                    
                    <div className='row' key={index}>
                        <div className='col-md-2'>{data.id}</div>
                        <div className='col-md-12'>{data.body}</div>
                        <div className='col-md-12'>{data.title}</div>
                    </div>
                
                )
                
            })}</div>
        </div>
    )
}

export default Restapi;