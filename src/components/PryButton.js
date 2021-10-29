
import React from 'react'
 

export default function PryButton ({onClick, buttonLabel}){
    return (
        <button onClick={onClick} className=" bg-gray-900 text-white rounded-full px-10 py-4 text-lg hover:bg-blue-900">{buttonLabel}</button>
    )
}

