import './property.css'

export default function Property() {
  return (
    <div>
      <div className="pList">
        <div className="pListItem">
            <img src="hotes.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="resort.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="villa.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="cabin.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
      </div>
    </div>
  )
}
