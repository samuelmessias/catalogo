import './styles.css';
import { ReactComponent as MainImage } from 'assets/images/car-header.svg';
import Navbar from 'components/Navbar';
import ButtonIcon from 'components/ButtonIcon';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <div className="home-card">

                    <div className="home-image-container">
                        <MainImage />
                    </div>

                    <div className="home-content-container">
                        <h1>O carro perfeito para você</h1>
                        <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                    </div>

                </div>

                <div className="home-buttan">
                    <div className="home-buttan-icon">
                        <ButtonIcon />
                    </div>

                    <div className="home-buttan-descrition">
                        <p>Comece agora a navegar</p>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Home;