import React from "react";
import TarifCards from "./TarifCards";



class Card extends React.Component{
render(){
    return(
        <React.Fragment>
            <TarifCards
            title = "Безлимитный 300"
            price = "руб 300 / мес"
            megabaits= "до 10 Мбит/сек"
            description = "Объем включенного трафика не ограничен"
            colorClass="blueCard"
            isHighlighted = {false}
            />
            <TarifCards
            title = "Безлимитный 450"
            price = "руб 450 / мес"
            megabaits= "до 50 Мбит/сек"
            description = "Объем включенного трафика не ограничен"
            colorClass = "greenCard"
            isHighlighted = {false}
            />
            <TarifCards
            title = "Безлимитный 550"
            price = "руб 550 / мес"
            megabaits= "до 100 Мбит/сек"
            description = "Объем включенного трафика не ограничен"
            isHighlighted = {true}
            colorClass = "redCard"
            />
            <TarifCards
            title = "Безлимитный 1000"
            price = "руб 1000 / мес"
            megabaits= "до 200 Мбит/сек"
            description = "Объем включенного трафика не ограничен"
            colorClass = "blackCard"
            isHighlighted = {false}
            />
        </React.Fragment>
    )
}
}

export default Card;