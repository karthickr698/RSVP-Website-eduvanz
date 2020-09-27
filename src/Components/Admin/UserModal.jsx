import React from "react";

export default function Modal({ Datas }) {
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content text-center">
                    <div class="modal-header bg-dark font-weight-bold text-white">
                        <h5 class="modal-title" id="exampleModalLabel">User Details</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body font-weight-bold ">
                        {Datas.map(ele => {
                            return (
                                <div>
                                    <p>Name : {ele.name}</p>
                                    <p>Age : {ele.age}</p>
                                    <p>D.O.B : {ele.dob}</p>
                                    <p>Profession : {ele.profession}</p>
                                    <p>Location : {ele.locality}</p>
                                    <p>No. Of Guests : {ele.guests}</p>
                                    <p>Address : {ele.address}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div class="modal-footer bg-dark">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}