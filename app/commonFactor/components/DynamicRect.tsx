"use client";

import * as stylex from "@stylexjs/stylex";

import { FC, useMemo, useState } from "react";

import { Part } from "./Part";
import ReactSlider from "react-slider";

interface DynamicRectProps {
  reference?: boolean;
}

const DynamicRect: FC<DynamicRectProps> = ({ reference }) => {
  const [denominator, setDenominator] = useState(1);
  const [activeIndex, setActiveIndex] = useState<number | undefined>();

  const tickWidths = useMemo(() => {
    return 1000 / denominator;
  }, [denominator]);

  return (
    <div {...stylex.props(s.main)}>
      <div style={{ width: 1000 }} {...stylex.props(s.rect1)}>
        {Array(denominator)
          .fill(0)
          .map((_, i: number) => {
            const index = i + 1;
            return (
              <Part
                reference={reference}
                onActive={(index) => setActiveIndex(index + 1)}
                left={index * tickWidths - tickWidths}
                width={tickWidths}
                active={activeIndex !== undefined && index === activeIndex}
                index={index}
              />
            );
          })}
      </div>
      <ReactSlider
        min={1}
        max={100}
        onChange={(value) => setDenominator(value)}
        renderThumb={(props, state) => (
          <div {...props}>
            {activeIndex && <span>{activeIndex - 1}</span>}
            -------------
            <span>{state.valueNow}</span>
          </div>
        )}
      />
    </div>
  );
};

const s = stylex.create({
  main: {
    display: "flex",
    flexDirection: "column",
    gap: "1",
  },
  rect1: {
    height: "50px",
    position: "relative",
    border: "1px solid gray",
  },
});

export default DynamicRect;
