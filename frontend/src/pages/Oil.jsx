import React from 'react'
import Header from '../components/Layout/Header'
import OilRecommendation from '../components/OilRecommendation'

function Oil() {
  return (
    <div>
        <Header  activeHeading={6}/>
        <OilRecommendation />
    </div>
  )
}

export default Oil