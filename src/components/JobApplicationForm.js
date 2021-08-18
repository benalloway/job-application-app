import {useState} from 'react'
import { useHistory } from 'react-router'

export default function JobApplicationForm({onSubmit}){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')  
    
    const [formData, setFormData] = useState([
    {Id: "1", Answer: "", Question: "ownCar"}, 
    {Id: "2", Answer: "", Question: "validLicense"}, 
    {Id: "3", Answer: "", Question: "Have you ever had a DUI?"}, 
    {Id: "4", Answer: "", Question: "willingToDrive"}
])

    const history = useHistory()

    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handleInputChange(e) {
        const newFormData = [...formData]
        const Id = e.target.dataset.id
        newFormData[Id - 1] = {Id, Answer: e.target.value === 'true' ? true : false, Question: e.target.dataset.question}
        setFormData(newFormData)
    }

    function handleSubmit(e){
        e.preventDefault()
        onSubmit({name, email, questions: formData})
        history.push("/")
    }
    return (
    
        <form onSubmit={handleSubmit} action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="Name">Full Name *</label>
            <div className="mt-1">
              <input required onChange={handleNameChange} value={name} className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" type="text" id="Name" name="Name" />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="Name">Email Address? *</label>
            <div className="mt-1">
              <input required onChange={handleEmailChange} value={email} className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" type="text" id="Name" name="Name" />
            </div>
          </div>

          {/* Checkbox Elements */}
        <div className="sm:col-span-2 relative flex items-start">
        <div className="mr-3 text-sm">
                <label htmlFor="ownCar" className="font-medium text-gray-700">Do you own a car?</label>
            </div>
            <div className="flex items-center h-10">
                <select required className="focus:ring-indigo-500 h-10 w-full text-indigo-600 border-gray-300 rounded" 
                onChange={handleInputChange} 
                value={formData[0].Answer} 
                name="ownCar" id="ownCar" data-id="1" 
                data-question="Do you own a car?">
                    <option value="">Select One</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
            </div>
        </div>

        <div className="sm:col-span-2 relative flex items-start">
        <div className="mr-3 text-sm">
                <label htmlFor="validLicense" className="font-medium text-gray-700">Do you have a valid license?</label>
            </div>
            <div className="flex items-center h-10">
                <select required className="focus:ring-indigo-500 h-10 w-full text-indigo-600 border-gray-300 rounded" 
                onChange={handleInputChange} 
                value={formData[1].Answer} 
                name="validLicense" id="validLicense" data-id="2" 
                data-question="Do you have a valid license?">
                    <option value="">Select One</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
            </div>
        </div>

        <div className="sm:col-span-2 relative flex items-start">
            <div className="mr-3 text-sm">
                <label htmlFor="willingToDrive" className="font-medium text-gray-700">Are you willing to drive over 1k miles a month?</label>
            </div>
            <div className="flex items-center h-10">
                <select required className="focus:ring-indigo-500 h-10 w-full text-indigo-600 border-gray-300 rounded" 
                onChange={handleInputChange} 
                value={formData[3].Answer} 
                name="willingToDrive" id="willingToDrive" data-id="4" 
                data-question="Are you willing to drive over 1k miles a month?">
                    <option value="">Select One</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
            </div>
        </div>

        <div className="sm:col-span-2 relative flex items-start">

        <div className="mr-3 text-sm">
                <label htmlFor="dui" className="font-medium text-gray-700">Have you ever had a DUI?</label>
            </div>
            <div className="flex items-center h-10">
                <select required className="focus:ring-indigo-500 h-10 w-full text-indigo-600 border-gray-300 rounded" onChange={handleInputChange} value={formData[2].Answer} name="dui" id="dui" data-id="3" data-question="Have you ever had a DUI?">
                    <option value="">Select One</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
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