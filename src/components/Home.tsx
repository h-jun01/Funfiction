import * as React from "react";
import Box from "./Box";
import Slider from "./Slider";
import { CardLayoutIProps } from "./CardLayout";

export interface IKeys {
  id: number;
  src: string;
  title: string;
  creator: string;
  favorite: number;
  crown?: string;
  visibility?: "hidden";
  star?: number;
}

export interface HomeItem {
  topic: string;
  more: string;
  component: React.FC<CardLayoutIProps>;
  array: IKeys[];
  details: string[];
  grid: string;
}

interface HomeIProps {
  more: string[];
  items: HomeItem[];
}

const Home: React.FC<HomeIProps> = ({ ...props }) => {
  return (
    <React.Fragment>
      <Slider />
      <div className="box_grid_container">
        {props.items.map((item: HomeItem, index: number) => (
          <Box
            topic={item.topic}
            more={item.more}
            component={item.component}
            array={item.array}
            details={item.details}
            grid={item.grid}
            key={index}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Home;
