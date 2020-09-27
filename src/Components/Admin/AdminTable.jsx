import React, { useState } from "react";
import { connect } from "react-redux";
import { filterData } from "../../Redux/admin/AdminAction";
import Filter from './Filter'
import Pagination from './Pagination'
import UserModal from './UserModal'

function AdminTable(props) {
    const { data, totalData, changePage, changePageData, filter, num, curr_page } = props
    const [modal_data, setModalData] = useState([])
    let paginate = [];
    let j = 1;
    console.log(data)

    if (data.length > paginate.length) {
        for (let i = 0; i < totalData.length; i += Number(num)) {
            paginate.push(j);
            j++;
        }
    }

    const changeHandler = e => {
        filter(e.target.value);
    };

    const handleModal = (id) => {
        console.log(id)
        let user_datas = data.filter(ele => ele.id === id)
        setModalData(user_datas)
    }
    return (
        <div>
            <Filter changeHandler={changeHandler} />
            <div className="row col-md-12 mt-4">
                {data.map(ele => {
                    return (
                        <div className="col-md-4 my-2 my_card" key={ele.id} data-aos="fade-up-right" data-aos-offset="140" data-aos-delay="200" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-once="false">
                            <div className="card">
                                <img
                                    height="150px"
                                    src="/profilepic.png"
                                    className="card-img"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <p className="card-title text-center">Name : {ele.name}</p>
                                    <p className="card-text text-center">Location : {ele.locality}</p>
                                    <hr />
                                    <button
                                        className="text-success btn btn-outline-light mx-auto d-block"
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        onClick={() => { handleModal(ele.id) }}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <UserModal id="exampleModal" Datas={modal_data} />
            <hr />
            <Pagination
                paginate={paginate}
                curr_page={curr_page}
                changePage={changePage}
                changePageData={changePageData}
            />
        </div>
    );
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    filter: item => dispatch(filterData(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminTable);