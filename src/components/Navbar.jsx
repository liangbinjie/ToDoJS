import '../App.css'
import logo from '../assets/logo.png';
import { useAuth, githubLogin } from "../context/AuthProvider";
import { IonLogoGithub, Exit } from '../assets/icons';

export default function Navbar() {
    const {auth, signOut} = useAuth();
    const { user } = useAuth();

    const handleLogout = async (e) => {
      e.preventDefault();
      try {
        console.log(user.user_metadata.user_name);
        const { error } = await signOut();
        console.log(error);
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid ms-3">
              <a className="navbar-brand" href="/"><img src={logo} alt="TodoJS Logo" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto me-3">
                  <li className="nav-item px-3">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                  </li>

                  {/* {!auth && (
                  // <li className="nav-item px-3">
                  //   <a className="nav-link" href="/login">Sign In </a>
                  // </li>
                  )} */}
                  
                  {auth && (
                  <>
                  <li className="nav-item px-3">
                    <a className="nav-link" href='/dashboard'>Dashboard</a>
                  </li>
                  <li className="nav-item px-3">
                    <a className="nav-link" onClick={handleLogout} href='/home'><Exit/></a>
                  </li>
                  </>
                  )}
                  {!auth && ( 
                    <li className="nav-item">
                      <a className="nav-link signup px-3" onClick={githubLogin} href="#">Login with <IonLogoGithub/></a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
};
