import React, { FC, useState } from "react";
import { Collapse } from "react-bootstrap";

import darkArrow from "./icon-chevron_up-dark.svg";
import lightArrow from "./icon-chevron_up-light.svg";

import "./index.scss";

const indexes = [2, 0, 1, 2];

export function createChunks<T>(arr: T[]): T[][] {
  return arr.reduce(
    (resultArray, item, index) => {
      if (index < 3) {
        resultArray[index].push(item);
      } else {
        const i = index % 3;
        resultArray[indexes[i]].push(item);
      }

      return resultArray;
    },
    [[], [], []]
  );
}

export interface MultiCollapseProps {
  background?: "light" | "dark";
  items: { title: string; body: string }[];
}

export const MultiCollapse: FC<MultiCollapseProps> = ({
  items,
  background = "light",
}) => {
  const [selected, setSelected] = useState<null | string>();
  const chunks = createChunks(items);

  const arrow = background === "dark" ? lightArrow : darkArrow;

  return (
    <div className="row">
      {chunks.map((chunk, i) => (
        <div key={"col" + i} className="col-lg-4 px-lg-2">
          {chunk.map((item, ii) => (
            <div
              key={"item" + ii}
              className="collapse-variant-1 background-{{bg}}"
            >
              <button
                className="btn btn-block text-left"
                type="button"
                data-toggle="collapse"
                onClick={() =>
                  setSelected((v) => (v === item.title ? null : item.title))
                }
              >
                {item.title}
                <img src={arrow} />
              </button>
              <Collapse in={selected === item.title}>
                <div>
                  <div className="collapse__content">{item.body}</div>
                </div>
              </Collapse>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
