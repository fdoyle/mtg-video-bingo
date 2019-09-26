import React from "react";
import './Board.css'
import { AspectRatio } from "../AspectRatio/AspectRatio";

export type IProps = {
    index: number;
    x: number,
    y: number,
    active: boolean,
    content: string,
    onToggle: (index: number) => void
}

export type IState = {

}

export class BoardTile extends React.Component<IProps, IState>{
    constructor(props: any) {
        super(props)
    }

    render() {
        return <div className={`boardTile " + ${this.props.active ? "checked" : "unchecked"}`} onClick={this.onClick}>
            <AspectRatio aspectRatio="100%">
                <div className="boardTileTextContainer">
                    <p className="boardTileText">{this.props.content}</p>
                </div>
            </AspectRatio>
        </div>
    }

    onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        console.log("toggling " + this.props.index)
        this.props.onToggle(this.props.index);
    }
}

