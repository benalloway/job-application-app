import {useState} from 'react'
import { useHistory } from 'react-router'

export default function JobApplicationForm({onSubmit}){
    const [name, setName] = useState('')
    const [formData, setFormData] = useState([
    {Id: "1", Answer: false, Question: "ownCar"}, 
    {Id: "2", Answer: false, Question: "validLicense"}, 
    {Id: "3", Answer: false, Question: "dui"}, 
    {Id: "4", Answer: false, Question: "willingToDrive"}
])

    const history = useHistory()

    function HandleNameChange(e) {
        setName(e.target.value)
    }

    function handleInputChange(e) {
        const {checked:Answer, name: Question} = e.target
        const Id = e.target.dataset.id
        const newFormData = [...formData]
        newFormData[Id - 1] = {Id, Answer, Question}
        setFormData(newFormData)
    }

    function handleSubmit(e){
        e.preventDefault()
        onSubmit({name, questions: formData})
        history.push("/")
    }
    return (
    
        <form onSubmit={handleSubmit} action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="Name">What is your name? *</label>
            <div className="mt-1">
              <input required onChange={HandleNameChange} value={name} className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" type="text" id="Name" name="Name" />
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
        
)}