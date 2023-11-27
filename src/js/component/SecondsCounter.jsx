import React from "react";

const myComponentStyle = {
    "font-size": "100px",
};

function SecondsCounter({digito}) {
    return( <div className="card bg-dark text-white p-3 m-2" style={myComponentStyle}>
                <span>{digito}</span>
            </div>
    );
};

export default SecondsCounter;