import React from "react";
import IndividualBar from "./individual_bar";

class HorizontalBars extends React.Component {
  data = this.props.data ? this.props.data : [{ name: "A", value: 50 }];

  colors = {
    primary:
      this.props.colors && this.props.colors.primary
        ? this.props.colors.primary
        : "#5300e8",
    primaryHover:
      this.props.colors && this.props.colors.primaryHover
        ? this.props.colors.primaryHover
        : "#1c00db",
    secondary:
      this.props.colors && this.props.colors.secondary
        ? this.props.colors.secondary
        : "#d4bff9",
    border:
      this.props.colors && this.props.colors.border
        ? this.props.colors.border
        : "#0000d6",
    hoverText:
      this.props.colors && this.props.colors.hoverText
        ? this.props.colors.hoverText
        : "white"
  };

  sizes = {
    borderThickness:
      this.props.sizes && this.props.sizes.borderThickness
        ? this.props.sizes.borderThickness
        : "2px",
    borderRadius:
      this.props.sizes && this.props.sizes.borderRadius
        ? this.props.sizes.borderRadius
        : "10px",
    barHeight:
      this.props.sizes && this.props.sizes.barHeight
        ? this.props.sizes.barHeight
        : "20px",
    marginBottom:
      this.props.sizes && this.props.sizes.marginBottom
        ? this.props.sizes.marginBottom
        : "10px",
    nameWidth:
      this.props.sizes && this.props.sizes.nameWidth
        ? this.props.sizes.nameWidth
        : "25px"
  };

  delay = this.props.delay ? this.props.delay : "0.3s";

  render() {
    if (this.props.sortBars) {
      this.data.sort((a, b) => (a.value > b.value ? -1 : 1));
    }

    const bars = this.data.map((el, ind) => {
      return (
        <div
          key={`bar${ind}`}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom:
              ind === this.data.length - 1 ? "0" : this.sizes.marginBottom
          }}
        >
          {this.props.showNames ? (
            <code
              style={{
                minWidth: this.sizes.nameWidth,
                margin: "0",
                padding: "0"
              }}
            >
              {el.name}
            </code>
          ) : (
            ""
          )}
          <div
            style={{
              height: this.sizes.barHeight,
              width: "100%",
              boxSizing: "border-box",

              border: `solid ${this.colors.border} ${
                this.sizes.borderThickness
              }`,
              borderRadius: this.sizes.borderRadius,
              backgroundColor: this.colors.secondary,
              overflow: "hidden"
            }}
          >
            <IndividualBar
              name={el.name}
              width={el.value}
              height={this.sizes.barHeight}
              colors={{
                primary: this.colors.primary,
                primaryHover: this.colors.primaryHover,
                hoverText: this.colors.hoverText
              }}
              delay={this.delay}
              showValue={this.props.showValues}
            />
          </div>
        </div>
      );
    });

    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {bars}
      </div>
    );
  }
}

export default HorizontalBars;
