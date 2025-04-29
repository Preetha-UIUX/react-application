import React from 'react'
import { useGetFeedbackQuery } from '../redux/feedbackApi'
import FeedbackItem from './FeedbackItem'

const FeedbackList = () => {

    const {data: feedback=[], isLoading, isError } = useGetFeedbackQuery();

    if(isLoading) return <h3>Loading the Data from Server...</h3>

    if(isError) return <h3>Error Loading the Feedback....</h3>
    
  return (
    feedback.map((item) => (
        <FeedbackItem key={item.id} item={item}/>
    ))
  )
}

export default FeedbackList
