
import {data} from '../restApi.json'
export default function Menu() {
  return (
    <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>POPULAR DIESHES</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe nihil voluptate iste sequi rerum, ducimus qui dolores, accusamus alias quas?</p>
            </div>
            <div className="dishes_container">
        {
            data[0].dishes.map(element =>{
                return(
                   <div className="card" key={element.id}>
               <img src={element.image} alt={element.title}/>
               <h3>{element.title}</h3>
               <button>{element.category}</button>
                   </div> 
                )
            })
        }
            </div>
        </div>
    </section>
  )
}
