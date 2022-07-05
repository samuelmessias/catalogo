import './styles.css';
import { ReactComponent as MainImage } from 'assets/images/car-header.svg';
import Navbar from 'components/Navbar';
import CardICon from 'components/CardICon';
import Pesquisar from 'components/Pesquisar';

const Lista = () => {
    return (
        <>
            <Navbar />
            <div className="home-container">

                <Pesquisar />

                <div className="main-container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <CardICon />
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <CardICon />
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <CardICon />
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <CardICon />
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <CardICon />
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <CardICon />
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <CardICon />
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <CardICon />
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <CardICon />
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <CardICon />
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <CardICon />
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <CardICon />
                        </div>
                    </div>


                </div>




            </div>
        </>
    );
}

export default Lista;