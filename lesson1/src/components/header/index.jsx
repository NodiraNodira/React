//class component
import React from "react";

class Header extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        // console.log(this.props); 1-2-uzatish
        // const links = this.props.data; 3-uzatish

        // 4-uzatish
        console.log(this.props.children);
        return (
        <header style={{
            height:"60px", 
            display:"flex", 
            justifyContent:"space-around",
            alignItems:"center",
            background:"#678",
            color:"white",
            }}>
            {/* <h3>Home</h3>
            <h3>About</h3>
            <h3>Contact</h3>
            <h3>Gallery</h3> bular  va 2 uzatishda foydalanildi 
            endi headerdagini map orqali tutib olishni ko'ramiz */}
            
            {/* <h3>{this.props.data}</h3> 1-uzatish */}

            {/* 3-uzatish
            {links.map(link => <h3>{link}</h3>)}  */}
        </header>
        );
    }
}

export default Header