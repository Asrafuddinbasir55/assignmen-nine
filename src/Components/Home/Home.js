    import React from 'react';
import useReviews from '../../Hooks/useReviews';
import SingleReview from '../Reviews/SingleReview';
    //  import SingleReview from '../../SingleReview/SingleReview';
     import  './Home.css';

    const Home = () => {
      const [review ] = useReviews()
      const newReview = review.slice(0, 3) 
     
       
        return (
     <>
           <div className='img-content'>

             <div>
                <h2 className='text-bold'>Your Best Camara</h2>
                <h2>welcome to my webpage</h2>
                <p>Product design is the process designers use to blend user needs with business goals to help brands make consistently successful products. Product designers work to optimize the user experience in the solutions they make for their users—and help their brands by making products sustainable for longer-term business needs. </p>

                <button className='bg-green-300 p-2 rounded text-right mt-8'>Live Demo</button>
                
            </div>

            <div>
           <h1>This is Camara</h1>
            <img src="https://i.ibb.co/F3WVtY0/camara.jpg"  alt="" />
          </div>
             

           </div>          
          
         <div>
          
             <div className='grid grid-cols-3 mt-10'>
            {
              newReview?.map(rev => <SingleReview rev = {rev}
              key={rev.id}></SingleReview>)   
              }
 
          </div>
          <button className='bg-green-300 p-2 rounded text-right font-medium'>See All btn</button>

         </div> 
           
           </>
        );
    };
    
    export default Home;