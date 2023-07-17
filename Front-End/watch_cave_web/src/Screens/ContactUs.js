import React from 'react'
import Layout from '../Layout/Layout'
import Head from '../Components/Home/Head'
import {FiMail, FiMap, FiPhoneCall} from 'react-icons/fi'

function ContactUs() {
  const ContactData =[
    {
      id:1,
      title:'Email Us',
      info:'Cross-Platform backend ideas',
      icon:FiMail,
      contact:'info@wc.com'
    },
    {
      id:2,
      title:'Call us',
      info:'any complains',
      icon:FiPhoneCall,
      contact:'+(94)66 000 0000'
    },
    {
      id:3,
      title:'Location',
      info:'Colombo, Sri Lanka',
      icon:FiMap,
      contact:''
    }
  ]
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="Contact Us"/>
        <div className="grid mg:grid-cols-2 gap-6 lg:mt-20 mt-10 lg:grid-cols-3 xl:grid-8">
          {
            ContactData.map((item) => (
              <div key={item.id} className="border border-border flex-colo p-10 bg-dry rounded-lg text-center">
                <span className="flex-colo w-20 h-20 rounded-full bg-main text-subMain text-2xl">
                  <item.icon/>
                </span>
                <h5 className="text-subMain text-2xl font-semibold mb-2">
                  {item.title}
                </h5>
                <h5 className="text-subMain text-xl mb-2">
                  {item.contact}
                </h5>
                
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs