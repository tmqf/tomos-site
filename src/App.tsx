import { useState } from "react";
import Card from './Card';

function App() {
  const [isProjectPanelOpen, setIsProjectPanelOpen] = useState(false);
  const [isLinksPanelOpen, setIsLinksPanelOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('animate-fadeIn');

  const handleProjectButtonClick = () => {
    setIsProjectPanelOpen(true);
  };

  const handleLinksButtonClick = () => {
    setIsLinksPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsProjectPanelOpen(false);
    setIsLinksPanelOpen(false);
  };

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <div className="flex flex-col items-center">
        <img
          src="https://avatars.githubusercontent.com/u/67664316?v=4"
          className="rounded-full mb-4"
          style={{ width: "200px", height: "200px" }}
          alt="Profile"
        />
        <h1 className="text-center text-3xl font-bold">Hey 👋<br />I'm <span className="text-red-300">Tomos</span></h1>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <button
          className="bg-red-300 hover:bg-red-400 transition-colors duration-300 px-4 py-2 rounded-lg text-xl mb-4"
          onClick={() => {
            setAnimationClass('animate-fadeIn');
            handleProjectButtonClick();
          }}
        >
          Projects
        </button>
        <button 
          className="bg-red-300 hover:bg-red-400 transition-colors duration-300 px-4 py-2 rounded-lg text-xl"
          onClick={() => {
            setAnimationClass('animate-fadeIn');
            handleLinksButtonClick();
          }}
        >
          Links
        </button>
      </div>

      {isProjectPanelOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-50">
          <div className={`bg-white w-full h-full lg:w-2/3 lg:h-2/3 sm:w-full sm:h-full rounded-lg flex flex-col items-center shadow-custom ${animationClass}`}>
            <button
              className="absolute top-4 right-4 text-red-300 hover:text-red-400 transition-colors duration-300"
              onClick={() => {
                setAnimationClass('animate-fadeOut');
                setTimeout(handleClosePanel, 800);
              }}
            >
              X
            </button>
            <div className="flex flex-wrap justify-center mt-4 gap-4 h-full overflow-y-auto">
              <Card
                title="Eirlys"
                description="Discord bot written in Rust"
                imageUrl="/assets/placeholder-hanni.jpg"
                redirectUrl="https://github.com/tmqf/Eirlys"
                date="2023 - Current"
                finished={false}
                currentProject={true}
              />

              <Card
                title="Token"
                description="Website created in Flask"
                imageUrl="/assets/placeholder-minji.jpg"
                redirectUrl="https://github.com/tmqf/Token"
                date="2022 - 2023"
                finished={false}
                currentProject={false}
              />
            </div>
          </div>
        </div>
      )}

      {isLinksPanelOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-50">
          <div className={`bg-white w-full h-full sm:w-full sm:h-full lg:w-2/3 lg:h-2/3 rounded-lg flex flex-col items-center shadow-custom ${animationClass}`}>
            <button
              className="absolute top-4 right-4 text-red-300 hover:text-red-400 transition-colors duration-300 md:top-0"
              onClick={() => {
                setAnimationClass('animate-fadeOut');
                setTimeout(handleClosePanel, 800);
              }}
            >
              X
            </button>
            <div className="flex flex-wrap justify-center mt-4 gap-4 h-full overflow-y-auto">
              <Card
                title="Github"
                description="My Github profile which contains all my projects. Unfinished, finished, and current."
                imageUrl="https://drive.google.com/file/d/1S7CGc_EGzPtpn52KC6fx2Jsw4olWyEUW/view?usp=sharing"
                redirectUrl="https://github.com/tmqf"
              />

              <Card
                title="Twitter (X)"
                description="My private Twitter account. Unrelated to programming"
                imageUrl="/assets/twitter.png"
                redirectUrl="https://twitter.com/tmqf_"
              />

              <Card
                title="Discord"
                description="My personal Discord account. Feel free to add me."
                imageUrl="https://lh3.google.com/u/0/d/14bV76ITg6EaPzYYCBA52tmllw3jPw-jI=w1920-h963-iv1"
                redirectUrl="http://discordapp.com/users/790506160523706388"
              />

              <Card
                title="Anilist"
                description="Personal Anilist, feel free to follow me."
                imageUrl="https://lh3.googleusercontent.com/fife/AGXqzDk83Y3cYXTfaDwa8lfCjHYQft9ReSHikbYzVlx0cjmOHJmlPS2km7ayiDy0KYyhOdcNFM-6F-Q16HFFVflEpBFvYBnvv05AoDg23Sg3ngd2UacRiBXsD7o-WvSUmeGpP_F3tpMBrdiA0eRI_X6S2CPW3H3gePuWQGg1E5dS3gmlKRy7XmJbQGj-VHGmnamhtlbB2OgNf9pRucoygkl6_E5hGlO3MAuRVSyZXsU0phKNqr7kB0Es7N8TyndpDJoRu22Hc8Pk-P1On6OTYagLDS8gibaSQ-7v3-1QOH7aGyimmlzV1mZGFCWtbLxB-IOsnWCSEO0wqh6I3UEGROFBuhDJScUtDP8aJM-ED57eBqR51MF1QQeCqZlP9ZFtejug1UtvLQaXuSW_zp1MsFN8QKnl3Q-hDHRBZ4OPqbkcL7_QHCQrcqmN7YnYPYa4XKeVPXyT0v7gaRVJxSgYQszHRWFYh6XhHnw7r5Q1WRoldWiMlldkEB30SXRnGiIwXQR2u1xwhQHO6dtY-_0nIJRBU0KVkUGPinF2eQgQa8QYhVJ4Lkl5PFwSBOJazZrRyEqePEGuYZ6frzGPM-UIurpKwvb2grYyJJ0jXCgMLTMCECA4ova18FrJbK_MNE3UQRAfOMaHseLZyyqYDOljGndhJNAT0eY6F6FrrVEPj6NNZR4zYdz7wxbqSZttABkzB1sgKH5Nz0WAxP_Bi0NOBjqfbTY_yjRcD7ij4PSyddOk-bTXKnXWa-jW8vnGvcbd1BXzFy_LXiiDj4t_OAninghnTSve1abFvp3d5XR8Z8XiXZRvcoeAzQHa06TZa0QO7-_J7SiOEyTHVHI10BY8xXHU0U9CIyEOuJdb8kKsSbavttTyq8-_KrlNhIh9lC2JHcgS_Ank1m90ggDrOrxUMiqFUeel9nn6-obxLOAaVQ3X12O-=w1920-h963"

                redirectUrl="https://anilist.co/user/javascript/"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
