import React, { Component } from "react";
import styles from "./styles.scss";
import { Transform } from "stream";

class MenuHamber extends Component {
  state = {
    menu: false
  };
  handleActionMenu = () => {
    const line1 = $("#line1"),
      line2 = $("#line2"),
      line3 = $("#line3");
    let routeTransform = `rotateX(0deg) rotateY(0deg) translateX(0px) translateZ(0px)`;
    let transformBefore1 = `${routeTransform} translateY(5px) rotateZ(-45deg)`;
    let transformBefore2 = `rotateX(0deg) rotateY(0deg) rotateZ(-45deg)`;
    let transformBefore3 = `${routeTransform} translateY(-5px) rotateZ(-45deg)`;
    let transformAfter1 = `${routeTransform} translateY(5px) rotateZ(135deg)`;
    let transformAfter2 = `rotateX(0deg) rotateY(0deg) rotateZ(135deg)`;
    let transformAfter3 = `${routeTransform} translateY(-5px) rotateZ(45deg)`;

    if (this.state.menu) {
      transformBefore1 = `${routeTransform} translateY(5px) rotateZ(-45deg)`;
      transformBefore2 = `rotateX(0deg) rotateY(0deg) rotateZ(-45deg)`;
      transformBefore3 = `${routeTransform} translateY(-5px) rotateZ(-45deg)`;
      transformAfter1 = `${routeTransform} translateY(0px) rotateZ(0deg)`;
      transformAfter2 = `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      transformAfter3 = `${routeTransform} translateY(0px) rotateZ(0deg)`;
      this.setState({ menu: false });
    } else {
      this.setState({ menu: true });
    }
    line1.css(`transform`, transformBefore1);
    line2.css(`transform`, transformBefore2);
    line3.css("transform", transformBefore3);
    setTimeout(() => {
      line1.css(`transform`, transformAfter1);
      line2.css(`transform`, transformAfter2);
      line3.css(`transform`, transformAfter3);
    }, 250);
  };
  render() {
    return (
      <div
        className={styles.MenuHamber}
        onClick={() => this.handleActionMenu()}
      >
        <a href="#" data-ix="flipper-nav" className={styles.MenuAction}>
          <div className={styles.Line} id="line1" />
          <div className={styles.Line} id="line2" />
          <div className={styles.Line} id="line3" />
        </a>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { auth: state.auth };
// };

export default MenuHamber;
