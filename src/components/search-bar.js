import React,{useState,useEffect} from 'react'

const SearchBar = (props)=>{

    const [searchText, setsearchText] = useState('') 
    const [placeHolder, setplaceHolder] = useState('Tapez votre film...')
    const [intervalRequest, setIntervalRequest] = useState(1000)
    const [lock, setLock] = useState(false)
           
    const handleChange= (evt)=>{
        evt.persist()
        setsearchText(evt.target.value)   
        if(!lock){
            setLock(true)
            setTimeout(() => {
                search(evt.target.value)
            }, intervalRequest);
        }
    }
    const search=(text = '') =>{
        //console.log("--click--");
        if (text === ''){
            props.callback(searchText)
            setLock(false)
         } else{
             props.callback(text)
             setLock(false)
        }
       
    }
    return(<div className="row">
        <div className="col-lg-8 input-group">
            <input className="form-control input-lg" onChange={handleChange} placeholder={placeHolder}/>
            <span className="input-group-btn">
                <button className="btn btn-secondary" onClick={search} disabled >Go</button>  
            </span>
        </div>
        
        </div> )
}

export default SearchBar

