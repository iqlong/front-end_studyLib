import React from 'react'

const News = (props) => {
  const { news: mes} = props.match.params;

  return (
      <div>
        Message is : { mes }
      </div>
  )
}

export default News
