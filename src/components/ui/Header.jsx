import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';



function Header() {
  return (
    <div>
      <nav className='py-4 flex justify-between items-center px-4'>
        <Link>
        <img src="/logo.png" className='h-20 w-30  mx-3' alt="" />
        </Link>
        <Button>login</Button>
            {/* <SignedOut>
                    <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn> */}
      </nav>
    </div>
  )
}

export default Header
