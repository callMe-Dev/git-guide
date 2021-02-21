import React from 'react';

export default function CommandContent({ description }){
  return (
    <div className="CommandContent-Container">
      <p className="CommandContent-Container__p">{ description }</p>
    </div>
  )
}

