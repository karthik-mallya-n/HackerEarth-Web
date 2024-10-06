import './list.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import SearchItem from '../../components/SearchItem/SearchItem'

export default function List() {

  const location = useLocation();
  console.log(location)
  const [destination] = useState(location.state.destination);
  const [date,setDate] = useState(location.state.date);
  const [options] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false)
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
              <h1 className="listTitle">Search</h1>
              <div className="listItem">
                <label htmlFor="dest">Destination</label>
                <input type="text" placeholder={destination}/>
                </div>
                <div className="listItem">
                <label htmlFor="dest">Check-in Date</label>
                <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/mm/yyyy")} to ${format(date[0].endDate, "dd/mm/yyyy")}`}</span>
                {openDate && <DateRange onChange={item=>setDate([item.selection])} minDate={new Date()} ranges={date}/>}
              </div>
              <div className="listItem">
                <div className="listOptions">
                <label htmlFor="option">Options</label>
                  <div className="listOptionItem">
                    <span className="listOptiontext">Min Price <small>per night</small></span>
                    <input type="text" className="listItemInput" />
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptiontext">Max Price <small>per night</small></span>
                    <input type="text" className="listItemInput" />
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptiontext">Adult</span>
                    <input type="text" className="listItemInput" min={1} placeholder={options.adult}/>
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptiontext">Children</span>
                    <input type="text" className="listItemInput" min={0} placeholder={options.children}/>
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptiontext">Room </span>
                    <input type="text" className="listItemInput" min={1} placeholder={options.room}/>
                  </div>
                </div>
                
              </div>
              <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}
