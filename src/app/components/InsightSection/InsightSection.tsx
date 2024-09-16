import React from 'react'
import InsightHeader from './InsightComponents/InsightHeader'
import InsightGridContainer from './InsightComponents/InsightGridContainer'

const InsightSection = () => {
  return (
    <div className='p-16'>
        <InsightHeader></InsightHeader>
        <InsightGridContainer></InsightGridContainer>
    </div>
  )
}

export default InsightSection