import React, { useEffect, useState } from 'react';
import { getJobs } from '@/api/apijobs';
import useFetch from '@/hooks/useFetch';
import { useUser } from '@clerk/clerk-react';
import { BarLoader } from 'react-spinners';
import { Card } from '@/components/ui/card';

function JobListing() {
    const { isLoaded, user } = useUser();
    const [ location, setLocation ] = useState("");
    const [ company_id, setCompany_id ] = useState("");
    const [ searchQuery, setSearchQuery ] = useState("");

    const {  data: dataJobs, loading:dataLoading, error:dataError, fn:fnJobs } = useFetch(getJobs,{ location, company_id, searchQuery });
    
    useEffect(() => {
      if(isLoaded){
        fnJobs();
      }
    },[isLoaded]);

    console.log(dataJobs,"it is the data for joblisting")

    if(!isLoaded){
      return <BarLoader width={"100%"} className='mb-4' color='white' />
    }

     if(dataLoading){
      return <BarLoader width={"100%"} className='mb-4' color='red' />
    }
  return (
    <div>
      {dataLoading == false && <h1 className='text-6xl font-extrabold text-center pb-8 '>Latest Jobs</h1>}
      {dataLoading == false && dataJobs.length >0 ? (
        dataJobs.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))
      ): 
      dataLoading == false && <h1>No jobs found</h1>}
    </div>
  )
}

export default JobListing;
