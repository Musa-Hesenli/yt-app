import React, { useEffect, useState, useRef } from 'react';
const Dropdown = ({ options, selected, setSelected }) => {
    const [menu, setMenu] = useState(false);
    const ref = useRef();
    const renderedItems = options.map((option) => {
        if (option.value !== selected.value) {
            return (
                <div className='col-12' key={option['value']}>
                    <button className='btn btn-block rounded-0 btn-light'  onClick={()=>setSelected(option)}>{option['label']}</button>
                </div>
            )
        } else {
            return null;
        }
    });
    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if(ref.current.contains(event.target)) {
                return null;
            }
            setMenu(false);
        });
    }, []);
    return (
        <div ref={ref}>
            <div className='list-group-item'>
                <h4>Dropdown items</h4>
                <hr/>
                <button className='btn btn-block btn-dark'>{selected.label}</button>
                <hr/>
                <button className='btn btn-danger rounded-0' onClick={() => setMenu(!menu)}>Toggle menu</button>
                <hr/>
                <div className={`d-${menu ? 'block' : 'none'}`}>
                    {renderedItems}
                </div>
            </div>
        </div>
    )
};

export default Dropdown;