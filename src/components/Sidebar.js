import React , {useContext,useEffect} from 'react'
import itemContext from "../context/items/itemContext";
import alertContext from "../context/items/alertContext";

const Sidebar = () => {
  const context = useContext(itemContext);
  
  const { mode, toggleMode } = context;
  const { showAlert } = useContext(alertContext);

  useEffect(() => {
    toggleMode();
    // eslint-disable-next-line
  }, []);
  const alertMode = () => {
    if (mode === "light") {
      showAlert("Dark mode enabled", "success");
    } else {
      showAlert("Light mode enabled", "success");
    }
  };
  return (
   
    <div  style={{ position:"absolute",top:"0", right:"0",width:"280px" }}>
       <div class="d-flex flex-column flex-shrink-0 p-3 " style={{ zIndex:"30", height:"100vh",width:"287px",position:"fixed",background:"gray"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      
      <span class="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-body-emphasis">
         
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-body-emphasis">
          
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-body-emphasis">
         
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-body-emphasis">
          
          Customers
        </a>
      </li>
    </ul>
    <hr/>
    <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                
                
               onClick={()=>{toggleMode()}}
               onChange={alertMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable DarkMode
              </label>
            </div>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="" alt="" width="32" height="32" class="rounded-circle me-2"/>
        <strong>user</strong>
      </a>
      <ul class="dropdown-menu text-small shadow">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  </div>
  )
}

export default Sidebar
