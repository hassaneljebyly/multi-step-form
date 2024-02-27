import Wrapper from './components/layout/Wrapper';
import { FormContextProvider } from './context/FormContextProvider';

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
