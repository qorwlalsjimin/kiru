import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import Content from "./size_option/Content";
import ContentSize from "./size_option/ContentSize";
// import "../styles/global.css";

class CustomSelect extends Component {
  constructor(props) {
    super(props);
    this.ddHeaderRadius = false;
    this.ddHeaderExOff = false;
    this.state = {
      listOpen: false,
      headerTitle: ""
    };
    this.close = this.close.bind(this);
  }

  componentDidUpdate() {
    // console.log("componentdidUpdate", this.ddHeaderExOff);

    const { listOpen } = this.state;
    setTimeout(() => {
      if (listOpen) {
        window.addEventListener("click", this.close);
        this.state.ddHeaderRadius = false;
      } else {
        window.removeEventListener("click", this.close);
        this.state.ddHeaderRadius = true;
      }
    }, 0);
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount");

    window.removeEventListener("click", this.close);
  }

  close(timeOut) {
    // console.log("close");
    this.ddHeaderExOff = false;
    this.setState({
      listOpen: false
    });
  }

  selectItem(title, id, stateKey) {
    // console.log("selectItem");

    /* set radius when options appear */
    if (!this.state.listOpen) this.ddHeaderRadius = true;
    else this.ddHeaderRadius = false;

    this.setState(
      {
        headerTitle: title,
        listOpen: false
      },
      this.props.resetThenSet(id, stateKey)
    );
  }

  toggleList() {
    // console.log("toggleList");

    /* set radius when options appear */
    if (!this.state.listOpen) this.ddHeaderRadius = true;
    else this.ddHeaderRadius = false;

    /* disappear explanation when options appear */
    this.ddHeaderExOff = true;

    this.setState((prevState) => ({
      listOpen: true
    }));
  }

  render() {
    const { list } = this.props;
    const { listOpen, headerTitle } = this.state;
    return (
      <div className="dd-wrapper">
        <div
          className={`dd-header ${this.ddHeaderRadius && "dd-header-radius"}`}
          onClick={() => this.toggleList()}
        >
          <div>
            {headerTitle ? (
              <ContentSize headerTitle={headerTitle} listOpen={listOpen} />
            ) : (
              <Content listOpen={listOpen} ddHeaderExOff={this.ddHeaderExOff} />
            )}
          </div>
        </div>
        {listOpen && (
          <ul className="dd-list" onClick={(e) => e.stopPropagation()}>
            {list.map((item) => (
              <li
                className="dd-list-item"
                key={item.id}
                onClick={() => this.selectItem(item.title, item.id, item.key)}
              >
                {item.title} {item.selected && <FontAwesome name="check" />}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default CustomSelect;
