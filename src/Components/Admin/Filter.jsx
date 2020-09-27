import React from "react";

export default function Filter({ changeHandler }) {
    return (
        <div className=" row m-auto ">
            <div className="col-md-12" style={{ textAlign: "center" }}>
                <select className="form-control" onChange={changeHandler}>
                    <option disabled selected>
                        Filter Data
                        </option>
                    <option>Show All</option>
                    <option>Sort Name A-Z</option>
                    <option>Sort Name Z-A</option>
                    <option>Sort Locality A-Z</option>
                    <option>Sort Locality Z-A</option>
                </select>
            </div>
        </div>
    );
}