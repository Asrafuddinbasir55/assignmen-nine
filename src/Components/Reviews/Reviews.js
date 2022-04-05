    import React from 'react';
import useReviews from '../../Hooks/useReviews';
import SingleReview from './SingleReview';
    
    const Reviews = () => {
       const [review ] = useReviews()
       
       
        return (
          
            <div className='grid grid-cols-3 mt-10'>
              {
                review?.map(rev => <SingleReview rev = {rev}
                key={rev.id}></SingleReview>)   
              }
            </div>
        );
    };
    
    export default Reviews;