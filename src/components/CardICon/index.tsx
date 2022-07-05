import './styles.css';
import CardImage  from 'assets/images/car-card 1.png';

const CardICon = () => {
    return (
        <div className="card-container">
            <div className="card-container-imagem">
                <img src={CardImage} alt="" />
            </div>

            <div className="card-container-meio">
                <h1>Audi Supra TT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            </div>

            <div className="card-button">
                <button className="btn btn-primary btn-icon2">
                    <p>Comprar</p>
                </button>
            </div>
        </div>
    );
}

export default CardICon;