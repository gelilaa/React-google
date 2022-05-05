import "./style.css"

export const Footer = ()=>{
    const data = ["Advertising","Business","How Search Work"]
    const data2 =["Privacy","Teams","Settings"]
    return(<footer>
    <div>
        <ul className="footer-section-1">
           {data.map((item)=>{
               return  <a className="footer-child-item1" href="#?"><li>{item}</li></a>
           })}
        </ul>
      </div>
      <div>
        <ul className="footer-section-2">
          <a className="footer-child-item2" href="#?"><li>Carbon neutral since 2007</li></a>
        </ul>
      </div>
      <div>
        <ul class="footer-section-3">
            {data2.map((item)=>{
               return  <a className="footer-child-item3" href="#?"><li>{item}</li></a>
           })}
          
        
        </ul>
        </div>
      
      </footer>)
}