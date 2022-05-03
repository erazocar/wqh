import React from "react"

const Footer = () => {
    return (
        <div className="footer">
            <footer className="py-4 bg-dark fixed-bottom">
                <div className="container-fluid mx-5">
                    <p className="m-0 text-left text-white">
                    Copyright @2022 <a target="_blank" style={{color: "white"}} href="https://uiowa.edu/">University of Iowa</a> Open Source Data
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;