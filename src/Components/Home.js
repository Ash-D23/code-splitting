import React from 'react'
import Dashboard from './Dashboard'
import { Suspense } from 'react';
const Gallery = React.lazy(() => import('./Gallery'));

function Home() {
  return (
    <div>
        <Dashboard />
        <Suspense fallback={<div>Loading...</div>}>
          <Gallery />
        </Suspense>
    </div>
  )
}

export default Home