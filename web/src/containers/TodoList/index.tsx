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
        let withMy2: I2 = []
        withMy = listItinerary.filter(item => item.find(i => i === myLoc ) && item.find(i => i === destination ))

        if(!withMy[0] && myLoc && destination){
            listItinerary.map(item => {
                if(item.find(i => i === myLoc )){
                    withMy.push(item)
                }else if(item.find(i => i === destination )){
                    withMy2.push(item)
                }
           })
           withMy.filter((item, idx) => item.find(i => {
                if(i !== myLoc && i !== destination){
                    const newPoint: string = i
                    const next = item[idx+1]
                    // if(next && next.find((i: any) => i === newPoint)){
                    // тада всі сполучення городів i === destination && i === myLoc
                    // }
                }
           }))
        }
        findJoin(withMy, withMy2)
       setRoute([...withMy, ...withMy2])
    }       

    const findJoin = (a: I2, b: I2) => {
        let newCountry: Array<string> = []
        let joinEl: I2 | Array<string> = []
        a.filter(item => item.find(i => {
            if(i !== myLoc && i !== destination){
                newCountry.indexOf(i) < 0 &&  newCountry.push(i)
                joinEl = b.filter(item2 => item2.find(i2 => {
                    if(i === i2){
                        return true
                    }
                    if(i2 !== myLoc && i2 !== destination){
                        newCountry.indexOf(i2) < 0 &&  newCountry.push(i2)
                    }
               }))
            }
        })) 
        if(joinEl[0]){
            alert('MArshrut done with 3 race')
        }else{
         console.log(newCountry)
         findNewRoute(newCountry)
        } 
    } 

    const findNewRoute = (arr: Array<string>) => {
        let newRoutes: I2 = []
        listItinerary.filter(item => {
           if(item.indexOf(myLoc) < 0 && item.indexOf(destination) < 0 ){
               item.find(i => {
                      if(arr.find(new1 =>  new1 === i)){
                         newRoutes.push(item)
                      }
               })  
           }
        })
        let itemSuccess = newRoutes.find(item => arr.indexOf(item[0]) >=0 && arr.indexOf(item[1])  >=0  )
        console.log(newRoutes)
        if(itemSuccess){
            debugger
            alert('MArshrut done with 4 race')
        } 
    }

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