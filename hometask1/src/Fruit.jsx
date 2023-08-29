import React, {Component} from "react";
import Card from "./Card";
export default class Fruit extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Card img='https://5.imimg.com/data5/WA/NV/LI/SELLER-52971039/apple-indian-500x500.jpg' title='olma'/>
                <Card img='https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-on-white-background_1284-45456.jpg?w=2000'  title='banan'/>
                <Card img='https://geografiya.uz/uploads/posts/2017-05/1495157396_anor-2.jpg'  title='anor'/>
                <Card img='https://5.imimg.com/data5/WA/NV/LI/SELLER-52971039/apple-indian-500x500.jpg'  title='nok'/>
                <Card img='https://5.imimg.com/data5/WA/NV/LI/SELLER-52971039/apple-indian-500x500.jpg'  title='gilos'/>
                <Card img='https://5.imimg.com/data5/WA/NV/LI/SELLER-52971039/apple-indian-500x500.jpg'  title='shaftoli'/>
                <Card img='https://5.imimg.com/data5/WA/NV/LI/SELLER-52971039/apple-indian-500x500.jpg'  title='nok'/>
                <Card img='https://5.imimg.com/data5/WA/NV/LI/SELLER-52971039/apple-indian-500x500.jpg'  title='gilos'/>
                <Card img='https://5.imimg.com/data5/WA/NV/LI/SELLER-52971039/apple-indian-500x500.jpg'  title='ananas'/>
                <Card img='https://5.imimg.com/data5/WA/NV/LI/SELLER-52971039/apple-indian-500x500.jpg'  title='olcha'/>
            </div>
        )
    }
}