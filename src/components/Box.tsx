import * as React from "react";
import { NavLink } from "react-router-dom";
import { CardLayoutIProps } from "./CardLayout";
import { IKeys } from "./Home";

interface BoxIProps {
  topic: string;
  more: string;
  component: React.FC<CardLayoutIProps>;
  array: IKeys[];
  details: string[];
  grid: string;
}

const Box: React.FC<BoxIProps> = ({ ...props }) => {
  return (
    <section className={props.grid}>
      <div className="box_wrap">
        <h2 className="box_title">{props.topic}</h2>
        <NavLink exact to={props.more}>
          <div className="box_more">
            <p className="box_more_all">すべて表示</p>
            <i className="fas fa-chevron-right"></i>
          </div>
        </NavLink>
      </div>
      <div>
        <props.component array={props.array} details={props.details} />
      </div>
    </section>
  );
};

export default Box;
