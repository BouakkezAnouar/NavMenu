import React, { Component } from "react";
import DropDownItem from "./DropDownItem";
class NavItem extends Component {
  render() {
    let navItem;
    let className = "dropbtn";
    if (this.props.isActive === true) {
      className += " active";
    }

    if (this.props.DropDownList) {
      navItem = (
        <DropDownItem
          Href={this.props.Href}
          Name={this.props.Name}
          isActive={this.props.isActive}
          DropDownList={this.props.DropDownList}
        />
      );
    } else
      navItem = (
        <div class="dropdown">
          <button className={className} href={this.props.Href}>
            {this.props.Name}
          </button>
        </div>
      );

    return navItem;
  }
}

export default NavItem;
