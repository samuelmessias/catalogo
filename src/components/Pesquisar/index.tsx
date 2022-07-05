import './styles.css';

const Pesquisar = () => {
    return (
        <>
            <div className="search-container">
                <input className="input-container" type="text"></input>
                <button className="btn btn-primary btn-icon">
                    <p>Buscar</p>
                </button>
            </div>
        </>

    );
}

export default Pesquisar;