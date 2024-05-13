import React from 'react';

function CardItem(props) {
    return (
        <div>
            {/* Card */}
            <div className={`rounded-xl relative`}>
                {/*overlay*/}
                <div className={`absolute w-full h-full bg-black/50 rounded-xl text-white`}>
                    <p className={`font-bold text-2xl px-4 pt-4`}>{props.restarauntName}</p>
                    <p className={`px-4`}>{props.slogan}</p>
                    <button className={`border-white bg-white text-black mx-2 absolute bottom-4`}>Order Now</button>
                </div>
                <img className={`max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl`}
                     src={props.imgLink}
                     alt={`item card`}/>
            </div>
        </div>
    );
}

export default CardItem;