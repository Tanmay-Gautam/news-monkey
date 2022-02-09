import React, { useRef, useState, useEffect } from "react";

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, author, sourceName, Theme } = props;
    const ref = useRef(null);
    const [hover, setHover] = useState(false);
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(ref.current.offsetParent.offsetWidth);
    }, []);


    return (
        <div ref={ref}>
            {/* {console.log(width !== undefined && width >= 768 ? "true" : "false")} */}
            {width !== undefined && width >= 768 ? <div
                className={`card mb-3 bg-${Theme}`}
                style={{ maxHeight: "220px" }}
            >
                <span className="position-absolute p-2 top-0 translate-middle badge bg-primary" style={{ left: "92%", zIndex: "99999" }}>{sourceName}</span>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img
                            src={imgUrl}
                            className="rounded-start"
                            style={{ height: "220px", width: "100%" }}
                            alt="..."
                        />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <a
                                style={{
                                    textDecoration: "none",
                                    color: hover
                                        ? "#0784d3"
                                        : `${Theme === "dark" ? "white" : "black"}`,
                                }}
                                href={newsUrl}
                                rel="noreferrer"
                                target="_blank"
                                onMouseEnter={() => {
                                    setHover(true);
                                }}
                                onMouseLeave={() => {
                                    setHover(false);
                                }}
                            >
                                <h5 className="card-title">{title}</h5>
                            </a>
                            <p
                                className="card-text"
                                style={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: "3",
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    textOverflow: "eclipse",
                                }}
                            >
                                {description}
                            </p>
                            <small className="text-muted">
                                By {author ? author : "Unknown"}
                            </small>
                        </div>
                    </div>
                </div>
            </div> : <div className={`card bg-${Theme}`}>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>}
        </div>
    )
}

export default NewsItem