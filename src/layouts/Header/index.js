import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.scss';
import github from '../../assets/images/github-white.png';

// The Header creates links that used to navigate
// between routes.
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: window.innerWidth <= 768
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.mobileDetect, false);
  }

  mobileDetect = () => {
    this.setState({
      isMobile: window.innerWidth <= 768
    });
  };

  render() {
    const { isMobile } = this.state;
    return (
      <header className={styles.header}>
        <nav>
          <ul className={styles.row}>
            <li className={styles.title}>
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <NavLink exact to="/" activeClassName={styles.active}>
                2048 Game
              </NavLink>
            </li>
            {isMobile ? null : (
              <li className={styles.link}>
                <h3 to="/ranking" activeClassName={styles.active}>
                  Perseverance Team
                </h3>
              </li>
            )}
            <li className={styles.spacer} />
            <li>
              <a
                href="https://github.com/devrsi0n/React-2048-game"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="github repo" className={styles.icon} />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
