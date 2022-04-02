     import React from 'react';
     
     import './SingleReview.css';
     const SingleReview = ({rev}) => {
        console.log(rev) 

         const {name, ratings, reviews, id } = rev;
          console.log(name);
         return (
             <div className='bg-white p-4 rounded-lg'>
                 <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold'>Name: {name}</h2>
                 <p><span>Ratings:{ratings}</span></p> 
                 <p><span>Reviews:{reviews}</span></p>
             </div> 
         );
     };
     
     export default SingleReview;