import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="nav-container">
          <div className="logo">
            <NavLink to={"/"}>Tomos</NavLink>
          </div>

          <div className="links">
              <NavLink to={"https://github.com/tmqf"} target="_blank">Github</NavLink>
              <NavLink to={"https://anilist.co/user/javascript"} target="_blank">Anilist</NavLink>
          </div>
      </nav>

      <section className="main-section">
        <img src="https://avatars.githubusercontent.com/u/67664316?v=4"></img>
        <h1>Hey 👋 <br/>I'm <span>Tomos</span></h1>
        <p>I'm a college student based in Wales. <br/> Currently trying to learn C++ for Game Development. <br/> More information on <a href="https://github.com/tmqf" target="_blank">Github!</a></p>
      </section>

    </div>
  );
}

export default App;
