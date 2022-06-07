import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>

      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://img.fotocommunity.com/la-proporcion-aurea-96ae324a-c6d3-4e79-bcd4-29fb968077e0.jpg?height=1000)'
        }}
      >
      </div>

      <div className='journal__entry-body'>
        <p className='journal__entry-title'>
          Un nuevo dia
        </p>
        <p className='journal__entry-content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aliquam nulla.
        </p>
      </div>

      <div className='journal__entry-date-box'>
        <span>Monday</span>
        <h4>28</h4>
      </div>

    </div>
  )
}
