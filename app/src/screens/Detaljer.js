import React from 'react'
import AktivitetsDetaljer from '../components/deteils/AktivitetsDetaljer'
import NavBar from '../components/NavBar'

const Detaljer = () => {
  return (
    <div className='bg-[#5E2E53] min-h-screen'>
      <AktivitetsDetaljer/>
      <NavBar/>
    </div>
  )
}

export default Detaljer