import {useParams} from "react-router-dom";
import FindCar  from "../../API/findCar";
import {useEffect, useState} from "react";
import './carView.css';

function CarView() {
    const {brand, model, series, id} = useParams()
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await FindCar(id);
                setData(result.message);
            } catch (error) {
                console.error("error fetching car data: " + error);
            }
        };

        fetchData();
    }, [id]);

    return(
        <div style={{paddingLeft : '40px'}}>
            <h1>{brand} {model} {series}</h1>
            <div className="card1">
                <div className="car-img-gallery">
                    {data.images ? (
                        Array.isArray(data.images) ? (
                            data.images.map((carImage, index) => (
                                <img key={index} src={carImage || '/images/img.png'} alt={`Car ${index + 1}`} className="car-img" />
                            ))
                        ) : (
                            <img src={data.images || '/images/img.png'} alt="Car" className="car-img" />
                        )
                    ) : (
                        <img src="/images/img.png" alt="No car available" className="car-img" />
                    )}
                </div>

                <div className="info-right">
                    <h3>gads: </h3><h5>{data.year}</h5><br/>
                    <h3>cena : {data.price} euro</h3><br/>
                    <h3>Nobraukums: {data.mileage} km</h3><br/>
                </div>

            </div>
            <div className="info-bottom">
                <p>Atruma karba: {data.transmission}</p>
                <p>Atrumu daudzums: {data.clutch}</p>
                <p>Tilpums: {data.volume} L</p>
                <p>Virsbuve: {data.bodyType}</p>
                <p>Krasa: {data.color}</p>
                <p>Degviela: {data.fuel}</p>
                <p>{data.description}</p>
                <p>Pardevejs: {data.userID}</p>
            </div>

        </div>
    );
}

export default CarView;