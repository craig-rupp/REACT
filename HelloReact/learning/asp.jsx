var Greeter = React.createClass({
	getDefaultProps : function(){
		return {
			name : "React",
			message : "Default message should the message variable be blank"
		};
	},
	onButtonClick : function(event){
		event.preventDefault();
		name = this.refs.name.value;
		alert(name);
	},
	render : function(){
		// return React.createElement(
		// 	'h1',
		// 	null,
		// 	'Hello React.createElement'
		// );
		var name = this.props.name;
		var message = this.props.message;
		return (
			<div>
			<h1>Hello {name}! Arsenal</h1>
			<p>They beat <strong>United</strong> yesterday</p>
			<p>Detailed message contains <strong>{message}</strong></p>
			<form onSubmit={this.onButtonClick}>
				<input type="text" ref="name"/>
				<button>Set Name</button>
			</form>
			</div>
		);
	}
});
var firstName = 'Mesut';
var Arsenal = 'With 75 points Arsenal could still find themselves out of the UCL equation for 2017, unless Liverpool shit the bed';
ReactDOM.render(
  <Greeter name={firstName} message={Arsenal}/>,
  document.getElementById('app')
);
