import * as React from 'react'
  
  export default function StatsComponent({stats, timespan}) {
    return (
      <div>
        {timespan ? (<h3 className="text-lg leading-6 font-medium text-gray-900">Last {timespan}</h3>) : null}
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-4">
              <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
            </div>
          ))}
        </dl>
      </div>
    )
  }