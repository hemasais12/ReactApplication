import React from 'react';

export default function HomeFooter() {
  return (
    <div>
      <div className='text-center ' >
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          Footer Home
        </a>
      </div>
    </div>
  );
}