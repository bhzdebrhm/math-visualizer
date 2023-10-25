import { FC } from "react";
import classNames from "classnames";

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
        className={classNames({ tick: true, ref: reference })}
      />
      {active && <div className="activePart" style={{ width: left }} />}
    </>
  );
};
