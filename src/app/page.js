import ChooseUs from '@/components/ChooseUs/ChooseUs'
import Hero from '@/components/Hero/Hero'
import Search from '@/components/Search/Search'
import Services from '@/components/Services/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Search/>
      <Services/>
      <ChooseUs/>
    </div>
  )
}

export default page