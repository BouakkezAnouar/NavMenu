import React, { Component } from "react";
import NavItem from "./NavItem";

class NavMenu extends Component {
  state = {
    ListItem: [
      {
        Href: "#",
        isActive: true,
        Name: "home"
      },
      {
        Href: "#",
        isActive: false,
        Name: "about",
        //dropdown list
        DropDownList: [
          {
            Href: "#",
            Name: "1"
          },
          {
            Href: "#",
            Name: "2"
          }
        ]
      },
      {
        Href: "#",
        isActive: false,
        Name: "contact"
      },
      {
        Href: "#",
        isActive: false,
        Name: "sports",
        //dropdown list
        DropDownList: [
          {
            Href: "#",
            Name: "football"
          },
          {
            Href: "#",
            Name: "basketball"
          },
          {
            Href: "#",
            Name: "hockey"
          }
        ]
      }
    ]
  };

  render() {
    console.log(this.state.ListItem);

    return (
      <div align="center">
        {this.state.ListItem.map((item, i) => (
          <NavItem
            key={i}
            Href={item.Href}
            isActive={item.isActive}
            Name={item.Name}
            DropDownList={item.DropDownList}
          />
        ))}
      </div>
    );
  }
}

export default NavMenu;
