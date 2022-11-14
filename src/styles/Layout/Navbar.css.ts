import { style, createContainer } from "@vanilla-extract/css";
import { vars } from "../theme.css";
import { defineProperties } from "@vanilla-extract/sprinkles";

const responsiveStyle = ({ tablet, desktop }) => ({
  "@media": {
    "screen and (min-width: 30vw)": tablet,
    "screen and (min-width: 50vw)": desktop,
  },
});

export const container = createContainer();

const queryContainer = style({
  containerName: container,
  containerType: "inline-size",

  // "@container": {
  //   "(min-width: 768rem)": {
  //     backgroundColor: "red",
  //   },
  //   "(min-width: 1400rem)": {
  //     backgroundColor: "pink",
  //   },
  // },
});

export const navbarVE = style({
  position: "relative",
  height: "106rem",
  maxWidth: "1500px",
  backgroundColor: "lime",

  containerName: container,
  containerType: "inline-size",
});

export const Header = style({
  fontSize: "24rem",

  "@container": {
    "(min-width: 493rem)": {
      backgroundColor: "red",
    },
    "(min-width: 1233rem)": {
      backgroundColor: "pink",
    },
  },
});
