import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { PenBox } from 'lucide-react';


function Header() {
    const [ showSignIn, setShowSignIn ] = useState(false);
    const { user } = useUser();
  return (
    <div>
      <nav className='py-4 flex justify-between items-center px-4'>
        <Link>
        <img src="/logo.png" className='h-20 w-30  mx-3' alt="" />
        </Link>
            <div className='flex gap-8'>
                  <SignedOut>
                <Button variant="outline" onClick={() => setShowSignIn(true)}>
                    <SignInButton />
                </Button>
            </SignedOut>
              
            <SignedIn>
                {user?.unsafeMetadata?.role === "recruiter" && (
                    <Link to="/post-job">
                        <Button variant="destructive"className="rounded-full" >
                            <PenBox size={20}/>
                            Post a Job
                        </Button>
                    </Link>
                )}
            <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }} />
                {/* </UserButton> */}
            </SignedIn>
            </div>
      </nav>
    </div>
  )
}

export default Header
