import {Card} from '../card/Card.component'
import './card-list.css'

export const CardList = (props)=>{
    
    return(
        <div className="card-list">
            {
            (props.monster.filter((item)=> item.name.toLowerCase().includes(props.searchField)
            )).map(item => {
                return (
                    <Card key ={item.id} monster = {item}/>
                )})
            }
        </div>
    )
}
