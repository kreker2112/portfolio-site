import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Alex</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href="https://cv.djinni.co/66/8e5b9b398e80d58ba70abca860a49d/CV_Oleksandr_Tkachov_Fullstack__VUE3_.NET_NodeJS__Developer.pdf"
          className="btn"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
