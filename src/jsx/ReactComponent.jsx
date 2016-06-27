var React=require('react');
var ReactDOM=require('react-dom');
//依赖子组件
//var Tool=require('./Tool.jsx');
//var ComponentBanner=require('./ComponentBanner.jsx');
//var ComponentAudio=require('./ComponentAudio.jsx');
//var ComponentNav=require('./ComponentNav.jsx');
//页面的布局 用于存放每个子组件的容器 ---开始
var ComponentLayout=React.createClass({
	render:function(){
		return(
		  <div id="mainBox">
			 <header id="header">
			 	<ComponentBanner/>
			 </header>
			 <section id="section">
			 	<ComponentNav/>
			 </section>
			 <section>
			 	
			 </section>
			 <footer id="footer">
			 	<ComponentAudio/>
			 </footer>
		  </div>
		);
	}
});
ReactDOM.render(<ComponentLayout/>,document.body);


