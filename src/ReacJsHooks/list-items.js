import React, { useState } from 'react'
const Application = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const onClickIndex = (index) => {
        setActiveIndex(index)
    }
    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'bg-primary' : ''
        return(
            <React.Fragment key={index}>
                <div>
                    <li onClick={() => onClickIndex(index)} className={`list-group-item ${active}`}>
                    {item.name}
                    <hr/>
                    {item.description}
                    </li>
                </div>
            </React.Fragment>
        )
    })
    return (<div className='col-12'>{renderedItems}</div>);
};
export default Application;