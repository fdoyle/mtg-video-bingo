import React from "react";
import { BoardTile } from "./BoardTile";
import './Board.css'
import { number } from "prop-types";

export type IProps = {

}


export class Board extends React.Component<IProps, any>{
    rows: number = 5;
    columns: number = 5;

    constructor(props: any) {
        super(props);
        this.state = {}

    }

    render() {
        let boardTiles = []

        for (let i = 0; i != 25; i++) {
            let active = this.state.hasOwnProperty(i) && this.state[i] == true;
            boardTiles.push(<BoardTile
                key={i}
                x={i % this.columns}
                y={Math.floor(i / this.columns)}
                index={i}
                active={active}
                onToggle={this.onToggle}
                content={`this is item ${i} but it's really long so it takes up a bunch of space`} />)
        }
        return <div className="board">{boardTiles}</div>
    }

    onToggle = (index: number) => {
        let oldState = null
        if (index in this.state && this.state[index] == true) {
            oldState = true;
        } else {
            oldState = false;
        }
        let newState = !oldState
        console.log(`index ${index} new state ${newState}`)
        console.log(this.state)
        this.setState({ //state is just a map of indices to states. if a value exists, it's "on" otherwise off
            [index]: newState
        })
    }
}