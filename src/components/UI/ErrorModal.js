import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHandle}></div>;
};

const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>{props.message}</div>
      <div className={classes.actions}>
        <Button onHandle={props.onHandle}>Okay</Button>
      </div>
    </Card>
  );
};

function ErrorModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHandle={props.onHandle} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onHandle={props.onHandle}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
}

export default ErrorModal;
