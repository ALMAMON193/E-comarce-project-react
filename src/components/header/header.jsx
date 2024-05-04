import React from 'react'
import Select from '../selectDrop/select'
import '../header/header.css'
import Logo from '../../assets/img/logo.png'

export default function header() {
  return (
    <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <img src={Logo} alt="" />
            </div>
           { /*header search  start */}
           <div className='col-sm-6'>
    <div className="headerSearch d-flex align-items-center">
    <Select />
       
        <div className='search'>
            <input type='text' placeholder="Search for items..."/>
            {/* <SearchIcon className="searchIcon cursor"/> */}
        </div>
    </div>
</div>

           { /*header search  end */}
            
          </div>
        </div>
    </header>
  )
}
