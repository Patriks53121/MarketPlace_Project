import './catalog.css';
import List from '../../API/list';
import {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';


function CatalogList(){

    const fallbackImg = '/images/img.png';
    const [carList, setCarList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const axiosData = async () => {
            try {
                const data = await List();
                setCarList(data.message || data || []);
            } catch (error) {
                console.error('Error axios cars:', error);
                setCarList([]);
            }
        };

        axiosData();
    }, []);

    return(

        <div>

            <section className="car-list">
                {carList.map(car => (
                    <div
                        key={car.id}
                        className="car-card car-card-clickable"
                        tabIndex={0}
                        role="button"
                        onClick={() => navigate(`/catalog/${car.brand}/${car.series}/${car.model}/${car.id}`)}
                        onKeyPress={e => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                alert(`Clicked on ${car.brand} ${car.series} ${car.model}`);
                            }
                        }}
                    >
                        {console.log(car.images)}
                        <img
                            src={car.images || fallbackImg}
                            alt="Car"
                            className="car-image"
                            onError={e => { e.target.onerror = null; e.target.src = fallbackImg; }}
                        />
                        <div className="car-info">
                            <h2>{car.brand} {car.series} {car.model}</h2>
                            <p><strong>Gads:</strong> <span>{car.year}</span></p>
                            <p><strong>Cena:</strong> <span>{car.price}</span> $</p>
                            <p><strong>Tilpums:</strong> <span>{car.volume}</span> L</p>
                            <p><strong>Nobraukums:</strong> <span>{car.mileage}</span> km</p>
                        </div>
                    </div>
                ))}
            </section>

        </div>

    );

}

export default CatalogList;
