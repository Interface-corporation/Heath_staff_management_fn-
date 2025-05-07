import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO= ({title,name,content}) => {
  return (
   
        <Helmet>
        <title>{title}</title>
         <meta name={name} content={content}/>

        </Helmet>
    
  )
}

export default SEO