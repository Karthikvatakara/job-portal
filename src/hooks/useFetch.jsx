import React, { useState } from 'react'
import { useSession } from '@clerk/clerk-react'

 function useFetch(cb,options= {} ) {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(null);
    const [ error, setError ] = useState(null);

    const {session} = useSession();

    const fn = async(...args) => {
        setLoading(true);
        setError(null);
        try{
            const supabaseAccessToken = await session.getToken({
                template: "supabase",
            })
            const respnse = await  cb(supabaseAccessToken,options,...args);
   console.log(respnse,"response in the useFetch")
   setData(respnse);
   setError(null);
        }catch(error){
            setError(error);
        }finally{
            setLoading(false);
        }
    }

    return { data , loading, error, fn }
}

export default useFetch
