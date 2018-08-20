import React, { Component } from "react";
import styles from "./styles.scss";

class Footer extends Component {
  render() {
    return (
      <div className={styles.dathmFooter}>
        <footer>
          <div className="row">
            <div className="col-md-12">
              <div className={styles.footerSocial}>
                <ul className={styles.socialLinks}>
                  <li className="social-link-item facebook font-icon icon-medium">
                    <a
                      href="https://www.facebook.com/minhdat.001"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />{" "}
                    </a>
                  </li>
                  <li className="social-link-item twitter font-icon icon-medium">
                    <a href="https://twitter.com/?lang=vi" target="_blank">
                      <i className="fa fa-twitter" />{" "}
                    </a>
                  </li>
                  <li className="social-link-item google font-icon icon-medium">
                    <a
                      href="https://plus.google.com/u/1/108224163642553600677"
                      target="_blank"
                    >
                      <i className="fa fa-google-plus" />{" "}
                    </a>
                  </li>
                  <li className="social-link-item youtube font-icon icon-medium">
                    <a
                      href="https://www.youtube.com/channel/UC38wpzZNeQkbatGaV7ZsX1Q"
                      target="_blank"
                    >
                      <i className="fa fa-youtube" />{" "}
                    </a>
                  </li>
                  <li className="social-link-item instagram font-icon icon-medium">
                    <a
                      href="https://www.instagram.com/ha.m.dat_z.a.o_/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.footerLicence}>
                <p>Copyright © React Template 2018</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
