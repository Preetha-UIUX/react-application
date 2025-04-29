import React from 'react'
import { useGetFeedbackQuery } from '../redux/feedbackApi'

const FeedbackStats = () => {
    
    const {data: feedback=[]} = useGetFeedbackQuery()
    
  return (
    <div>
      <h3>Total Reviews: {feedback.length}</h3>
    </div>
  )
}

export default FeedbackStats
