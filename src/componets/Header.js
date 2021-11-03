import React from "react";
import "./Header.css";


// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {
    return (
        <header className={black ? "black" : ""}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.vippng.com/png/full/232-2326511_avoid-placing-the-logo-in-a-shape-or.png" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://th.bing.com/th/id/OIP.mRVWwlJuuX-OdFt5NjyGYQHaHa?pid=ImgDet&rs=1" alt="Netflix"/>
                </a>
            </div>
        </header>
    )
}