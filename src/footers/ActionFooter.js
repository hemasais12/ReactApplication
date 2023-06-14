import React from 'react'

const ActionFooter = () => {
    return (
        <div>
          <div className='text-center ' >
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a className='text-dark' href='https://mdbootstrap.com/'>
              Footer Action
            </a>
          </div>
        </div>
      );
}

export default ActionFooter