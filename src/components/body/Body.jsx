import "./style.css"

export const Body =()=>{
    const button =["Google Search","I'm Feeling Luck"]
    const word =["G","O","O","G","L","E",]
    return(<>
    <header>
     <h1 className="header-title">
         {word.map((item)=>{
             return  <span className={item.toLowerCase()}>{item}</span>
         })}
       
        
      </h1>
      <div class="input-form">
        <input type="search" />
      </div>
      <div class="header-btn">
          {button.map((item)=>{
               return  <button>{item}</button>
           })}
      </div> 
      </header>
    </>)
}