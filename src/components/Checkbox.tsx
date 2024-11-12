import React, { useState } from 'react';
const Checkbox = ()=>{
    const [state, setState] = useState(1);
  return (
    <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
        <button
            onClick={() => setState(0)}
            className={`inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative ${
                state === 0 ? 'bg-white text-blue-500' : ''
              }`}
        >
            老师
        </button>

        <button
            onClick={() => setState(1)}
            className={`inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative ${
                state === 1 ? 'bg-white text-blue-500' : ''
              }`}
        >
            课程
        </button>
    </div>
  )  
}

export default Checkbox