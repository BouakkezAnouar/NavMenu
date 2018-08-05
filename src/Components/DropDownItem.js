import React, { Component } from "react";
class DropDownItem extends Component {
  render() {
    let className = "dropbtn";
    if (this.props.isActive) className += " active";
    return (
      <div className="dropdown">
        <button className={className}>Dropdown</button>
        <div className="dropdown-content">
          {this.props.DropDownList.map((dropDown, i) => (
            <a key={i} href={dropDown.Href}>
              {dropDown.Name}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default DropDownItem;
