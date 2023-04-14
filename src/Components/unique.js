import './unique.css'
import Early from './Early.js'
import Background from './Photos/Screenshot 2023-04-14 140225.png'
function Unique(){
    return(
        <>
        <div className='Mark'>
           <div className='Mark-left'>
              <h1 className='Unique'>Unique House for long term</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo rem officia nisi exercitationem porro?</p>
              <Early Content="Early Bird Book" className="Book"/>
           </div>
           <div className='Mark-right'>
              <img src={Background} alt="build" height="455px" width='600px'className='position'></img>
              {/* <img src={Background} alt='back'  height="405px" width='405px' className='pos'></img> */}
           </div>
        </div>
      </>
    )
}
export default Unique;