import Wrapper from './components/layout/Wrapper';
import { FormContextProvider } from './context/FormContextProvider';
// ToDo : transition animation
// ToDo : edit README.md
function App() {
  return (
    <main>
      <FormContextProvider>
        <Wrapper />
      </FormContextProvider>
    </main>
  );
}

export default App;
