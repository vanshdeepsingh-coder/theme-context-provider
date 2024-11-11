import Display from "./Display";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Display/>
    </UserContextProvider>
  );
}

export default App;
