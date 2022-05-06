import "./style.css"

export const Body =()=>{
    const button =["Google Search","I'm Feeling Luck"]
    const word =["G","O","O","G","L","E",]
    return(<>
    <header>
     <h1 className="header-title">
         {word.map((item,index)=>{
             return  <span className={item.toLowerCase()} key={index}>{item}</span>
         })} 
      </h1>
      <div className="input-form">
        <input type="search" />
      </div>
      <div className="header-btn">
          {button.map((item,index)=>{
               return  <button key={index}>{item}</button>
           })}
      </div> 
      </header>
    </>)
}