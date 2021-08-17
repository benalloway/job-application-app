import {useState} from 'react'

export default function JobApplicationForm({onSubmit}){
    const [Name, setName] = useState('')
    const [formData, setFormData] = useState([
    {Id: "1", Answer: false, Question: "ownCar"}, 
    {Id: "2", Answer: false, Question: "validLicense"}, 
    {Id: "3", Answer: false, Question: "dui"}, 
    {Id: "4", Answer: false, Question: "willingToDrive"}
])

    function HandleNameChange(e) {
        setName(e.target.value)
    }

    function handleInputChange(e) {
        const {checked, name: Question} = e.target
        const Id = e.target.dataset.id
        const newFormData = [...formData]
        newFormData[Id - 1] = {Id, Answer: checked ? "yes" : "no", Question}
        setFormData(newFormData)
    }

    function handleSubmit(e){
        e.preventDefault()
        onSubmit({Name, Questions: formData})
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
        <form onSubmit={handleSubmit} action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="Name">What is your name?"</label>
            <div className="mt-1">
              <input onChange={HandleNameChange} value={Name} className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" type="text" id="Name" name="Name" />
            </div>
          </div>

          {/* Checkbox Elements */}
        <div className="sm:col-span-2 relative flex items-start">
            <div className="flex items-center h-5">
            <input
                onClick={handleInputChange}
                id="ownCar"
                data-id="1"
                aria-describedby="do-you-own-a-car"
                name="ownCar"
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor="ownCar" className="font-medium text-gray-700">
                    Do you own a car?
                </label>
            </div>
        </div>

        <div className="sm:col-span-2 relative flex items-start">
            <div className="flex items-center h-5">
            <input
                onClick={handleInputChange}
                id="validLicense"
                data-id="2"
                aria-describedby="do-you-own-a-car"
                name="validLicense"
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor="validLicense" className="font-medium text-gray-700">
                    Do you have a valid license?
                </label>
            </div>
        </div>

        <div className="sm:col-span-2 relative flex items-start">
            <div className="flex items-center h-5">
            <input
                onClick={handleInputChange}
                id="willingToDrive"
                data-id="4"
                aria-describedby="do-you-own-a-car"
                name="willingToDrive"
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor="willingToDrive" className="font-medium text-gray-700">
                Are you willing to drive over 1k miles a month?
                </label>
            </div>
        </div>

        <div className="sm:col-span-2 relative flex items-start">
            <div className="flex items-center h-5">
            <input
                onClick={handleInputChange}
                id="dui"
                data-id="3"
                aria-describedby="do-you-own-a-car"
                name="dui"
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor="dui" className="font-medium text-gray-700">
                    Have you ever had a DUI?
                </label>
            </div>
        </div>

          <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Let's talk
              </button>
            </div>
        </form>
        </div>
      </div>
    </div>
)}