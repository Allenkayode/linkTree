// import logo from './logo.svg';
import profileImg from "../src/images/profile-img.png"
import profileImgHover from "../src/images/cam_icon.png"
import shareIcon from "../src/images/share_icon.png"
import gitHubIcon from "../src/images/Icon.png"
import blueSlack from "../src/images/bluesSlack.png"
import redSlack from "../src/images/redSlack.png"
import greenSlack from "../src/images/greenSlack.png"
import yellowSlack from "../src/images/yellowSlack.png"
import menuIcon from "../src/images/menu.png"
import zuri_intern from "../src/images/zuri.png"
import i4g  from "../src/images/I4G.png"
import redot from "../src/images/redot.png"

import './App.css';

function App() {
  const twitterLink= "https://twitter.com/Allenkayode3/";
  const zuri = "https://training.zuri.team/";
  const books_python = "https://books.zuri.team/";
  const pitch = " https://background.zuri.team";
  const design ="https://books.zuri.team/design-rules";
  const gitHubLink ="https://github.com/siafromspace";


  return (
    <div className="App">
    <header>
      <div>
        <div className="container-header">
          <img id="profile_img" src={profileImg} alt="profile_avatar" />
          <img id="profile_hover" src={profileImgHover} alt="profile_hover" />
          <h1 id="twitter">Allen kayode</h1>
          <p id="slack">timiallen</p>
        </div>
        <div className="otherButtons">
        <img className="shareIcon" src={shareIcon} alt="share button" />
        <img className="menuIcon" src={menuIcon} alt="menu button" />
        </div>
      </div>
    </header>
    <body>
      <div className="button-container">
        <a id="btn_zuri" href={twitterLink} className="links">
          <button>Twitter Link</button>
        </a>
        <a id="btn_zuri" href={zuri} className="links" >
  
          <button>Zuri Team</button>
        </a>
        <a id="book__python" href={books_python} className="links">
          <button>python books</button>
        </a>
        <a id="pitch" href={pitch} className="links" >
          <button>Background Check For Coders</button>
        </a>
        <a id="book__design" href={design} className="links">
          <button>Design books</button>
        </a>
      </div>
      <div className="social_link">

      <div className="slack_icon">
        <div className="upperIcon">
          <img  src={blueSlack} alt="slack"/>
          <img  src={greenSlack} alt="slack"/>  
        </div>
        
        <div className="lowerIcon">
          <img src={redSlack} alt="slack"/>
          <img src={yellowSlack} alt="slack"/>
        </div>
  
        </div>
        <a href={gitHubLink}>
        <img className="gitHub" src={gitHubIcon} alt="gitHub"/>
        </a>
        
      
      </div>
      <footer>
      <div>
          <img src={zuri_intern} alt="i4g logo"/>
          <img className="red-dot" src={redot} alt="redDot" />
        </div>

        <p> HNG INTERNSHIP 9 FRONTEND TASK</p>

        <div>
          <img src={i4g} alt="I4G" />
        </div>
      </footer>
    </body>
  </div>
  );
}

export default App;
