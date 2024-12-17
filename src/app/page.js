import ChooseUs from '@/components/ChooseUs/ChooseUs'
import Doctors from '@/components/Doctors/Doctors'
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
      <Doctors/>
    </div>
  )
}

export default page