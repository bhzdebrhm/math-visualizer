import * as stylex from "@stylexjs/stylex";

import DynamicRect from "./components/DynamicRect";

export default function CommonFactor() {
  return (
    <div {...stylex.props(s.main)}>
      <DynamicRect reference={true} />
      <DynamicRect />
      <DynamicRect />
    </div>
  );
}

const s = stylex.create({
  main: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    padding: "1rem",
  },
});
