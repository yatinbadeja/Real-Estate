import './Subscribe.css'
import Mail from './Icons/mail.png'
function Subscribe(){
  return(
     <>
         <div className='Subscribe'>
            <h1 className='SubscribeHeading' style={{textAlign:'center'}}>
            Subscribe to Our Newsletter
            For Weekly Article Update.
            </h1>
            <p className='Paragraph' style={{textAlign:'center'}}>We have real estate-related blog so we can share our thoughts and rutinity in our <br/> blog that updated weekly. We will not spam you, we promise.</p>

            <div className='Input-Box'>
                <div className='Input-left'>
                    <div className='Input-left-1'>
                        <img src={Mail} alt="forget it"></img>
                    </div>
                    <div className='Input-left-2'>
                        <input type='text' placeholder='Enter your mail address'></input>
                    </div>
                </div>
                <div className='Input-right'>
                    <button className='ButtonSubscribe'>Subscribe</button>
                </div>
            </div>
         </div>
     </>
  )
}
export default Subscribe;