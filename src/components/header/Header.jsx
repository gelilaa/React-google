import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer} from '@fortawesome/free-solid-svg-icons'



export const Header = ()=>{
    const data = {
    first: ["About", "Store"],
    second: ["Gmail", "Images"],
  };
   

    const listFirst =data.first.map((item)=>{
       return <a className="navbar-child-item" href="#0"key={item} ><li>{item}</li></a>
    })
   
    const listSecond =data.second.map((item)=>{
      return  <a className="navbar-second-item" href="#0" key={item}><li>{item}</li></a>
    })
    return(
          <nav>
              
      <div>
        <ul className="nav-bar-first-item">
           {listFirst}
        </ul>
      </div>

      <div>
        <ul className="nav-bar-second-item">
          {listSecond}
          <a className="navbar-second-item"href="#0" ><FontAwesomeIcon icon={faBeer} /></a>
          <a className="navbar-second-item"href="#0" ><img src="https://reactjs.org/logo-og.png" alt="user"/></a>
        </ul>
         </div>
    </nav>
        
    )

}