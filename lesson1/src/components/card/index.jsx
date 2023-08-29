import React from "react";

class Card extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const {image,title}=this.props.data;
        return <div>
                <img src="https://static.toiimg.com/thumb/msid-85372696,width-1070,height-580,imgsize-1124428,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" alt="" />
                <h1>{title}</h1>
        </div>
    }
}

export default Card;