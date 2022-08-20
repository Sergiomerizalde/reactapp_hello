import React from "react";

//create your first component
const Cards = () => {
	return (
    <div>
        <div className="row col g-4">
            <div className="card col">
                <img src="https://img.archiexpo.es/images_ae/photo-g/59228-17634542.webp" classNameName="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card col" >
                <img src="https://img.archiexpo.es/images_ae/photo-g/59228-17634542.webp" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card col">
                <img src="https://img.archiexpo.es/images_ae/photo-g/59228-17634542.webp" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>	
    </div>
	);
};

export default Cards;