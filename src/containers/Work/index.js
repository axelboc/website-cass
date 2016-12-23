import React, { PropTypes } from "react";

// import works from "../../../collections/works";

const Work = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

Work.propTypes = {
  children: PropTypes.node,
};

export default Work;
