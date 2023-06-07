export default function FormLeads() {
    return (
        <section>
            <h2>¿Te gustaria fidelizar más clientes?</h2>
            <form>
                <label htmlFor="">Nombre</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="email" />
                <label htmlFor="">Numero</label>
                <input type="phone" />
                <button type="submit">Me quiero unir!</button>
            </form>
        </section>
    )
}