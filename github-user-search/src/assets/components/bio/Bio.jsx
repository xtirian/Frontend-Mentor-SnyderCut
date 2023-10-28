import React, { useEffect, useState } from "react";

import "./bio.scss";

const Bio = ({ bioMsg }) => {
  const [content, setContent] = useState(bioMsg);

  useEffect(() => {
    setContent(bioMsg);
  }, [content, bioMsg]);

  return (
    <div className="bio__container">
      <p>
        {content !== null ? (
          content
        ) : (
          <span className="errMsg__notAvailable">This profile has no bio</span>
        )}
      </p>
    </div>
  );
};

export default Bio;
