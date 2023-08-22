import './style.css';
import avatar from './img/avatar.png';
import image from './img/image.jpg';
import eth from './img/ethereum.png';

function App () {
    return (
        <div className='card' style={{width: '28rem', padding: '20px'}} >
            <img src={image} className='card-img-top' alt='NFT'/>
            <div className='card-body'>
                <h5 className='card-title'><b>Equilibrium #3429</b></h5>
                <p className="card-text">Our Equilibrium collection promotes balance and calm</p>
                <div className='list-pill'>
                    <div className='LHS'>
                        <img src={eth} alt='eth' />
                    <span className='tab-text'><b>0.041ETH</b></span>
                </div>
                <div className='RHS'>
                    <span>3 days left</span>
                </div>
        </div>
            </div>
            <div className="card-footer">
                <img src={avatar} alt="PFP" style={{width: '50px', border: '1px solid white', borderRadius: '50%' }}/>
              <small className="text-muted"><span className='muted-span'>Creation of</span> Jules Wyvern</small>
            </div>
        </div>
    )
}

export default App; 