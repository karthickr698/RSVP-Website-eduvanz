import Loader from "react-loader-spinner";
import React from "react";

function IsLoader() {
    return (
        <>
            <Loader className="text-center" type="Bars" color="#000000" height={280} width={280} />
        </>
    );
}

export default IsLoader;