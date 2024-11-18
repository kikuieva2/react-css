
import styles from "../styles/TarifCards.module.css";

function TarifCards({title,price, megabaits,description,colorClass,isHighlighted = false}){
    const cardClass = `${styles.tarifCards} ${styles[colorClass]} ${isHighlighted ? styles.highlighted : ''}`
return(
<div className={cardClass}>
    <header>
        <h4 className={styles.tarifTitle}>{title}</h4>
    </header>
    <main>
        <h5 className={styles.tarifPrice}>{price}</h5>
    </main>
    <section>
        <h4 className={styles.tarifMegaBaits}>{megabaits}</h4>
    </section>
<footer>
    <h4 className={styles.tarifDescription}>{description}</h4>
</footer>
</div>
)
}
export default TarifCards;

