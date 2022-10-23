import './App.css';
import {Component} from 'react'
import {CardList} from './components/card-list/Card-list.component'

class App extends Component{
  constructor(){
    super();
    this.state={
      monster :[],
      searchField : ''
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users=> this.setState({monster : users}))

}
  render(){
    return(
          <div className="App">
            <input type='text' placeholder='monster name' onChange={(e)=>{
              this.setState({searchField : e.target.value})
            }}/>
            <CardList searchField={this.state.searchField} monster={this.state.monster}></CardList>
          </div>
        );
      }
    
}

export default App;
