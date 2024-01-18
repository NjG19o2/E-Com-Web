import React from 'react'
import Items from './Items'
import Electronics from '../images/Electronics.jpg'
import GamingAccessories from '../images/GamingAccessories.jpg'
import Watches from '../images/Watches.jpeg'
import VideoGames from '../images/VideoGames.avif'
import Grocery from '../images/Grocery.jpg'
import Fashion from '../images/Fashion.webp'
import HomeKitchen from '../images/HomeKitchen.avif'
import PCs from '../images/PCs.avif'


const Itemcard = () => {
  return (
    
    <div className='container my-4'>
        <div className="row">
            <div className="col">
            <Items title="Electronics" image={Electronics} link="/electronicslink" />
            </div>
            <div className="col">
            <Items title="Gaming Accessories" image={GamingAccessories} link="/gamingAccessorieslink"/>
            </div>
            <div className="col">
            <Items title="Watches" image={Watches} link="/watcheslink"/>
            </div>
            <div className="col">
            <Items title="Video Games" image={VideoGames} link="/videoGameslink"/>
            </div>
        </div>
        <div className="row my-4">
            <div className="col">
            <Items title="Grocery" image={Grocery} link="/grocerylink"/>
            </div>
            <div className="col">
            <Items title="Fashion" image={Fashion} link="/fashionlink"/>
            </div>
            <div className="col">
            <Items title="Home & Kitchen" image={HomeKitchen} link="/homeKitchenlink"/>
            </div>
            <div className="col">
            <Items title="PCs" image={PCs} link="/pcslink"/>
            </div>
        </div>
    </div>
  )
}

export default Itemcard
