import React from "react";
import { BoardTile } from "./BoardTile";
import './Board.css'
import { number } from "prop-types";
import { useParams } from "react-router";
import { useState } from 'react';

export type IProps = {
    sets: any;
    match?: any
}

export function Board(props: IProps) {
    let rows: number = 5;
    let columns: number = 5;

    let init: boolean[] = []
    const [currentBoardState, setBoardState] = useState(init)
    let { slug } = useParams();
    console.log(slug)

    let onToggle = (index: number) => {
        let oldState = null
        if (index in currentBoardState && currentBoardState[index] == true) {
            oldState = true;
        } else {
            oldState = false;
        }
        let newState = !oldState
        console.log(`index ${index} new state ${newState}`)
        let updatedBoardState = [...currentBoardState]
        updatedBoardState[index] = newState;
        setBoardState(updatedBoardState)
    }

    let boardTiles = []

    let set = slug != undefined ? slug : "Core Rudy"
    let content = Object.assign([], props.sets[set]);
    for (let i = 0; i != 25; i++) {
        let text: string = "";
        if (i == 12) {
            text = "Free Space"
        } else {
            let unsafeText = content.shift()
            if (unsafeText != undefined) {
                text = unsafeText;
            }
        }
        let active = currentBoardState.hasOwnProperty(i) && currentBoardState[i] == true;
        boardTiles.push(<BoardTile
            key={i}
            x={i % columns}
            y={Math.floor(i / columns)}
            index={i}
            active={active}
            onToggle={onToggle}
            content={text} />)
    }
    return <div className="board">{boardTiles}</div>
}