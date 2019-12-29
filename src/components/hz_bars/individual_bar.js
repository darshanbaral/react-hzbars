import React, { Fragment } from "react";

class IndividualBar extends React.Component {
  state = {
    bg: this.props.colors.primary,
    width: 0,
    display: "none",
    left: "0",
    top: "0"
  };

  handleMouseEnter = event => {
    this.setState({
      bg: this.props.colors.primaryHover,
      display: this.props.showValue ? "block" : "none"
    });
  };

  handleMouseLeave = () => {
    this.setState({
      bg: this.props.colors.primary,
      display: "none"
    });
  };

  handleMouseMove = event => {
    if (this.state.display === "block") {
      this.setState({
        left: `${event.clientX + 15}px`,
        top: `${event.clientY}px`
      });
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ width: this.props.width });
    }, 0);
  }

  render() {
    return (
      <Fragment>
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onMouseMove={this.handleMouseMove}
          style={{
            textAlign: "left",
            width: `${Math.max(1, this.state.width)}%`,
            height: this.props.height,
            boxSizing: "border-box",
            backgroundColor: this.state.bg,
            borderTopLeftRadius: this.props.borderRadius,
            borderBottomLeftRadius: this.props.borderRadius,
            transition: this.props.delay
              ? `width ${this.props.delay}, background-color 0.2s`
              : "width 0.5s, background-color 0.2s"
          }}
        >
          {this.props.showValue ? (
            <p
              style={{
                margin: "0",
                padding: "2px",
                display: this.state.display,
                position: "fixed",
                left: this.state.left,
                top: this.state.top,
                color: this.props.colors.hoverText
              }}
            >
              {`${this.props.width}%`}
            </p>
          ) : (
            ""
          )}
        </div>
      </Fragment>
    );
  }
}

export default IndividualBar;
