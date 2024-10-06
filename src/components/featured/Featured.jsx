import React from './featured.css'


export default function Featured() {
  return (
    <div>
      <div className="featured">
        <div className="featuredItem">
            <img src="australia.jpg" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Australia</h1>
                <h2>123 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="nyc.jpg" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>New York City</h1>
                <h2>123 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="hungary.jpg" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Hungary</h1>
                <h2>123 Properties</h2>
            </div>
        </div>
      </div>
    </div>
  )
}
