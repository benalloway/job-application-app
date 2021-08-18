import * as React from "react"
import StatsComponent from "../components/StatsComponent"
import {getJobApplications, getRejectedJobApplications} from "../async/snag-application-api"

const time = "30 days"

export default function DashboardScreen() {
    const [qualifiedApplications, setQualifiedApplications] = React.useState(null)
    const [rejectedApplications, setRejectedApplications] = React.useState(null)

    function handleStats() {
        let totalQualified, totalRejected, totalApplications = 0

        if(!qualifiedApplications){ 
            totalQualified = 0
        } else {
            totalQualified = qualifiedApplications?.length
        }

        if(!rejectedApplications) {
            totalRejected = 0
        } else {
            totalRejected = rejectedApplications?.length
        }
        
        
        totalApplications = totalQualified + totalRejected

        return [
            { name: 'Total Applications', stat: totalApplications },
            { name: 'Qualified Applications', stat: totalQualified },
            { name: 'Rejected Applications', stat: totalRejected },
          ]
    }
    
    React.useEffect(()=>{
      getJobApplications().then(result => {
        setQualifiedApplications(result.data)
      })
      
      getRejectedJobApplications().then(result => {
        setRejectedApplications(result.data)
      })
      
    },[])

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
             <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Dashboard</h2>
             <StatsComponent stats={handleStats()} />
           </div>
       </div>
    )
   }