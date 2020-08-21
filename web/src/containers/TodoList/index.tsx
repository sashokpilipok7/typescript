import React, { Fragment, useState } from 'react'
import Dropdown from '../../components/dropdown'
interface TodoListProps {
    listAirport: Array<string>,
    listItinerary: Array<Array<string>>
}

const TodoList: React.FC<TodoListProps> = ({listAirport, listItinerary}) => {
    const [myLoc, setMyLoc] = useState<string>('')
    const [destination, setDestination] = useState<string>('')

    const locChange = (e: {[key: string]: any}) => {
        setMyLoc(e.currentTarget.value)
    }

    const destinationChange = (e: {[key: string]: any}) => {
        setDestination(e.currentTarget.value)
    }
    console.log(myLoc, destination)
    return(
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <div>
                    <div>My location</div>
                    <Dropdown list={listAirport} checked={myLoc} onChange={locChange}/>
            </div>
            <div style={{marginLeft: 30}}>
                    <div>Destination</div>
                    <Dropdown list={listAirport} checked={destination} onChange={destinationChange}/>
            </div>
           </div>
           <div className="flex-direction-column">
            {listItinerary.map((item, idx) => <div key={idx}>{item.map((i, idx) => idx === 0 ? `${i} >-------> ` : i)}</div>)}
           </div>
        </div>
    )
}

export default TodoList