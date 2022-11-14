import { style, globalStyle } from "@vanilla-extract/css";
import "./styles/theme.css"
import { vars } from "./styles/theme.css";

// {global}

export const H1 = style({
  color: vars.color.green70,
  backgroundColor: "black",
});
