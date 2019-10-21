// import React, {useState, Fragment}from 'react';
import React from 'react';
import GithubState from '../src/context/github/GithubState'
import './App.css';
import Navbar from '../src/components/Navbar/Navbar'
// import UserItem from './Users/UserItem'
// import Loading from './components/Loading/loading.gif'
// import Users from '../src/components/Users/Users';
// import Search from '../src/components/Users/Search';
import Home from './components/Pages/Home'
import Alert from '../src/components/Alert/Alert'
// import axios from 'axios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import User from '../src/components/Users/User'
import About from '../src/components/Pages/About'
import AlertState from './context/Alert/AlertState'
import NotFound from './components/Pages/NotFound'


const App =()=>{

  return (
    <GithubState>
      <AlertState>
        <Router>
            <Navbar/>
              <div className="container">
              {/*<Alert alert={alert}/>*/}
              <Alert/>
              <Switch>
                <Route exact path='/' component={Home}/>
                   {/* <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={users.length > 0 ? true: false} setAlert={showAlert}/>*/}
                    {/*<Users loading={loading} users={users}/>*/}
                    {/*<Search setAlert={showAlert}/>*/}
                <Route exact path='/about' component={About}/> 
                <Route exact path='/user/:login' component={User}/>
                <Route component={NotFound}/>
                  {/*<User {...props} getUser={getUser} getUserRepos={getUserRepos} repos={repos} user={user} loading={loading}
                  />
                  <User  />*/}
              </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}
export default App;

  // const [users, setUsers] = useState([]); not being passed
  // const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);

// class App extends Component {
//   state={
//     users: [],
//     user: {},
//     repos: [],
//     loading: false,
//     alert: null
//   }

//  async componentDidMount(){
//    console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
//    this.setState({loading: true})
//    const res = await axios.get('https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}')
//     // console.log(res.data);
//     this.setState({users: res.data, loading: false})
//   }

  //added async in props since arrow function instead

  //backticks
  // const searchUsers = async text => {
  //   setLoading(true);

  //   const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   console.log(text)

  //   setUsers(res.data.items);
  //   setLoading(false)
  // }
//single User. Have to deaclare them since not part of classs
//  const getUser = async username => {
//     setLoading(true);

//     const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

//     setUser(res.data)
//     setLoading(false)
//   }

  //get repos for user
//  const getUserRepos = async username => {
//     setLoading(true);

//     const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

//     setRepos(res.data)
//     setLoading(false)
//   }

  //clearUsers
// const clearUsers = () => {
//     setUsers([]);
//     setLoading(false);
// }

//can also input x method to clear
// const showAlert = (msg, type) =>{
//   setAlert({msg, type}) //set by Search component
//   setTimeout(()=>setAlert(null), 5000)
// }

  // render(){
  //     const {users, user, loading, repos} = this.state

