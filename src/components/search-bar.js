import React,{useState} from 'react'

const SearchBar = ()=>{

    const [searchText, setsearchText] = useState('') 
    const [placeHolder, setplaceHolder] = useState('Tapez votre film...')
    const handleChange= (evt)=>{
        setsearchText(evt.target.value)
        console.log(searchText)
    }
    return(<div className="row">
        <div className="col-md-8">
            <input className="form-control input-lg" onChange={handleChange} placeholder={placeHolder}/>
        </div>
        
        </div> )
}

export default SearchBar