import React, { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { layoutChange } from "../actions/navigation";
import { BookData } from "../components/config/BookData";
import BookList from "../components/BookList";

type BooksProps = { layoutChange(): { type: string } } & RouteComponentProps<{
  code: string;
}>;

const Books: React.FC<BooksProps> = ({ match, layoutChange }) => {
  const codes = Object.keys(BookData);
  const targetCode = match.params.code;
  console.log(targetCode);

  useEffect(() => {
    layoutChange();
  }, [layoutChange]);

  return codes.includes(targetCode) ? (
    <React.Fragment>
      <BookList books={BookData[targetCode].comics} targetCode={targetCode} />
    </React.Fragment>
  ) : (
    <Redirect to="/" />
  );
};

const mapDispatchToProps = dispatch => ({
  layoutChange: () => dispatch(layoutChange())
});

export default withRouter(connect(null, mapDispatchToProps)(Books));
