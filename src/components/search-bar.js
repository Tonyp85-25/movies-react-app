import React,{useState} from 'react'

const SearchBar = (props)=>{

    const [searchText, setsearchText] = useState('') 
    const [placeHolder, setplaceHolder] = useState('Tapez votre film...')
    const handleChange= (evt)=>{
        setsearchText(evt.target.value)   
    }
    const handleClick=() =>{
        //console.log("--click--");
        props.callback(searchText)
    }
    return(<div className="row">
        <div className="col-lg-8 input-group">
            <input className="form-control input-lg" onChange={handleChange} placeholder={placeHolder}/>
            <span className="input-group-btn">
                <button className="btn btn-secondary" onClick={handleClick}>Go</button>  
            </span>
        </div>
        
        </div> )
}

export default SearchBar

