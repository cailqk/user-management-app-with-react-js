import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      type={props.type || "button"}
      className={classes.button}
      onClick={props.onHandle}
    >
      {props.children}
    </button>
  );
}

export default Button;
