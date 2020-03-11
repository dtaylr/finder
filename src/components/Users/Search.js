import React, {useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/Alert/AlertContext'


const Search=() => { 

    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

const onChange = e => setText(e.target.value) 

const onSubmit= e =>{
        e.preventDefault()
        if(text === ''){
            alertContext.setAlert('Please Enter A Search', 'Light');
        }else{
        githubContext.searchUsers(text);
        setText('')  
        console.log(text)
        }
    }

return (
    <div>
        <form className="form" onSubmit={onSubmit}>
            <input type="text" name="text" value={text} placeholder="Search Users" onChange={onChange} />
            <input type="submit" value="Search" className="btn btn-dark btn-block"/>
        </form>
       
        {githubContext.users.length > 0 &&(
         <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
        ) }
        </div>
        )

    }
    
    export default Search
