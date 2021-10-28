import React, { FC, useState } from "react";
import { Collapse } from "react-bootstrap";
import cn from "classnames";

import darkArrow from "./icon-chevron_up-dark.svg";
import lightArrow from "./icon-chevron_up-light.svg";

import * as styles from "./index.module.scss";

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

export interface CollapseItem {
  title: string;
  body: string;
}

export interface MultiCollapseProps {
  background?: "light" | "dark";
  items: CollapseItem[];
}

export const MultiCollapse: FC<MultiCollapseProps> = ({
  items,
  background = "light",
}) => {
  const [selected, setSelected] = useState<null | string>();
  const chunks = createChunks(items);
  const arrow = background === "dark" ? lightArrow : darkArrow;

  const renderItem = (item: CollapseItem, i: number) => {
    const isOpen = selected === item.title;
    const itemClass = cn(styles.item, {
      [styles.backgroundDark]: background === "dark",
    });
    const arrowClass = cn(styles.arrow, {
      [styles.arrowOpen]: isOpen,
    });

    const onClick = () => {
      setSelected((v) => (v === item.title ? null : item.title));
    };

    return (
      <div key={"item" + i} className={itemClass}>
        <button className={styles.button} onClick={onClick}>
          {item.title}
          <img className={arrowClass} src={arrow} />
        </button>
        <Collapse in={isOpen}>
          <div>
            <div className={styles.content}>{item.body}</div>
          </div>
        </Collapse>
      </div>
    );
  };

  return (
    <div className="row">
      {chunks.map((chunk, i) => (
        <div key={"col" + i} className="col-lg-4 px-lg-2">
          {chunk.map(renderItem)}
        </div>
      ))}
    </div>
  );
};
