import React from 'react';

function ErrorPage() {
  return (
    <main
      className='bg-gradient-to-tr from-black via-purple-700 via-50% to-black flex min-h-screen flex-col items-center justify-center p-24'
    >
      <h1 className='-mt-16 m-4 w-full text-center font-bold text-xl md:text-4xl bg-clip-text p-2 bg-gradient-to-b from-purple-400 to-white text-transparent drop-shadow-md'>Error 404 - page not found</h1>
      <p className='font-semibold text-white'>The page you are looking for does not exist.</p>
    </main>
  );
}

export default ErrorPage;
