import { useState } from "react";

function Card({id,image,name,price,info,removeTour}){
         
       const[readmore,setReadmore]=useState(false);

       const descrption = readmore ? info : `${info.substring(0,200)}....`;
          
        
       function readmoreHandler(){
              
               setReadmore(!readmore);

         }


                
    return(
          
             <div className="Card">
               <img src={image} className="image" ></img>
                 
                 <div className="tour-info">
                    <div className="tours-details">
                         
                         <h4 className="tour-price">{price}</h4>
                         <h4 className="tour-name">{name}</h4>

                    </div>
                      <div className="descrption">
                          {descrption}
                         <span className="read-more" onClick={readmoreHandler} >
                          {descrption ? " show less" : "read more"}
                         </span>
                      </div>
                 </div>
                 <button className="btn-red" onClick={()=>removeTour(id)}>
                    Not Interested
                 </button>
                  
             </div>
            
          
    ) 
}

export default Card;