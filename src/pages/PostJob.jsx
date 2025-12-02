import { useUser } from '@clerk/clerk-react'
import React from 'react'

function PostJob() {
  const { user } = useUser();
  console.log(user.unsafeMetadata,"unsafe data")
  return (
    <div>
      post job
    </div>
  )
}

export default PostJob
