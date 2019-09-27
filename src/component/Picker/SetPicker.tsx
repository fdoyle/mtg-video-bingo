import React from 'react'
import { Link } from 'react-router-dom'
import './SetPicker.css'

export type IProps = {
    sets: string[]
}

export const SetPicker = (props: IProps) => {
    return <ul className="setList">
        {props.sets.map((set:string) => {
            return <Link to={`/set/${set}/`}>
                <li className="setItem">
                    {set}
                </li>
            </Link>
        })}
    </ul>
}