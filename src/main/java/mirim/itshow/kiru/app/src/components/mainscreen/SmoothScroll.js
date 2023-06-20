import React from "react";

export default class SmoothScroll extends React.Component {
  state = {
    height: window.innerHeight
  }

  render() {
    return (
      <>
        <div className="viewport" ref={ref => (this.viewport = ref)}>
          {this.props.children}
        </div>
        <div
          ref={ref => (this.fake = ref)}
          style={{
            height: this.state.height
          }}
        />
      </>
    );
  }
}