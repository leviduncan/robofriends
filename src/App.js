import { useState } from 'react'
import { robots } from './robots'
import Card from './Card';
import SearchBox from './SearchBox';

const App = () => {
  const [search, setSearch] = useState([])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

    return (
      <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox handleSearch={ handleSearch }/>
        {
          robots.filter((ai, i) => {
            if(search === "") {
              return ai
            } else if (ai.name.toLowerCase().includes(search)) {
              return ai
            }
          }).map((ai, i) => (
            <Card key={i} name={ai.name} email={ai.email}/>
          ))
        }
      </div>
    );
  


}

export default App;
