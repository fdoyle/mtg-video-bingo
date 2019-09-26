import React from "react";
import "./AspectRatio.css"

export type IProps = {
    aspectRatio: string
}



export class AspectRatio extends React.Component<IProps> {
    render() {
        let paddingString = {
            paddingTop: this.props.aspectRatio
        }

        return <div className="outer" style={paddingString}>
            <div className="inner">
                {this.props.children}
            </div>
        </div >
    }
}