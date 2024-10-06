import './SearchItem.css'

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="rroom3.jpg" alt="" className="SearchItemImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from centre</span>
            <span className="siTaxi">Free Airport Taxi</span>
            <span className="siSubtitle">
                Studio Apartment with air Conditioning
            </span>
            <span className="siFeatures">
                Entire Studio . 1 bathroom . 21m2 . 1 full bed
            </span>
            <span className="siCancel">Free Cancelation</span>
            <span className="siCancelSubtitle">You can cancel later ! So lock in this great deal today</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">4499/-</span>
                <span className="siGst">Inclusive of GST</span>
                <button className="siButton">Check Availability</button>

            </div>
        </div>
    </div>
  )
}

export default SearchItem
