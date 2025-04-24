import React from 'react'
import dayjs from  'dayjs';



const Interviewcard = ({ interviewId,
    userId,
    role,
    type,
    techstack,
    createdAt}: InterviewCardProps) => {
        const feedback = null as Feedback | null ;
        const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
        const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');


  return (
        <div className="card-border w-[360px] ">
            InterviewCard
            
        </div>
        
  )
  
}

export default Interviewcard ;