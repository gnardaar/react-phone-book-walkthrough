import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/phonebook-logo.jpg";

const useStyles = makeStyles({
  logo: {
    content: `url(${Logo})`,
    maxWidth: "20%",
    height: "6rem",
  },
  navlogo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  navbar: {
    backgroundColor: "#003155",
    zIndex: 1,
    borderBottom: "1px solid grey",
  },
  navbarItem: {
    color: "white",
    textDecoration: "none",
    listStyle: "none",
  },
  p5: {
    padding: "5px",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  alignCenter: {
    alignItems: "center",
  },
  ul: {
    listStyleType: "none",
  },
  li: {
    color: "white",
    textDecoration: "none",


  },
  width60: {
    width: "60%",
  },
  width100: {
    width: "100%",
  },
  psides: {
    paddingRight: "10px",
    paddingLeft: "10px",
  },
});

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div
      className={`${classes.row}${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p5} ${classes.spaceBetween} ${classes.navbar}`}
    >
      <div className={`${classes.navlogo}`}>
        <Link to="/" className={`${classes.logo} ${classes.p5}`} />
        <div className={`${classes.width60} ${classes.alignCenter}`}>
          <ul
            className={`${classes.ul} ${classes.row}${classes.spaceBetween}${classes.psides}`}
          >
            <li>
              <Button>
                <Link
                  to="/phonebook"
                  className={`${classes.navbarItem}${classes.psides} ${classes.li}`}
                >
                  My Phonebook
                </Link>
              </Button>
              <Button>
                <Link
                  to="/Contact"
                  className={`${classes.navbarItem}${classes.psides} ${classes.li}`}
                >
                  Contact us
                </Link>
              </Button>
              <Button>
                <Link
                  to="/About"
                  className={`${classes.navbarItem}${classes.psides} ${classes.li}`}
                >
                  About us
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
