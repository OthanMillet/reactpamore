// let timer = 0;
// function clock() {
// 	let dom = `${new Date().toLocaleTimeString()}`;
// 	ReactDOM.render(dom, document.getElementById('clock'));

// 	timer = setTimeout(function(){
// 					clock();
// 				},1000);
// }

// function stop(){
// 	clearTimeout(timer);
// 	console.log('x');
// }


// let _root = document.getElementById('root');
// let dom = <div>
// 			<div id='clock'></div>
// 				<input type='button' onClick={clock} value='Start Clock' />
// 				<input type='button' onClick={stop} value='Stop Clock' />
// 			</div>;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '' };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({username: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.username);
    console.log('A password was submitted: ' + this.state.password);
    alert('Name is: ' + this.state.username + '  Password is: ' + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
	      <form className="card">
	      	<div className = "list-block">
		      <ul>
			    <li>
			    	<div className="input-field">
			            <input type="text" placeholder="Username" username={this.state.username} onChange={this.handleUsername} />
	                </div>
			    </li>
			    <li>
			    	<div className="input-field">
		            	<input type="password" placeholder="Password" password={this.state.value} onChange={this.handlePassword}/>
		        	</div>
			    </li>        
			    <button onClick = {this.handleSubmit}> submit</button>
			  </ul>
			</div>
	      </form>
    );
  }
}

let _root = document.getElementById('root');
let dom =	<div><Login/></div>

ReactDOM.render(dom,_root);