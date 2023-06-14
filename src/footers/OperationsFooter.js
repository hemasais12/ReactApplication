import React from 'react';

export default function OperationsFooter() {
  return (
    <div>
      <div className='text-center ' >
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          Footer Operation
        </a>
      </div>
    </div>
  );
}