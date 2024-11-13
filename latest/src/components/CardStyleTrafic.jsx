import TarifCards from "./TarifCards.module.css";

function CardStyleTrafic(){
    return(
        <>
        <TarifCards title="Безлимитный 300" price="руб 300 / мес" megabaits="до 10 Мбит/сек" description="Объем включенного трафика не ограничен" colorClass="blueCard" />
        <TarifCards title="Безлимитный 300" price="руб 450 / мес" megabaits="до 50 Мбит/сек" description="Объем включенного трафика не ограничен" colorClass = "greenCard"/>
        <TarifCards title="Безлимитный 300" price="руб 550 / мес" megabaits="до 100 Мбит/сек" description="Объем включенного трафика не ограничен" colorClass = "redCard"/>
        <TarifCards title="Безлимитный 300" price="руб 1000 / мес" megabaits="до 200 Мбит/сек" description="Объем включенного трафика не ограничен" colorClass="blackCard"/>
        </>
    )
}
export default CardStyleTrafic;