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
        <ul className="navItem">
          <li>
            <a href="#">map</a>
          </li>
          <li>
            <a href="#">news</a>
          </li>
          <li>
            <a href="#">career</a>
          </li>
          <li>
            <a href="#">conatct</a>
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
        <a href="#">map</a>
      </li>
      <li onClick={props.clickSide}>
        <a href="#">news</a>
      </li>
      <li onClick={props.clickSide}>
        <a href="#">career</a>
      </li>
      <li onClick={props.clickSide}>
        <a href="#">conatct</a>
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
      {props.more ? "Click2Show" : "Click2Hide"}
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
        title: "Content Box 1",
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate`,
        id: 1,
        isShow: true,
      },
      {
        title: "Content Box 2",
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate`,
        id: 2,
        isShow: true,
      },
      {
        title: "Content Box 3",
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate`,
        id: 3,
        isShow: true,
      },
      {
        title: "Content Box 4",
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate`,
        id: 4,
        isShow: true,
      },
    ],
    article2: [
      {
        title: "Content Box 5",
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate`,
        id: 5,
        isShow: false,
      },
      {
        title: "Content Box 6",
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate`,
        id: 6,
        isShow: false,
      },
      {
        title: "Content Box 7",
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate`,
        id: 7,
        isShow: false,
      },
      {
        title: "Content Box 8",
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate`,
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
    return this.state.mainTitle ? "Hello yuping !" : "YOU JUST CLICKED!!!";
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
          logoTitle="JIM63"
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
