
import './App.css';
import NewPost from './NewPost';

import Select from './SelectedPost';
import 'semantic-ui-css/semantic.min.css';



function App() { 
  return (
    
    <div className="App">
      <NewPost/>
      <Select />     
    </div>
  );
}
export default App;