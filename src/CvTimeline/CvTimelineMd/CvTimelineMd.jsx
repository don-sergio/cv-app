import React from 'react'
import './CvTimelineMd.css'


const CvTimelineMd = (props) => {

    const { items } = props

    const tlmdRows = items.map((item, index) => {

        const classTitle = index % 2 === 0 ? 'tlmd-col-title' : 'tlmd-col-title-odd'
        const classContent = index % 2 === 0 ? 'tlmd-col-content' : 'tlmd-col-content-odd'
        const classBranchLeft = index % 2 === 0 ? 'tlmd-branch-offset' : 'tlmd-branch-horizontal'
        const classBranchRight = index % 2 === 0 ? 'tlmd-branch-horizontal' : 'tlmd-branch-offset'
        const iconStyle = {
            backgroundImage: `url(${require(`../../images/${item.img}`)})`

        }

        return (
            <div key={item.id} className="tlmd-row">

                <div className={classTitle}>
                    {item.header}
                </div>

                <div className="tlmd-icon-container">
                    <div className="tlmd-icon-branch-horizontal">
                        <div className={classBranchLeft}></div>
                        <div className="tlmd-icon" style={iconStyle}></div>
                        <div className={classBranchRight}></div>
                    </div>

                    <div className="tlmd-branch-vertical"></div>
                </div>

                <div className={classContent}>
                    {item.content}
                </div>

            </div>
        )
    })

    return (
        <div className="tlmd-root">
            {tlmdRows}
        </div >
    )

}

export default CvTimelineMd