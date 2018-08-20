import React, { Component } from "react";
import styles from "./styles.scss";

class About extends Component {
  render() {
    return (
      <div className={styles.aboutContain}>
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
        <h5>The main integrators:</h5>
        <ul>
          <li>
            Webpack:{" "}
            <a href="https://webpack.js.org/concepts/">
              https://webpack.js.org/concepts/
            </a>
          </li>
          <li>
            Redux & redux-saga:{" "}
            <a href="https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html">
              https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html
            </a>
          </li>
          <li>
            React-router-dom:{" "}
            <a href="https://reacttraining.com/react-router/web/example/basic">
              https://reacttraining.com/react-router/web/example/basic
            </a>
          </li>
          <li>
            React code-slitting & react loadable:{" "}
            <a href="https://reactjs.org/docs/code-splitting.html">
              https://reactjs.org/docs/code-splitting.html
            </a>
          </li>
          <li>
            Babel:{" "}
            <a href="https://babeljs.io/docs/en">https://babeljs.io/docs/en</a>
          </li>
          <li>
            Loaders:{" "}
            <ul>
              <li>
                <a href="https://github.com/webpack-contrib/style-loader">
                  style-loader
                </a>
              </li>
              <li>
                <a href="https://github.com/webpack-contrib/css-loader">
                  css-loader
                </a>
              </li>
              <li>
                <a href="https://github.com/sass/node-sass">node-sass</a>
              </li>
              <li>
                <a href="https://github.com/webpack-contrib/sass-loader">
                  sass-loader
                </a>
              </li>
              <li>
                <a href="https://github.com/webpack-contrib/file-loader">
                  file-loader
                </a>
              </li>
              <li>
                <a href="https://github.com/webpack-contrib/url-loader">
                  url-loader
                </a>
              </li>
              <li>
                <a href="https://github.com/postcss/postcss">postcss</a>
              </li>
              <li>
                <a href="https://github.com/postcss/postcss-loader">
                  postcss-loader
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <h5>The other libraries & component:</h5>
        <ul>
          <li>
            <a href="https://getbootstrap.com/">Bootstrap</a>
          </li>
          <li>
            <a href="https://sweetalert.js.org/guides/">SweetAlert</a>
          </li>
          <li>
            <a href="https://webpack.js.org/plugins/html-webpack-plugin/">
              Html-webpack-plugin
            </a>
          </li>
          <li>
            <a href="https://webpack.js.org/plugins/extract-text-webpack-plugin/">
              Extract-text-webpack-plugin
            </a>
          </li>
        </ul>
        <h5>Next features:</h5>
        <ul>
          <li>
            <a href="https://facebook.github.io/immutable-js/">Immutable</a>
          </li>
          <li>
            <a href="https://github.com/reduxjs/reselect">Reselect</a>
          </li>
          <li>Complete docs for React-template & React-ssr-template</li>
        </ul>
      </div>
    );
  }
}

export default About;
