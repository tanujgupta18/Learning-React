// Props with Default Values

const Case2 = (props) => {
  return <h2>Hello, {props.name}</h2>;
};

Case2.defaultProps = {
  name: "Guest",
};

export default Case2;
