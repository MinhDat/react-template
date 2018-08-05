import React, { Component } from "react";
import styles from "./styles.scss";

class MenuHamber extends Component {
  state = {
    menu: false
  };
  handleActionMenu = () => {
    const line1 = $("#line1"),
      line2 = $("#line2"),
      line3 = $("#line3"),
      MenuContent = $(`.${styles.MenuContent}`),
      ItemHome = $(`.${styles.ItemHome}`),
      ItemAboutMe = $(`.${styles.ItemAboutMe}`),
      ItemProject = $(`.${styles.ItemProject}`);

    let routeTransform = `rotateX(0deg) rotateY(0deg) translateX(0px) translateZ(0px)`;
    let transformBefore1 = `${routeTransform} translateY(5px) rotateZ(-45deg)`;
    let transformBefore2 = `rotateX(0deg) rotateY(0deg) rotateZ(-45deg)`;
    let transformBefore3 = `${routeTransform} translateY(-5px) rotateZ(-45deg)`;
    let transformAfter1 = `${routeTransform} translateY(5px) rotateZ(135deg)`;
    let transformAfter2 = `rotateX(0deg) rotateY(0deg) rotateZ(135deg)`;
    let transformAfter3 = `${routeTransform} translateY(-5px) rotateZ(45deg)`;

    let mcOpacity = {
        opacity: 1
      },
      projectDelay = 200;

    if (this.state.menu) {
      transformBefore1 = `${routeTransform} translateY(5px) rotateZ(-45deg)`;
      transformBefore2 = `rotateX(0deg) rotateY(0deg) rotateZ(-45deg)`;
      transformBefore3 = `${routeTransform} translateY(-5px) rotateZ(-45deg)`;
      transformAfter1 = `${routeTransform} translateY(0px) rotateZ(0deg)`;
      transformAfter2 = `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      transformAfter3 = `${routeTransform} translateY(0px) rotateZ(0deg)`;
      mcOpacity = {
        opacity: 0
      };
      projectDelay = 100;
      this.setState({ menu: false });
      setTimeout(() => {
        this._transformAnimation(MenuContent, 380, 300, mcOpacity);
      }, 200);
    } else {
      this.setState({ menu: true });
      this._transformAnimation(MenuContent, 380, 200, mcOpacity);
    }
    //Menu hamburger
    line1.css(`transform`, transformBefore1);
    line2.css(`transform`, transformBefore2);
    line3.css("transform", transformBefore3);
    setTimeout(() => {
      line1.css(`transform`, transformAfter1);
      line2.css(`transform`, transformAfter2);
      line3.css(`transform`, transformAfter3);
    }, 250);
    //Item menu
    this._transformAnimation(ItemHome, 120, 200, mcOpacity);
    this._transformAnimation(ItemAboutMe, 96, 300, mcOpacity);
    this._transformAnimation(ItemProject, 80, projectDelay, mcOpacity);
  };

  _transformAnimation(element, value, delay, animateOp, cssOp) {
    element.animate(
      animateOp,
      {
        step: function(now, fx) {
          $(this).css({
            transform: `translateX(${(now - 1) *
              value}px) translateY(0px) translateZ(0px)`,
            ...cssOp
          });
        },
        duration: delay
      },
      "linear"
    );
  }

  render() {
    return (
      <div
        className={styles.MenuHamburger}
        onClick={() => this.handleActionMenu()}
      >
        <a href="#" className={styles.MenuAction}>
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
