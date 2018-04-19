import React from 'react'
import './CvTimelineXs.css'

const CvTimelineXs = (props) => {

    const { items } = props

    const tlxsRows = items.map((item, index) => {

        const iconStyle = {
            backgroundImage: item.img ? `url(${require(`../../images/${item.img}`)})` : 'none'
        }

        return (
            <div key={item.id} className="tlxs-row">
                <div className="tlxs-row-icon">
                    <div className="tlxs-branch-vertical"></div>
                    <div className="tlxs-icon" style={iconStyle}></div>
                    <div className="tlxs-branch-vertical"></div>
                </div>
                <div className="tlxs-row-content">
                    {item.content}
                </div>
            </div>
        )
    })

    return (
        <div className="tlxs-root">
            {tlxsRows}
        </div >
    )
}

export default CvTimelineXs