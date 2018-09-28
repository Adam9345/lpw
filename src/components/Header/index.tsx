import * as React from "react";
import { NavLink } from "react-router-dom";
import { IProps } from "./interfaces";
import "./style.css";

class Header extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  public renderItems() {
    const items = this.props.items;
    const tempItems = items.map((item, index) => {
      return (
        <li key={`item-${index}`} className={`nav-item`}>
          <NavLink
            exact={true}
            className="nav-link"
            to={item.url}
            activeClassName="selected"
          >
            {item.name}{" "}
            {index === 0 ? <span className="sr-only">(current)</span> : ""}
          </NavLink>
        </li>
      );
    });
    return tempItems;
  }

  public render() {
    return (
      <nav
        className={`navbar sticky-top navbar-expand-lg navbar-${
          this.props.theme
        } bg-${this.props.theme}`}
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/lpw/">
            {this.props.title}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">{this.renderItems()}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
