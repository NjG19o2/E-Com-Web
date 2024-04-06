import React, { useContext } from 'react'
import Items from './Items'
import Electronics from '../images/Electronics.jpg'
import GamingAccessories from '../images/GamingAccessories.jpg'
import Watches from '../images/Watches.jpeg'
import VideoGames from '../images/VideoGames.avif'
import Grocery from '../images/Grocery.jpg'
import Fashion from '../images/Fashion.webp'
import HomeKitchen from '../images/HomeKitchen.avif'
import PCs from '../images/PCs.avif'
import itemContext from "../context/items/itemContext";


const Itemcard = () => {
  const context = useContext(itemContext);
  const { mode } = context;
  return (
    <>
    <div className='container my-4 '>
        <div className="row">
            <div className="col ">
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
 
 
 {/* ___________________________________________________________________________________ */}
 


 
 <div className={`album py-5 bg-body-tertiary bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`}>
        <div className={`container bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`}>
          <h3 className={`text-${mode === 'light' ? 'dark' : 'light'}`}>Best Sellers in Sports & Outdoors</h3>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3 "style={{marginTop:"4px"}}>
      <div>
      <div className={`item card bg-light text-dark`} style={{boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)" }} >
        <img src={PCs}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">dwd</h5>
          <p className="card-text">
            dwd
          </p>
          <a href="/" className="btn btn-outline-secondary">
            View
          </a>
        </div>
      </div>
    </div>
      <div>
      <div className={`item card bg-light text-dark`} style={{boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)" }} >
        <img src={PCs}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">dwd</h5>
          <p className="card-text">
            dwd
          </p>
          <a href="/" className="btn btn-outline-secondary">
            View
          </a>
        </div>
      </div>
    </div>
      <div>
      <div className={`item card bg-light text-dark`} style={{boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)" }} >
        <img src={PCs}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">dwd</h5>
          <p className="card-text">
            dwd
          </p>
          <a href="/" className="btn btn-outline-secondary">
            View
          </a>
        </div>
      </div>
    </div>
      <div>
      <div className={`item card bg-light text-dark`} style={{boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)" }} >
        <img src={PCs}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">dwd</h5>
          <p className="card-text">
            dwd
          </p>
          <a href="/" className="btn btn-outline-secondary">
            View
          </a>
        </div>
      </div>
    </div>
      <div>
      <div className={`item card bg-light text-dark`} style={{boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)" }} >
        <img src={PCs}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">dwd</h5>
          <p className="card-text">
            dwd
          </p>
          <a href="/" className="btn btn-outline-secondary">
            View
          </a>
        </div>
      </div>
    </div>


    
    <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-outline-secondary" type="button">View All</button>
</div>


      </div>
      
      
      
    </div>
  </div>
 {/* ___________________________________________________________________________________ */}
 


 
 <div className={`album py-5 bg-body-tertiary bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`}>
        <div className={`container bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`}>
          <h3 className={`text-${mode === 'light' ? 'dark' : 'light'}`}>New international customers purchased</h3>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3 "style={{marginTop:"4px"}}>
      <div>
      <div className={`item card bg-light text-dark`} style={{boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)" }} >
        <img src={PCs}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">dwd</h5>
          <p className="card-text">
            dwd
          </p>
          <a href="/" className="btn btn-outline-secondary">
            View
          </a>
        </div>
      </div>
    </div>
      <div>
      <div className={`item card bg-light text-dark`} style={{boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)" }} >
        <img src={PCs}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">dwd</h5>
          <p className="card-text">
            dwd
          </p>
          <a href="/" className="btn btn-outline-secondary">
            View
          </a>
        </div>
      </div>
    </div>
      <div>
      <div className={`item card bg-light text-dark`} style={{boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)" }} >
        <img src={PCs}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">dwd</h5>
          <p className="card-text">
            dwd
          </p>
          <a href="/" className="btn btn-outline-secondary">
            View
          </a>
        </div>
      </div>
    </div>
      <div>
      <div className={`item card bg-light text-dark`} style={{boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)" }} >
        <img src={PCs}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">dwd</h5>
          <p className="card-text">
            dwd
          </p>
          <a href="/" className="btn btn-outline-secondary">
            View
          </a>
        </div>
      </div>
    </div>
      <div>
      <div className={`item card bg-light text-dark`} style={{boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)" }} >
        <img src={PCs}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">dwd</h5>
          <p className="card-text">
            dwd
          </p>
          <a href="/" className="btn btn-outline-secondary">
            View
          </a>
        </div>
      </div>
    </div>


    
    <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-outline-secondary" type="button">View All</button>
</div>


      </div>
      
      
      
    </div>
  </div>





    </>
  )
}

export default Itemcard
