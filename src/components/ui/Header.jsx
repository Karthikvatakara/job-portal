import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from './button';
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { PenBox,BriefcaseBusiness, Heart } from 'lucide-react';
import { dark } from '@clerk/themes';

function Header() {
    const [ showSignIn, setShowSignIn ] = useState(false);
    const { user } = useUser();
    const [ search, setSearch ] = useSearchParams();

    useEffect(() => {
      if(search.get('sign-in')){
        setShowSignIn(true);
      }
    },[search]);

    const handleOverLayClick = (e) => {
      if(e.target === e.currentTarget){
        setShowSignIn(false);
      }
      setSearch("")
    }
  return (
    <div>
      <nav className='py-4 flex justify-between items-center px-4'>
        <Link>
        <img src="/logo.png" className='h-20 w-30  mx-3' alt="" />
        </Link>
            <div className='flex gap-8'>
                  <SignedOut>
                <Button variant="outline" onClick={() => setShowSignIn(true)}>
                    Login
                </Button>
            </SignedOut>
              
            <SignedIn>
                {user?.unsafeMetadata?.role == "recruiter" && (
                    <Link to="/post-job">
                        <Button variant="destructive"className="rounded-full" >
                            <PenBox size={20}/>
                            Post a Job
                        </Button>
                    </Link>
                )}
            <UserButton appearance={{ elements:{avatarBox:"w-10 h-10"} }} >
              <UserButton.MenuItems>
                <UserButton.Link label='My Jobs'
                labelIcon={<BriefcaseBusiness size={15}/>} 
                href='/my-jobs'/>
                 <UserButton.Link label='saved Jobs'
                labelIcon={<Heart size={15}/>} 
                href='/saved-jobs'/>
              </UserButton.MenuItems>

            </UserButton>
            </SignedIn>
            </div>
      </nav>

        {showSignIn && 
        <div className='fixed inset-0 flex items-center justify-center bg-dark-400 bg-opacity-50
        ' onClick={handleOverLayClick}>
          <SignIn 
            appearance={{baseTheme:dark}}
            signUpForceRedirectUrl='/onboarding'
            fallbackRedirectUrl="/onboarding"
          />
        </div>}
    </div>
  
  )
}

export default Header
