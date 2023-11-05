import React from 'react'
import ContactUsMap from '../components/ContactUsMap'
import ContactDetails from '../components/ContactDetails'

const Contact = () => {
  return (
    <div className='bg-[#0d0e11] '>
           {/* <div className="mx-auto max-w-2xl lg:text-center ">
          <h2 className="mt-2 text-3xl font-bold sm:text-5xl">
            <span className="  bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent ">
              Everything you need to{" "}
            </span>{" "}
            <h3 className="leading-[1.3]">
              deploy your app Everything you need to deploy your app Everything
              you need to deploy your app
            </h3>
          </h2>
        </div> */}
<ContactDetails/>
      <ContactUsMap />

    </div>
  )
}

export default Contact