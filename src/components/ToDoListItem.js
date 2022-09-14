export const ToDoListItem = (props) => {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Description: {props.description}</p>
    </div>
  );
};
