import React from 'react'
import { Media } from 'reactstrap';
import moment from 'moment';

const QuoteBox = ({ type, data }) => {
    const renderAsHTML = (data) => {
        return {
            __html: data,
        };
    }
    if (type === 'user') {
        return <div className="right">
            <div className="message">{data.question}</div>
        </div>
    }
    return (
        <div className="left">
            <div className="message">
                <Media>
                    <Media left><img src={data.icon} className="feature-img" alt={data.title}></img></Media>
                    <Media body>
                        <h2>{data.title}</h2>
                        <h4 dangerouslySetInnerHTML={renderAsHTML(data.description)} />
                        <h5><small>{moment(data.date, 'YYYY-MM-DD').fromNow()}</small></h5>
                    </Media>
                </Media>
                <p
                    dangerouslySetInnerHTML={renderAsHTML(data.content)}
                />
            </div>
        </div>
    )
}

export default QuoteBox