import React from 'react'

function Title({ title, description }) {
  return (
    <div className="mt-6 text-center text-slate-700">
      <h2 className="text-3xl font-medium sm:text-4xl">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-slate-500">
        {description}
      </p>
    </div>
  )
}

export default Title
