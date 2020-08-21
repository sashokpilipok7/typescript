import React, { Fragment } from 'react'

import styled from 'styled-components'

const Label = styled.label`

`

const Li = styled.li`
    list-style: none;
    &:focus{
        outline: none;
    }
`

interface TodoListProps {
    listAirport: Array<string>,
    listItinerary: Array<Array<string>>
}

const TodoList: React.FC<TodoListProps> = ({listAirport, listItinerary}) => {
    return(
        <div>
            <ul>
                {listAirport.map(item => <Li key={item}><label><input type="checkbox" /> {item}</label></Li>)}
            </ul>
        </div>
    )
}

export default TodoList