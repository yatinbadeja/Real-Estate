import './Header.css'
import BackGroundImage from './Components/Photos/mainBackground.png'
import Logo from './Components/Icons/Logo.svg'
import Early from './Components/Early.js'
function Header(){
    return(
        <>
         <div className='Header'>
            <div className='Navigation'>
                <div className='logoImage'>
                    <img src={Logo} alt='notfound'></img>
                </div>
                <div className='List'>
                    <ul className='Header-right'>
                        <li>Location</li>
                        <li>Blogs</li>
                        <li>Testimonial</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>

            <hr style={{color:'white'}}/>

            <div className='Code'>
                <h1 style={{fontSize:'72px',color:'white',paddingTop:'40px'}}>Homes That Makes <br></br> Your Living Life!</h1>
                <p style={{color:'white',fontSize:'18px'}}>Are you looking for amazing Real estate? Don't <br/>worry! we got it for you</p>
                <Early Content="Learn More"/>
            </div>
         </div>
        </>
    )
}
export default Header;