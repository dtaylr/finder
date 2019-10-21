import React, {useState, useContext} from 'react';
// import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/Alert/AlertContext'
import alertContext from '../../context/Alert/AlertContext';

//bring in context, initialize and then use with state. 
// const Search = ({searchUsers, showClear, clearUsers, setAlert}) =>{

const Search=() => { //destruc from state

    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

const onChange = e => setText(e.target.value) //only needs the value and not obj[]

const onSubmit= e =>{
        e.preventDefault()
        if(text === ''){
            alertContext.setAlert('Please Enter A Search', 'Light');
        }else{
        // searchUsers(text); no longer passing as prop.
        githubContext.searchUsers(text);
        setText('') //clears text
        console.log(text)
        }
    }

return (
    <div>
        <form className="form" onSubmit={onSubmit}>
            <input type="text" name="text" value={text} placeholder="Search Users" onChange={onChange} />
            <input type="submit" value="Search" className="btn btn-dark btn-block"/>
        </form>
       {/*{showClear && ( //if true, show clr
            <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
        )}*/}
        {githubContext.users.length > 0 &&(
         <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
        ) }
        </div>
        )

    }

    // Search.propTypes={
    //     // search: PropTypes.func.isRequired,
    //     // clearUsers: PropTypes.func.isRequired,
    //     // showClear: PropTypes.bool.isRequired,
    //     // setAlert: PropTypes.func.isRequired,    
    // }
    
    export default Search
// export class Search extends Component {
//     state={
//         text: ''
//     }

    // onChange = (e)=> {
    //     this.setState({[e.target.name]: e.target.value}); //shortcut vs using state ref
    // }
    // onSubmit=(e)=>{
    //     e.preventDefault()
    //     if(this.state.text === ''){
    //         this.props.setAlert('Please Enter A Search', 'Light');
    //     }else{
    //     this.props.searchUsers(this.state.text);
    //     this.setState({text: ''}) //clears text
    //     console.log(this.state.text)
    //     }
    // }


    // render() {

    //     // const {showClear, clearUsers} = this.props;
    //     return (
    //         <div>
    //             <form className="form" onSubmit={this.onSubmit}>
    //                 <input type="text" name="text" value={this.state.text} placeholder="Search Users" onChange={this.onChange} />
    //                 <input type="submit" value="Search" className="btn btn-dark btn-block"/>
    //             </form>
    //             {showClear && ( //if true, show clr
    //                 <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
    //             )}
    //           </div>
    //     )
    // }

