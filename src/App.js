import './App.css';
import AddMovie from './AddMovie';
import Nav from './Nav';
import MovieList from './MovieList';
import { MovieProvider } from './MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <AddMovie />
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;