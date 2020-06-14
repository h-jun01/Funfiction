import React from "react";
import { NavLink } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DetailsRecommend from "./DetailsRecommend";
import { log } from "console";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

export interface UserKeys {
  comment: string;
  date: string;
  src: string;
  userName: string;
}

interface FullWidthTabsIProps {
  getComment: (e: React.ChangeEvent<HTMLInputElement>) => void;
  commentAdd: () => void;
  commentView: Array<UserKeys>;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

const a11yProps = (index: any) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#fafafafa",
  },
}));

const FullWidthTabs: React.FC<FullWidthTabsIProps> = ({
  getComment,
  commentAdd,
  commentView,
}) => {
  const classes = useStyles({});
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="作品詳細" {...a11yProps(0)} />
          <Tab label="コメント一覧" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* <p>作品詳細</p> */}
          <div className="details-description">
            <p>
              今回は平成の終わりと令和の始まりに描いてきた作品たちの総集編です。なかなかこんな風にまとめて出すこともないので詩を織り交ぜてみたんですがどうでしたでしょうか？気に入っていただければ幸いです。これからもいろいろな絵を描き続けていきますので末長くよろしく願いします。
            </p>
          </div>
          <p className="details_recommend_you">あなたにおすすめ</p>
          {/* <div className="tab_display">
            {forYou.map((item, index) => (
              <NavLink to={`/BookExplanation/${more}/${item.id}`} key={index}>
                <DetailsRecommend root={item.src} title={item.title} />
              </NavLink>
            ))}
          </div> */}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          コメント入力
          <input type="text" onChange={getComment} />
          <button onClick={commentAdd}>ボタン</button>
          {commentView.map((users: UserKeys, index: number) => (
            <div className="comment_box" key={index}>
              <div>
                <img src={users.src} alt="usericon" />
              </div>
              <div>
                <div className="user_name_date_box">
                  <p>{users.userName}</p>
                  <p>{users.date}</p>
                </div>
                <p className="">{users.comment}</p>
              </div>
            </div>
          ))}
          {console.log(commentView)}
        </TabPanel>
      </SwipeableViews>
      <div className="readnav">
        <NavLink to="/Read">
          <p>今すぐ読む！</p>
        </NavLink>
      </div>
    </div>
  );
};

export default FullWidthTabs;
