import './LogoBar.css'
import Bar from './Components/Icons/logoName.svg'

function LogoBar(){
     return(
        <>
            <div className='Logobar'>
                <img src={Bar} alt='none'></img>
                <img src={Bar} alt='none'></img>
                <img src={Bar} alt='none'></img>
                <img src={Bar} alt='none'></img>
                <img src={Bar} alt='none'></img>
            </div>

        </>
     )
}
export default LogoBar