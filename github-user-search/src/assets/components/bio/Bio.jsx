import React, { useEffect, useState } from 'react'

const Bio = ({
  bioMsg
}) => {

  const [content, setContent] = useState(bioMsg)

  useEffect(() => {
    setContent(bioMsg);
  }, [content, bioMsg]);

  return (
    <div>
      {content !== ""? content: <span className='errMsg__notAvailable'>Not Available</span>}
    </div>
  )
}

export default Bio