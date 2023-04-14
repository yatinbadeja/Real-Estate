import './Card.css'
import Button from './Button.js'
function Card(props){
   let buttons =[
      {
         content:'Details'
      }
   ]
    return(
       <>
       
        <div className='Card'>
               <img src ={props.Image} alt="property"></img>
          <div className='Details'>
              <div className='price'>
                 <h2>{props.Content}</h2>
                 <h1>{props.Price}</h1>
              </div>
              <div className='content'>
                <Button
                  Content={buttons[0].content}
                ></Button>
               </div>
            </div>
         </div>

  
       </>
    );
}
export default Card;