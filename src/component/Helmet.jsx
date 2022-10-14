import React from "react";
import PropTypes from "prop-types";

const Helmet = (props) => {
    console.log(props);
    // props={title: 'Trang chủ', children: Array(6)}; children là array các componenet trong trang đó
    document.title = "Yolo - " + props?.title;
    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return <div>{props?.children}</div>;
};

Helmet.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Helmet;
