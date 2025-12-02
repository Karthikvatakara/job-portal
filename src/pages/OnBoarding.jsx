import { useUser } from '@clerk/clerk-react';
import React, { useEffect } from 'react';
import BarLoader from "react-spinners/BarLoader";
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function OnBoarding() {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  console.log(user);

  const handleRoleSelection = async(role) => {
    try{
      const response = await user.update({ unsafeMetadata: { role }});
      navigate(role == "recruiter" ? "/post-job" :"/jobs")
    }catch(error){
      console.error(error,"error updating data")
    }
  }

  useEffect(() => {
    if(user?.unsafeMetadata?.role){
      navigate(user?.unsafeMetadata?.role == "recruiter" ? "/post-job" :"/jobs")
    }
  }),[user]

  if(!isLoaded){
    return <BarLoader width={"100%"} className='mb-4' color='white' />
  }
  return (
    <div className='flex  flex-col justify-center items-center mt-20'>
      <h1 className='text-6xl sm:text-8xl font-extrabold text-white'>I am a...</h1>
      <div className='grid grid-cols-2 gap-5 mt-12'>
      <Button onClick={() => handleRoleSelection("candidate")} className="h-32 text-2xl sm:px-40 px-10" variant={"blue"} size="4xl">candidate</Button>
      <Button onClick={() => handleRoleSelection("recruiter")} variant="destructive" className="h-32 text-2xl sm:px-40 px-10" >Recruiter</Button>
      </div>
    </div>
  )
}

export default OnBoarding
