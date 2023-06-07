import styles from './FormLeads.module.scss'

export default function FormLeads() {
    return (
        <section className={styles['container-section-leads']}>
            <div className={styles['container-inside-leads']}>
                <h2>¿Te gustaria fidelizar más clientes?</h2>
                <form className={styles['container-form-leads']}>
                    <label htmlFor="">Nombre</label>
                    <input type="text" />
                    <label htmlFor="">Email</label>
                    <input type="email" />
                    <label htmlFor="">Numero</label>
                    <input type="phone" />
                    <button type="submit">Me quiero unir!</button>
                </form>
            </div>
        </section>
    )
}