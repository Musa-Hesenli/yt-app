import axios from "axios";
import React, { useState, useEffect } from "react";

const SearchItem = () => {
    const [term, setTerm] = useState("programming");
    const [results, setResults] = useState([]);
    const [bouncedTerm, setBouncedTerm] = useState(term);
    useEffect(() => {
        const timeoutId = setTimeout(()=> {
            setBouncedTerm(term);
        }, 500)
        return () => {
            clearTimeout(timeoutId);
        }
    }, [term])
    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params : {
                    action : 'query',
                    list : 'search',
                    origin : '*',
                    format : 'json',
                    srsearch : term
                }
            });
           
                setResults(data.query.search);
            
        } 
        search();
    }, [bouncedTerm]);
    const renderedItems = results.map(el => {
        return (
            <div key={el.pageid} className='list-group-item'>
                {el.title}
                <hr/>
                <span dangerouslySetInnerHTML={{ __html : el.snippet }}></span>
            </div>
        )
    })
    return (
        <div className='col-12 mt-3'>
            <div className='list-group-item'>
                <input onChange={(e) => setTerm(e.target.value)} value={term} className='form-control' placeholder='Search Term'/>
            </div>
            <div className='mt-3'>
                {renderedItems}
            </div>
        </div>
    )
}

export default SearchItem;
