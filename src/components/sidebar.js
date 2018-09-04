import React from 'react'
import Link from 'gatsby-link'

const Sidebar = () => 
 (
    <div style={{
        background: '#f4f4f4',
        paddingTop: '0px',
        position: 'absolute',
    right: '20px',
    width: '300px',
    border: '3px solid #73AD21'

    }}>
    <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly'
    }}>
    <li>Box 1</li>
    <br />
    <li>Box 2</li>
    </ul>
    </div>
  )


export default Sidebar;