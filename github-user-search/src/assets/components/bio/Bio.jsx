import React, { useEffect, useState } from 'react'

import './bio.scss'

const Bio = ({
  bioMsg
}) => {

  const [content, setContent] = useState(bioMsg)

  useEffect(() => {
    setContent(bioMsg);
  }, [content, bioMsg]);

  return (
    <div className='bio__container'>
      {content !== ""? content: <span className='errMsg__notAvailable'>Not Available</span>}
    </div>
  )
}

export default Bio