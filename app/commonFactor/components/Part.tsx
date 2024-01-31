import * as stylex from "@stylexjs/stylex";

import { FC } from "react";

interface PartProps {
  left?: number;
  active?: boolean;
  index: number;
  width?: number;
  reference?: boolean;
  onActive?: (index: number) => void;
}

export const Part: FC<PartProps> = ({
  left,
  active,
  reference,
  width,
  index,
  onActive,
}) => {
  return (
    <>
      <div
        onClick={() => onActive?.(index)}
        style={{ left, width }}
        {...stylex.props(s.tick, reference && s.ref)}
      />
      {active && (
        <div {...stylex.props(s.activePart)} style={{ width: left }} />
      )}
    </>
  );
};

const s = stylex.create({
  tick: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "50px",
    width: "1px",
    opacity: "0.5",
    borderLeft: "1px solid black",
  },
  ref: {
    opacity: "0.5",
    height: "283px !important",
  },
  activePart: {
    backgroundColor: "rgba(255, 4, 4, 0.178)",
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "50px",
    left: 0,
  },
});
