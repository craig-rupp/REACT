var Greeter = React.createClass({
	render : function(){
		return (
			<div>
			<h1>Hello React! Arsenal</h1>
			<p>They beat <strong>United</strong> yesterday</p>
			</div>
		);
	}
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
