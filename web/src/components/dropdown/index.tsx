import React from 'react'

import styled from 'styled-components'

const Li = styled.div`
    list-style: none;
    &:focus{
        outline: none;
    }
`

interface DropdownProps{
    list: I1,
    onChange: Function,
    checked: string
}

const Dropdown: React.FC<DropdownProps> = ({list, onChange, checked}) => {
    return (
        <form>
            {list.map(item => <Li key={item}><label><input onChange={(e) => onChange(e)} checked={checked === item} type="radio" value={item}/> {item}</label></Li>)}
        </form>
    )
}

export default Dropdown
