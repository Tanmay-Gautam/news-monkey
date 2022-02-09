import React from "react";

const Footer = (props) => {
    return (
        <div>
            <footer className={`text-center text-${props.Theme === "dark" ? "white" : "dark"} bg-${props.Theme}`}>
                <div className="container">
                    <section>
                        <a
                            className={`btn btn-link btn-floating btn-lg text-${props.Theme === "dark" ? "white" : "dark"} m-1`}
                            href="mailto:tanmaygautam146@gmail.com"
                            role="button" rel="noreferrer" target="_blank"
                        >
                            <i className="fas fa-envelope"></i>
                        </a>

                        <a
                            className={`btn btn-link btn-floating btn-lg text-${props.Theme === "dark" ? "white" : "dark"} m-1`}
                            href="https://instagram.com/_tanmaygautam/"
                            role="button" rel="noreferrer" target="_blank"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a
                            className={`btn btn-link btn-floating btn-lg text-${props.Theme === "dark" ? "white" : "dark"} m-1`}
                            href="https://www.linkedin.com/in/tanmay-gautam-421459206/"
                            role="button" rel="noreferrer" target="_blank"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>

                        <a
                            className={`btn btn-link btn-floating btn-lg text-${props.Theme === "dark" ? "white" : "dark"} m-1`}
                            href="https://github.com/Tanmay-Gautam/"
                            role="button" rel="noreferrer" target="_blank"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </section>
                </div>

                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    <a className={`text-decoration-none text-${props.Theme === "dark" ? "white" : "dark"}`} href="https://github.com/Tanmay-Gautam/">
                        © 2020 Copyright: Tanmay Gautam
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
