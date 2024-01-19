import React from 'react'
import laoding from '../loading.gif'

const Spinner =() => {
    return (
      <div className='text-center'>
        <img src={laoding} alt="" />
      </div>
    )
}
export default Spinner;