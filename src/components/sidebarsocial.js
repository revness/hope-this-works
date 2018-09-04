import React from 'react'
import Link from 'gatsby-link'


const Sidebarsocial = props => (
    <div
      style={{
        border: "2px solid #e6e6e6",
        maxWidth: 960,
        padding: "0.5rem",
        marginBottom: "25px"
      }}
    >
      <strong>{props.title}.</strong> <br />{props.description}
      
        <Link to={props.href}>{props.linktext}</Link>
        <a href="http://www.google.com"><img src="https://www.shareicon.net/download/2015/09/09/98305_camera_512x512.png" height="42" width="42"/></a>
    </div>
  );

  export default Sidebarsocial