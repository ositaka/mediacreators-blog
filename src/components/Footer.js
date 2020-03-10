import React, { Component } from "react";
import { Link } from "gatsby";
import netlify from "../../content/images/css.png";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          <a
            href="https://ko-fi.com/taniarascia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ko-Fi
          </a>
          <a
            href="https://patreon.com/taniarascia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patreon
          </a>
          <Link to="/contact">Newsletter</Link>
          <a
            href="https://www.taniarascia.com/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
          >
            RSS
          </a>
        </div>
        <div>
          <a href="https://www.netlify.com/" title="Hosted by Netlify">
            <img
              src={netlify}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
        </div>
      </footer>
    );
  }
}
