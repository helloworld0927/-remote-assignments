const Nav = (props) => {
  return (
    <nav>
      <div className="container nav">
        <h2>{props.logoTitle}</h2>
        <div
          className={props.showHideMenu()}
          id="ham"
          onClick={() => props.handleMenuClick()}
        >
          <div className="menu bar1" />
          <div className="menu bar2" />
          <div className="menu bar3" />
        </div>
        <ul className="navbar">
          <li>
            <a href="#">Item1</a>
          </li>
          <li>
            <a href="#">Item2</a>
          </li>
          <li>
            <a href="#">Item3</a>
          </li>
          <li>
            <a href="#">Item4</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Sidenav = (props) => {
  return (
    <div id="side" className={props.showHideSide()}>
      <li onClick={props.clickSide}>
        <a href="#">Item1</a>
      </li>
      <li onClick={props.clickSide}>
        <a href="#">Item2</a>
      </li>
      <li onClick={props.clickSide}>
        <a href="#">Item3</a>
      </li>
      <li onClick={props.clickSide}>
        <a href="#">Item4</a>
      </li>
    </div>
  );
};

const Main = (props) => {
  return (
    <div className="container">
      <h1 className="title" onClick={props.handleTitleClick}>
        {props.mainTitle}
      </h1>
    </div>
  );
};

const Button = (props) => {
  return (
    <div
      className="button"
      onClick={() => {
        props.action();
      }}
    >
      {props.more ? "Click to more" : "Hide"}
    </div>
  );
};

const Article = (props) => {
  return (
    <article>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </article>
  );
};

class App extends React.Component {
  state = {
    article: [
      {
        title: "Content Box1",
        id: 1,
        isShow: true,
      },
      {
        title: "Content Box2",
        id: 2,
        isShow: true,
      },
      {
        title: "Content Box3",
        id: 3,
        isShow: true,
      },
      {
        title: "Content Box4",
        id: 4,
        isShow: true,
      },
    ],
    article2: [
      {
        title: "Content Box5",
        id: 5,
        isShow: false,
      },
      {
        title: "Content Box6",
        id: 6,
        isShow: false,
      },
      {
        title: "Content Box7",
        id: 7,
        isShow: false,
      },
      {
        title: "Content Box8",
        id: 8,
        isShow: false,
      },
    ],
    menuOpen: false,
    fewContent: true,
    mainTitle: true,
  };

  handleMenuClick = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  };

  clickSide = () => {
    this.setState({
      menuOpen: false,
    });
  };

  showHideMenu = () => {
    return this.state.menuOpen ? "ham change" : "ham";
  };

  showHideSide = () => {
    return this.state.menuOpen ? "" : "hide";
  };

  action = () => {
    this.setState((prevState) => ({
      fewContent: !prevState.fewContent,
    }));
  };

  style = () => {
    return this.state.fewContent ? "addContent" : "";
  };

  mainTitle = () => {
    return this.state.mainTitle ? "Click Me!" : "Have FUN!";
  };

  handleTitleClick = () => {
    this.setState((prevState) => ({
      mainTitle: !prevState.mainTitle,
    }));
  };

  render() {
    return (
      <div>
        <Nav
          logoTitle="Week 4 A3"
          open={this.state.menuOpen}
          handleMenuClick={this.handleMenuClick}
          showHideMenu={this.showHideMenu}
        />
        <Main
          mainTitle={this.mainTitle()}
          handleTitleClick={this.handleTitleClick}
        />
        <Sidenav showHideSide={this.showHideSide} clickSide={this.clickSide} />
        <div className="container article">
          {this.state.article.map((article) => (
            <Article
              title={article.title}
              content={article.content}
              id={article.id}
            />
          ))}
        </div>
        <div className="container article" id={this.style()}>
          {this.state.article2.map((article2) => (
            <Article
              title={article2.title}
              content={article2.content}
              id={article2.id}
            />
          ))}
        </div>

        <Button action={this.action} more={this.state.fewContent} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));