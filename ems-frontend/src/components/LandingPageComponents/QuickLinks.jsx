import React from 'react'
import { Link } from 'react-router-dom'

const QuickLinks = () => {

  
  return (
    <div className='bg-gray-900 py-12 px-6 text-center text-white mb-20 mt-1'>

<h2 className='text-3xl font-bold mb-2'>
    Quick Links
</h2>
      <div className='mt-5  flex flex-col justify-center gap-4 text-lg'>
    <Link to = '/QuickLinksSupport' className='hover:text-purple-400 transition'>Support</Link>
    <Link to = '/QuickLinksContactUs' className='hover:text-purple-400 transition'>Contact Us</Link>
    <Link to = '/QuickLinksFaqs' className='hover:text-purple-400 transition'>FAQs</Link>
    <Link to = '/QuickLinksFeatures' className='hover:text-purple-400 transition'>Features</Link>

      </div>
    </div>
  )
}

export default QuickLinks
