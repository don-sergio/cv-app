import React from 'react'
import './CvLanguages.css'
import resumeJSON from '../models/curriculum-vitae.json'
import Card, { CardContent } from 'material-ui/Card';

const CvLanguages = (props) => {

    const listLanguage = resumeJSON.languages.list.map((value) => {
        return (
            <div key={value.id}>{value.name}</div>
        )
    })

    return (
        <Card>
            <CardContent className="lgs-content">
                {listLanguage}
            </CardContent>
        </Card>
    )
}

export default CvLanguages;