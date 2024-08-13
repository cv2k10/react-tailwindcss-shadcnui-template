import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Timer from './Timer'
import EnhancedTimer from './EnhancedTimer'

function App() {
  return (
    <div className="bg-gray-100">
      <Timer />
      <hr className="my-4" />
      <EnhancedTimer />
    </div>
  );
}

export default App;

// This template is followed this guide https://tailwindcss.com/docs/guides/vite to install tailwindcss into statckblitz react project
