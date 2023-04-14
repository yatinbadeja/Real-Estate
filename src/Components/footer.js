import './footer.css'
import Logo from './Icons/Logo.svg'
import Facebook from './Icons/facebook.png'
import Instagram from './Icons/instagram.png'
import Twitter from './Icons/twitter.png'
function Footer(){
    return(
        <>
        <div className='Footer-Content'>
            <div className='Footer-Content-left'>
                <div>
                    <img src={Logo} alt='none'></img>
                </div>
                <div className='Footer-font-awesome'>
                    <div>
                       <img src={Facebook} alt='facebook'></img>
                    </div>
                   <div>
                      <img src={Instagram} alt='instagram'></img>
                   </div>
                   <div>
                      <img src={Twitter} alt='twitter'></img>
                    </div> 
                </div>
                <div className='Footer-content'>
                    <p>
                    2022 Award winning Real estate and <br></br> Lorem ipsum dolor sit amet
                    </p>
                </div>
            </div>
            <div className='Footer-Content-right'>
                
                <div className='Footer-Location'>
                     
                      <ul>
                      <h3>Location</h3>
                        <li>America</li>
                        <li>Asia</li>
                        <li>Europe</li>
                        <li>Africa</li>
                       </ul>
                </div>

                <div className='Footer-Contact'>
                   
                    <ul>
                    <h3>Contact</h3>
                        <li>About Me</li>
                        <li>Teams</li>
                        <li>Profile</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div className='Footer-Legals'>
                   
                    <ul>
                    <h3>Legals</h3>
                        <li>Privacy</li>
                        <li>Disclaimer</li>
                        <li>Terms</li>
                        <li>Company</li>
                    </ul>
                </div>

            </div>
        </div>
        </>
    );
}
export default Footer;