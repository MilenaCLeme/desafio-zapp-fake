import React from 'react';
import { BsList } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";
import { AiOutlineMore } from "react-icons/ai";

class Header extends React.Component {
  render() {
    const { buttonDesativa } = this.props
    return (
      <div className='header'>
        <button
          type='button'
          className='bottoniniciou'
          onClick={ buttonDesativa }
        >
          <BsList />
        </button>
        <div className='espaco'>
          <div className='imagemBranco'>
            <GiMagnifyingGlass />
          </div>
          <div className='imagemBranco'>
            <AiOutlineMore />
          </div>
        </div>
      </div>
    )
  }
}

export default Header;