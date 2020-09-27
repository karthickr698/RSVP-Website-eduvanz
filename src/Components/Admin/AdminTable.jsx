import React from "react";
import { Button } from '@material-ui/core'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { filterData } from "../../Redux/admin/AdminAction";
import styles from './admin.module.css'

function AdminTable(props) {
    const { data, totalData, changePage, changePageData, filter, num, curr_page } = props
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
    return (
        <div>
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
                                    <Link to={`/booking/${ele.id}`} style={{ textDecoration: "none" }}>
                                        <button className="text-success btn btn-outline-light mx-auto d-block">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <hr />
            <div>
                <ul className="pagination pagination-lg justify-content-center" data-aos="fade-up-right" data-aos-offset="140" data-aos-delay="100" data-aos-duration="200" data-aos-easing="ease-in-out" data-aos-once="true">
                    {paginate.map(ele => {
                        if (ele === curr_page) {
                            return (
                                <li className="page-item active">
                                    <Button
                                        className={styles.active}
                                        onClick={() => {
                                            return changePage(ele);
                                        }}
                                        key={ele}
                                    >
                                        {ele}
                                    </Button>
                                </li>
                            );
                        }
                        else {
                            return (
                                <li className="page-item active">
                                    <Button
                                        className={styles.page}
                                        onClick={() => {
                                            return changePage(ele);
                                        }}
                                        key={ele}
                                    >
                                        {ele}
                                    </Button>
                                </li>
                            );

                        }
                    })}
                </ul>
                <div className="col-md-3 offset-1 mx-auto d-block" >
                    <select
                        className="form-control"
                        onChange={e => {
                            changePageData(e.target.value);
                        }}
                    >
                        <option disabled selected>
                            select per page
                    </option>
                        <option>6</option>
                        <option>30</option>
                        <option>45</option>
                        <option>60</option>
                        <option>100</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    filter: item => dispatch(filterData(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminTable);