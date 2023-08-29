import React from "react";
import Header from "./header";
import Main from "./main";
class Root extends React.Component {
    render() {
      const navLinks = ["Home","About","Contact","Gallary","Login"] //3-uzatish dinamik
      return (
        <div>
          
          {/* <Header data={"some data"}/> 1- uzatish */}
          {/* <Header data={{name: "webbrain"}}/> 2-uzatish */}

          {/* 3-uzatish */}
          {/* <Header data={navLinks}/>  */}

          {/* 4-uzatish */}
          <Header data={navLinks}>
            <h1>Salom</h1>
          </Header>
          <Main/>
        </div>
      );
    }
}

export default Root;