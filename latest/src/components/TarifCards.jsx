import styles from "../styles/TarifCards.module.css";

function TarifCards( {title, price, megabaits, description, colorClass, isHighlighted }) {
    const cardClass = `${styles.tarifCards} ${styles[colorClass]} ${isHighlighted ? styles.highlighted : ''}`;
    return(
        <div className={cardClass}>
            <header>
                <h4 className={styles.tariftitle}>{title}</h4>
            </header>
            <main>
                <h5 className={styles.tarifprice}>{price}</h5>
            </main>
            <section>
                <h4 className={styles.tarifmegabaits}>{megabaits}</h4>
            </section>
            <footer>
                <h4 className={styles.tarifdescription}>{description}</h4>
            </footer>
        </div>
    );
}

export default TarifCards;
