import React, { Component } from "react";
import styles from "./styles.scss";

class About extends Component {
  render() {
    return (
      <div>
        <h3>About template</h3>
        <p>
          This website is builded on React client-side template, And it is in
          the process of perfection.
        </p>
        <ul>
          <li>
            Source code:{" "}
            <a href="https://github.com/MinhDat/react-template">
              https://github.com/MinhDat/react-template
            </a>
          </li>
          <li>
            React server side rendering (In the process of development):{" "}
            <a href="https://github.com/MinhDat/react-ssr-template">
              https://github.com/MinhDat/react-ssr-template
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default About;
