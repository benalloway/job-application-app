import * as React from "react"
import {getJobApplications} from "../async/snag-application-api"


export default function QualifiedApplicationsScreen() {
    const [applications, setApplications] = React.useState(null)
    
    React.useEffect(()=>{
      getJobApplications().then(result => {
        setApplications(result.data)
      })
      
    },[])
  
    if(!applications) return null
    else {
      return (
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto text-center">
        <svg
            className="absolute left-full transform translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <svg
            className="absolute right-full bottom-0 transform -translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Accepted Applications from: </h2>
          <ul className="divide-y divide-gray-200">
          {applications.map((app) => (
            <li
              key={app.Id}
              className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
            >
              <div className="flex justify-between space-x-3">
                <div className="min-w-0 flex-1">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900 truncate">{app.name}</p>
                </div>
                {/* <time dateTime={app.datetime} className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                  {app.datetime}
                </time> */}
              </div>
              <div className="mt-1">
                <ul className="line-clamp-2 text-sm text-gray-600">{app.questions?.map(q => {
                    return (
                        <li key={q.Question}>{q.Question}: <i>{q.Answer ? "Yes" : "No"}</i></li>
                      )
                  })}</ul>
              </div>
            </li>
          ))}
        </ul>
        </div>
        </div>
      );
    }
  }