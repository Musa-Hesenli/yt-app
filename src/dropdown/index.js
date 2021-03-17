import React, {useState} from 'react';
import Options from './options';
const Index = () =>{ 
    const items = [
        {
            label : 'Color Red',
            value : 'red'
        },
        {
            label : 'Green Color',
            value : 'green'
        },
        {
            label : 'Blue Color',
            value : 'blue'
        }
    ]
    const [selected, setSelected] = useState(items[0]);
    return (
        <React.Fragment>
            <Options 
                options={items}
                selected = {selected}
                setSelected = {setSelected}
            />
        </React.Fragment>
    )
};

export default Index;