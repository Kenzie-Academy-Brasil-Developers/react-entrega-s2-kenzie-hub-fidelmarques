function List({ arr }) {
  return (
    <ul>
      {arr.map((item, index) => (
        <li key={index}>
          <h4>{item.title}</h4>
          <h5>{item.status}</h5>
        </li>
      ))}
    </ul>
  );
}
export default List;
