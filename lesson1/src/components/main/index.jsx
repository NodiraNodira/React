//class component
import React from "react";

import { database } from "../../mock";
import Card from "../card";
class Main extends React.Component {
    render(){
        return (
        <main>
            <p>Lorem ipsum dolor sit amet consectetur,
                 adipisicing elit. Impedit corporis minus aliquam a quasi, nemo dicta harum totam quibusdam tenetur quos iure 
                iste assumenda sint deserunt commodi ipsam amet rerum.</p>
                <div>
                    {database.map(item=>{
                        return <Card data={item}/>
                    })}
                </div>
        </main>
        );
    }
}

export default Main
