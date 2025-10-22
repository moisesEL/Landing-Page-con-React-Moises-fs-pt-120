import React from "react";

const card = ({ image, title, description }) => {
    return (
        <div className=" col-md-6 col-lg-3 mb-4">
            <div className="card h-100">
                <img src={image} className="card-img-top object-fit-cover" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>

        </div>

    );
};

export default card;