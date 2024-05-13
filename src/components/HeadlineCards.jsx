import React from 'react';
import CardItem from "./CardItem";

function HeadlineCards(props) {
    return (
        <div className={`max-w-[1640px] mx-auto p-4 y-12 grid md:grid-cols-3 gap-6`}>
            <CardItem restarauntName={`Sun\`s Out, BOGO\`sa Out`} slogan={`Through 8/26`} imgLink={`https://images.pexels.com/photos/7936744/pexels-photo-7936744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}/>
            <CardItem restarauntName={`New Restaraunt`} slogan={`Added Daily`} imgLink={`https://images.pexels.com/photos/17130434/pexels-photo-17130434/free-photo-of-a-steak-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}/>
            <CardItem restarauntName={`We Deliver Desserts`} slogan={`Tasty treats`} imgLink={`https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}/>
        </div>
    );
}

export default HeadlineCards;