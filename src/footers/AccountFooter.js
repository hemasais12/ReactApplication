import React from 'react'

const AccountFooter = () => {
    return (
        <div>
          <div className='text-center ' >
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a className='text-dark' href='https://mdbootstrap.com/'>
              Footer Account
            </a>
          </div>
        </div>
      );
}

export default AccountFooter