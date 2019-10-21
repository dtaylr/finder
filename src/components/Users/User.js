import React, { useEffect, Fragment, useContext } from 'react'
import Spinner from '../Loading/Spinner';
// import PropTypes from 'prop-types';
import Repos from '../Repos/Repos'
import {Link} from 'react-router-dom';
import GithubContext from '../../context/github/githubContext'

// const User = ({user, loading, getUser, getUserRepos, repos, match})=> {  //props

const User = ({match}) => {
    const githubContext = useContext(GithubContext)

    const {getUser, loading, user, getUserRepos,repos} = githubContext

    useEffect(()=>{
            getUser(match.params.login);
            getUserRepos(match.params.login);
            // eslint-disable-next-line
            }, []);


            const {
                name,
                avatar_url,
                bio,
                blog,
                location,
                followers,
                following,
                public_repos,
                company,
                hireable,
                public_gists,
                html_url,
                login
            } = user;

            if(loading){
                return <Spinner/>
                }else{

        return(
            <Fragment>
                <Link to='/' className="btn btn-light">Back To Search
                </Link>
                Hireable: {' '}
                {hireable ? (<i className="fa fa-check text-success"/> ): (<i className="fa fa-times-circle text-danger"/>)}
                .<div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" alt="hom" style={{width: '150px'}}/>
                        <h1>{name}</h1>
                        <p>{location}</p>
                    </div>
                    <div>
                    {bio && (
                        <Fragment>
                        <h3>Bio</h3>1
                        <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} className="btn  btn-dark my-1">Visit Profile</a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>Username: {login} </strong>
                            </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Website: {blog} </strong>
                            </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong>Company: {company}</strong>
                            </Fragment>}
                        </li>   
                    </ul>
                </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-light">Public Repos: {public_repos}</div>
                    <div className="badge badge-dark">Public Gist: {public_gists}</div>
                </div>
                <Repos repos={repos}/>
                </Fragment>
        )
}
// export class User extends Component {
//     componentDidMount(){
//         this.props.getUser(this.props.match.params.login);
//         this.props.getUserRepos(this.props.match.params.login);
//     }

//     static propTypes={
//         loading: PropTypes.bool,
//         user: PropTypes.object.isRequired,
//         getUser: PropTypes.func.isRequired,
//         getUserRepos: PropTypes.func.isRequired,
//         repos: PropTypes.array.isRequired,
//     }

//     render() {
//         const {
//             name,
//             avatar_url,
//             bio,
//             blog,
//             location,
//             followers,
//             following,
//             public_repos,
//             company,
//             hireable,
//             public_gists,
//             html_url,
//             login
//         } = this.props.user;

//         const {loading, repos} = this.props;

//         if(loading){
//             return <Spiner/>
//         }else{
//         return (
//             <Fragment>
//                 <Link to='/' className="btn btn-light">Back To Search
//                 </Link>
//                 Hireable: {' '}
//                 {hireable ? (<i className="fa fa-check text-success"/> ): (<i className="fa fa-times-circle text-danger"/>)}
//                 .<div class="card grid-2">
//                     <div className="all-center">
//                         <img src={avatar_url} className="round-img" alt="hom" style={{width: '150px'}}/>
//                         <h1>{name}</h1>
//                         <p>{location}</p>
//                   </div>
//                     <div>
//                     {bio && (
//                         <Fragment>
//                         <h3>Bio</h3>
//                         <p>{bio}</p>
//                         </Fragment>
//                     )}
//                     <a href={html_url} className="btn  btn-dark my-1">Visit Profile</a>
//                     <ul>
//                         <li>
//                             {login && <Fragment>
//                                 <strong>Username: {login} </strong>
//                             </Fragment>}
//                         </li>
//                         <li>
//                             {blog && <Fragment>
//                                 <strong>Website: {blog} </strong>
//                             </Fragment>}
//                         </li>
//                         <li>
//                             {company && <Fragment>
//                                 <strong>Company: {company}</strong>
//                             </Fragment>}
//                         </li>   
//                     </ul>
//                 </div>
//                 </div>
//                 <div className="card text-center">
//                     <div className="badge badge-primary">Followers: {followers}</div>
//                     <div className="badge badge-success">Following: {following}</div>
//                     <div className="badge badge-light">Public Repos: {public_repos}</div>
//                     <div className="badge badge-dark">Public Gist: {public_gists}</div>
//                 </div>
//                 <Repos repos={repos}/>
//              </Fragment>
//         )
//     }
//     }
// }
}
    // User.propTypes={
    //     // loading: PropTypes.bool,
    //     // user: PropTypes.object.isRequired,
    //     // getUser: PropTypes.func.isRequired,
    //     getUserRepos: PropTypes.func.isRequired,
    //     repos: PropTypes.array.isRequired,
// }

export default User
