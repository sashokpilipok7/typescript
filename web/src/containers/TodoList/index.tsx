import React, { useEffect, useState } from 'react'
import Dropdown from '../../components/dropdown'
interface TodoListProps {
    listAirport: I1,
    listItinerary: I2
}

const TodoList: React.FC<TodoListProps> = ({listAirport, listItinerary}) => {
    const [myLoc, setMyLoc] = useState<string>('')
    const [destination, setDestination] = useState<string>('')
    const [route, setRoute] = useState<I2>([[]])

    useEffect(() => {
        routeChange()
    },[myLoc, destination])

    const locChange = (e: {[key: string]: any}) => {
        setMyLoc(e.currentTarget.value)
    }

    const destinationChange = (e: {[key: string]: any}) => {
        setDestination(e.currentTarget.value)
    }
    
    const routeChange = () => {
        let withMy: I2 = []
        withMy = listItinerary.filter(item => item.find(i => i === myLoc ) && item.find(i => i === destination ))

        if(!withMy[0] && myLoc && destination){
            listItinerary.map(item => {
                if(item.find(i => i === myLoc )){
                    withMy.push(item)
                }else if(item.find(i => i === destination )){
                    withMy.push(item)
                }
           })
           withMy.filter(item => item.find(i => {
                if(i !== myLoc && i !== destination){
                    
                }
           }))
        }
       
       setRoute(withMy)
    }
    console.log(route)
    return(
        <div className="d-flex flex-wrap justify-content-between">
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
            {route.map((item, idx) => <div key={idx}><span>{idx+1}. </span>{item.map((i, idx) => idx === 0 ? `${i} >-------> ` : i)}</div>)}
           </div>
        </div>
    )
}

export default TodoList