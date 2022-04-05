     import React from 'react';

     import './SingleReview.css';
     const SingleReview = ({rev}) => {

         const {name, ratings, reviews} = rev;
          
         return (
             <div className='bg-white p-4 rounded-lg'>
                 <h2 className='bg-rose-200 py-2 rounded text-2xl font-bold'>Name: {name}</h2>
                 <p className='bg-rose-200 gap-2'><span>Ratings:{ratings}</span></p> 
                 <p className='bg-rose-200'><span>Reviews:{reviews}</span></p>
             </div> 
         );
     };
     
     export default SingleReview;