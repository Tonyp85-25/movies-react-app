import React,{useState} from 'react'

const SearchBar = ()=>{

    const [searchText, setsearchText] = useState('') 
    const [placeHolder, setplaceHolder] = useState('Tapez votre film...')
    const handleChange= (evt)=>{
        setsearchText(evt.target.value)
        console.log(searchText)
    }
    return <input onChange={handleChange} placeholder={placeHolder}/>
}

export default SearchBar