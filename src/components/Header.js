import * as React from "react"
import { Link } from "react-router-dom";

const navigation = [
    { name: 'Dashboard', href: '/' },
    { name: 'Submit an Application', href: '/job-application-form' },
    { name: 'Qualified Allications', href: '/qualified-applications' },
  ]
  
  export default function Header() {
    return (
      <header className="bg-indigo-600">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <Link to="/">
                <span className="sr-only">Applications API</span>
                <img
                  className="h-10 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt=""
                />
              </Link>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <Link key={link.name} to={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
  }