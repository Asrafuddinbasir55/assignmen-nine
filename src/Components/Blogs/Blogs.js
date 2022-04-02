     import React from 'react';
     
     const Blogs = () => {
         return (
             <div>
                 <h2>What is context Api</h2>
                   <h5>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.
                   It might feel redundant to pass down the user and avatarSize props through many levels if in the end only the Avatar component really needs it. It’s also annoying that whenever the Avatar component needs more props from the top, you have to add them at all the intermediate levels too However, sometimes the same data needs to be accessible by many components in the tree, and at different nesting levels. Context lets you “broadcast” such data, and changes to it, to all components below. Common examples where using context might be simpler than the alternatives include managing the current locale, theme, or a data cache
                   </h5>


                <div>
                 <h2> What is semantic Tag</h2>
                  
                  <h5>If you know a little about HTML, you will know that HTML tags are (mostly) used to format content - these tags tell the browser how to display the content on the page. They give no indication as to what type of content they contain or what role that content plays in the page.

                 Semantic HTML5 addresses this shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain. That explicit information helps robots/crawlers like Google and Bing to better understand which content is important, which is a subsidiary, which is for navigation, and so on.

                By adding semantic HTML tags to your pages, you provide additional information that helps Google and Bing understand the roles and relative importance of the different parts of your page.</h5>
                 
                </div>


             </div>

            
         );
     };
     
     export default Blogs;