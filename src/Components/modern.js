import './modern.css'
import Early from './Early.js'
import ScreenShot from './Photos/Screenshot 2023-04-14 140047.png'
function Modern(){
   return(

        < div className='modern'>
            <div className='modern-left'>
                    <img src={ScreenShot} alt="no display" height="405px" width="600px"></img>
            </div>
            
            <div className='modern-right'>
                <h1 className='modernheading'>Modern,Trending,Affordable</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, Dolorem quo rem officia nisi exercitationem porro?
                </p>
                <Early Content="Early Bird Book"/>
            </div>
        </div>  
    
   ) 
}
export default Modern