const NamedList = ({ name, children }) => {
  return (
    <>
      <h3>{name}</h3>
      <ul>{children}</ul>
    </>
  );
};

function App() {
  return (
    <NamedList name="Odd number">
      <li>1</li>
      <li>3</li>
      <li>5</li>
    </NamedList>
  );
}

export default App;
