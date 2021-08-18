import {postJobApplication} from "../async/snag-application-api"
import JobApplicationForm from "../components/JobApplicationForm";

export default function SubmitAnApplicationScreen() {
    function handleSubmit(formData) {
      postJobApplication(formData)
    }
    return (
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
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
  
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Delivery Driver – Richmond, VA</h2>
            <p className="whitespace-pre-wrap mt-4 text-lg leading-6 text-gray-500">
            <b>Shifts:</b> Morning, afternoon, weekday and/or weekend
            <br/>
            <b>Location:</b> Richmond - 1234 Broad Street, Richmond, VA
            <br/>
            <b>Compensation:</b> Starting pay $18.00/hr + benefits
            </p>
          </div>
          <div className="mt-12">
        <JobApplicationForm onSubmit={handleSubmit} />
        </div>
        </div>
      </div>
    );
  }