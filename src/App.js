import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppHeader from './components/AppHeader';
import TodoInput from './components/TodoInput';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <AppHeader />
            <TodoInput />
        </div>
      </Provider>
  );
}

export default App;
