(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,a){e.exports=a.p+"static/media/boy.d737ce97.jpg"},170:function(e,t,a){e.exports=a.p+"static/media/girl.a6b56fcd.jpg"},172:function(e,t,a){e.exports=a(422)},177:function(e,t,a){e.exports=a.p+"static/media/nyc.29be0563.jpg"},178:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/findIt.0c25c650.jpg"},420:function(e,t,a){},422:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(166),o=a.n(c),r=a(9),i=a(10),s=a(12),m=a(11),u=a(13),d=a(7),p=a(36),h=l.a.createContext(null),g=l.a.createContext(null),E=a(25),f=a.n(E),b=(a(177),a(178),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"tiledBackground"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(d.b,{to:"/founderhistory",className:"left",style:{paddingRight:"10px",paddingTop:"20px"}},l.a.createElement("img",{src:f.a,alt:"logo",className:"rounded mx-auto d-block",style:{width:"500px",padding:"20px"}}))),l.a.createElement("div",{style:{textAlign:"center",fontStyle:"italic"}},l.a.createElement("h2",null,"A simpler solution to get your lost item back in NYC!")),l.a.createElement("div",{className:"btn-wrapper",style:{display:"flex",justifyContent:"center"}},l.a.createElement(d.b,{to:"/lost",className:"left",style:{paddingRight:"10px",paddingTop:"20px"}},l.a.createElement("button",{class:"btn btn-primary btn-lg btn-danger"},"I LOST SOMETHING")),l.a.createElement(d.b,{to:"/found",className:"right",style:{paddingLeft:"10px",paddingTop:"20px"}},l.a.createElement("button",{className:"btn btn-primary btn-lg"},"I FOUND SOMETHING"))))))}),y=(a(72),a(169)),v=a.n(y),x=a(16),N=a.n(x),C=a(104),O={init:function(){null===localStorage.getItem("images")&&localStorage.setItem("images",JSON.stringify([]))},getImages:function(){var e=localStorage.getItem("images");return JSON.parse(e)},saveImage:function(e,t){var a={url:e,timestamp:t},n=O.getImages();return n.unshift(a),localStorage.setItem("images",JSON.stringify(n)),n}},k=O;C.initializeApp({apiKey:"AIzaSyDZHk3FdTSPRn1uOF7C9aNGAiGoop96c-0",authDomain:"findit-cd54e.firebaseapp.com",databaseURL:"https://findit-cd54e.firebaseio.com",projectId:"findit-cd54e",storageBucket:"findit-cd54e.appspot.com",messagingSenderId:"801673346676"});var w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleType=function(e){a.setState({type_id:e.target.value})},a.handleColor=function(e){a.setState({color_id:e.target.value})},a.handleInput=function(e){a.setState({title:e.target.value})},a.handleLocation=function(e){a.setState({location:e.target.value})},a.handleDate=function(e){a.setState({date:e.target.value})},a.saveImage=function(e){var t=Date();k.saveImage(e,t)},a.handleFileInput=function(e){var t=e.target.files[0];C.storage().ref().child(t.name).put(t).then(function(e){return e.ref.getDownloadURL()}).then(function(e){a.setState({image_url:e})})},a.handleClick=function(){N()({url:"https://findit1.herokuapp.com/items/create",method:"post",data:{user_id:"1",type_id:a.state.type.value,colour_id:a.state.color.value,lost_location:a.state.location,date:a.state.date,status:"Not claimed",fedex_location:"pending",title:a.state.title,img_url:a.state.image_url}}).then(function(e){console.log("after post",e)})},a.state={title:"",type:[],color:[],location:"",date:"",image_url:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;N()({url:"https://findit1.herokuapp.com/type/read",method:"get"}).then(function(t){e.setState({type:t.data.msg}),N()({url:"https://findit1.herokuapp.com/colour/read",method:"get"}).then(function(t){e.setState({color:t.data.msg})})})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("form",null,l.a.createElement("div",{style:{paddingBottom:"30px"}},l.a.createElement("h1",null,"Found Item Info",l.a.createElement(d.b,{to:"/"},l.a.createElement("img",{src:f.a,className:"img-thumbnail float-right",style:{width:"100px"},alt:""})))),l.a.createElement("div",{className:"form-group "},l.a.createElement("label",null,"TITLE"),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Description",onChange:this.handleInput})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"TYPE"),l.a.createElement("select",{id:"inputState",className:"form-control",onChange:this.handleType},l.a.createElement("option",null,"Choose..."),this.state.type.map(function(e,t){return l.a.createElement("option",{key:t,value:e.id},e.type)}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"COLOR"),l.a.createElement("select",{id:"inputState",className:"form-control",onChange:this.handleColor},l.a.createElement("option",null,"Choose..."),this.state.color.map(function(e,t){return l.a.createElement("option",{key:t,value:e.id},e.colour)}))),l.a.createElement("div",{className:"form-group "},l.a.createElement("label",null,"LOCATION"),l.a.createElement("input",{type:"email",className:"form-control",placeholder:"Zip Code",onChange:this.handleLocation})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"DATE FOUND"),l.a.createElement("input",{type:"email",className:"form-control",placeholder:"DD/MM/YY",onChange:this.handleDate})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"UPLOAD AN IMAGE"),l.a.createElement("input",{type:"file",className:"form-control",placeholder:"",onChange:this.handleFileInput})),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.handleClick},"Submit"))),l.a.createElement("div",null,l.a.createElement("img",{src:v.a,alt:"img",style:{width:"150px"},className:"rounded mx-auto float-left"}))))}}]),t}(l.a.Component),I=a(170),S=a.n(I),j=(a(284),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleType=function(e){a.setState({type_id:e.target.value})},a.handleColor=function(e){a.setState({color_id:e.target.value})},a.handleLocation=function(e){a.setState({location:e.target.value})},a.handleDate=function(e){a.setState({date:e.target.value})},a.handleClick=function(){var e=a.state,t=e.type_id,n=e.color_id,c=e.location,o=e.date;t.length>0&&n.length>0&&c.length>0&&o.length>0&&N()({url:"https://findit1.herokuapp.com/items/read",method:"GET",params:{type_id:a.state.type_id,colour_id:a.state.color_id,lost_location:a.state.location,date:a.state.date}}).then(function(e){a.context(e.data.msg),console.log(e),a.setState({redirect:l.a.createElement(p.a,{to:"/itemmatch"})})}).catch(function(e){console.log(e)})},a.state={user_id:"",type:[],color:[],type_id:"",color_id:"",location:"",date:"",result:[],redirect:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;N()({url:"https://findit1.herokuapp.com/type/read",method:"get"}).then(function(t){e.setState({type:t.data.msg}),N()({url:"https://findit1.herokuapp.com/colour/read",method:"get"}).then(function(t){e.setState({color:t.data.msg})})})}},{key:"render",value:function(){return console.log("inside render",this.context),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("form",null,l.a.createElement("div",{style:{paddingBottom:"30px"}},l.a.createElement("h1",null,"Lost Item Info",l.a.createElement(d.b,{to:"/"},l.a.createElement("img",{src:f.a,className:"img-thumbnail float-right",style:{width:"100px"},alt:""}))),l.a.createElement("p",null,"Fill out form to match found item that has been entered in our website to claim your lost item")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"TYPE"),l.a.createElement("select",{id:"inputState",className:"form-control",onChange:this.handleType},l.a.createElement("option",null,"Choose..."),this.state.type.map(function(e,t){return l.a.createElement("option",{key:t,value:e.id},e.type)}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"COLOR"),l.a.createElement("select",{id:"inputState",className:"form-control",onChange:this.handleColor},l.a.createElement("option",null,"Choose..."),this.state.color.map(function(e,t){return l.a.createElement("option",{key:t,value:e.id},e.colour)}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"LOCATION"),l.a.createElement("input",{type:"email",className:"form-control",placeholder:"Zip Code",onChange:this.handleLocation})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"DATE LOST"),l.a.createElement("input",{type:"email",className:"form-control",placeholder:"DD/MM/YY",onChange:this.handleDate}),l.a.createElement("div",null,"Search query is 7-day history period")),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.handleClick},"Submit"))),l.a.createElement("div",null,l.a.createElement("img",{src:S.a,alt:"img",style:{width:"200px"},className:"rounded mx-auto float-right"}))),l.a.createElement(l.a.Fragment,null,this.state.redirect))}}]),t}(l.a.Component));j.contextType=h;var A=j,F=(a(420),a(171)),D=a.n(F),L=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).claim=function(){console.log(1),a.props.history.push("/claimPage")},a.state={context:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.context.length>0&&this.setState({context:this.context})}},{key:"render",value:function(){return console.log(this.context[0]),console.log(this.state.context.length),l.a.createElement("div",{className:"container"},l.a.createElement("div",{style:{paddingBottom:"30px"}},l.a.createElement("h1",null,"Lost Item Matched",l.a.createElement(d.b,{to:"/"},l.a.createElement("img",{src:f.a,className:"img-thumbnail float-right",style:{width:"100px"},alt:""})))),this.state.context.length<1?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",{className:"content"}),l.a.createElement("h4",null,"Title: ")),l.a.createElement("div",null,l.a.createElement("h4",null,"Type: ")),l.a.createElement("div",null,l.a.createElement("h4",null,"Color: ")),l.a.createElement("div",null,l.a.createElement("h4",null,"Location Found: ")),l.a.createElement("div",null,l.a.createElement("h4",null,"Date: ")),l.a.createElement("div",null,l.a.createElement("h4",null,"FedEx Pick-up Location: ")),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{type:"button",class:"btn btn-danger"},"Claim Item"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"img"},l.a.createElement("img",{style:{width:"300px"},src:this.state.context[0].img_url})),l.a.createElement("div",null,l.a.createElement("h2",null,"Title: ",this.state.context[0].title)),l.a.createElement("p",null,l.a.createElement("div",null,l.a.createElement("h4",null,"Location Found: ",this.state.context[0].lost_location))),l.a.createElement("p",null,l.a.createElement("div",null,l.a.createElement("h4",null,"Date: ",this.state.context[0].date))),l.a.createElement("p",null,l.a.createElement("div",null,l.a.createElement("h4",null,"FedEx Pick-up Location: ",this.state.context[0].fedex_location)))),l.a.createElement("div",{className:"form-group",style:{position:"relative",zIndex:"9999"}},l.a.createElement("button",{type:"button",style:{position:"relative",zIndex:"9999"},className:"btn btn-primary btn-lg btn-block",onClick:this.claim},"Claim Item"))),l.a.createElement(D.a,null))}}]),t}(l.a.Component);L.contextType=g;var M=L,T=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h1",{style:{textAlign:"center",marginTop:"100px"}},"Choose Option to Claim Your Item"),l.a.createElement("div",{className:"btn-wrapper",style:{display:"flex",justifyContent:"center"}},l.a.createElement(d.b,{to:"/pickup",className:"left",style:{paddingRight:"10px",paddingTop:"20px"}},l.a.createElement("img",{src:"https://trello-attachments.s3.amazonaws.com/5cc49a5ee4f4aa7f484c3bb1/970x972/b4efcd1477970e73d0697ed7888d5a8b/Screen_Shot_2019-04-28_at_2.23.51_PM.png",alt:"",style:{width:"300px",padding:"20px"}})),l.a.createElement("a",{href:"https://www.fedex.com/login/web/jsp/logon.jsp",className:"right",style:{paddingLeft:"10px",paddingTop:"20px"}},l.a.createElement("img",{src:"data:image/png;base64,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",alt:"",style:{width:"300px",padding:"20px"}})))))},P=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={context:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.context.length>0&&this.setState({context:this.context})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,this.state.context.length<1?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{style:{textAlign:"center",marginTop:"100px"}},"Claim ID: "),l.a.createElement("h2",{style:{textAlign:"center"}},"FedEx Pick-up Location:")):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{style:{textAlign:"center",marginTop:"100px"}},"Claim ID: ",this.state.context[0].id," "),l.a.createElement("h2",{style:{textAlign:"center"}},"FedEx Pick-up Location: ",this.state.context[0].fedex_location," ")),l.a.createElement("h4",{style:{textAlign:"center"}},"To claim your lost item, please bring a valid government issued photo ID."),l.a.createElement("div",{style:{textAlign:"center",marginTop:"100px"}},l.a.createElement("a",{href:"https://www.fedex.com/login/web/jsp/logon.jsp"},l.a.createElement("button",{className:"btn btn-primary btn-lg",style:{width:"405px",textAlign:"center"}},"Nevermind, I want it shipped via FedEx")))))}}]),t}(l.a.Component);P.contextType=g;var K=P,U=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={name:"",address:"",claimID:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){N()({url:"https://findit1.herokuapp.com/items/read",method:"GET",params:{colour_id:3}}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",null,l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),l.a.createElement("small",{id:"emailHelp",class:"form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Address"),l.a.createElement("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),l.a.createElement("div",{class:"form-group form-check"},l.a.createElement("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),l.a.createElement("label",{class:"form-check-label"},"Check me out")),l.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Submit")))}}]),t}(l.a.Component),Y=function(e){var t=e;return t.data.msg?t.data.msg.map(function(e,t){return l.a.createElement(l.a.Fragment,null,t%2===0?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"w-100",key:t,style:{backgroundColor:"lightgrey"}}),l.a.createElement("div",{className:"col text-md-left",style:{backgroundColor:"lightgrey",paddingTop:"60px"}},e.title),l.a.createElement("div",{className:"col",style:{backgroundColor:"lightgrey",alignItems:"center",paddingTop:"60px"}},e.date),l.a.createElement("div",{className:"col",style:{backgroundColor:"lightgrey",alignItems:"center",paddingTop:"60px"}},e.status),l.a.createElement("img",{className:"col",style:{backgroundColor:"lightgrey",width:"10px",height:"150px"},src:e.img_url,alt:""})):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"w-100",key:t,style:{backgroundColor:"red"}}),l.a.createElement("div",{className:"col",style:{paddingTop:"60px"}},e.title," "),l.a.createElement("div",{className:"col",style:{paddingTop:"60px"}},e.date),l.a.createElement("div",{className:"col",style:{paddingTop:"60px"}},e.status),l.a.createElement("img",{className:"col",style:{width:"10px",height:"150px"},src:e.img_url,alt:" "})))}):l.a.createElement("h1",null,"Page is loading")},J=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("https://findit1.herokuapp.com/items/readAll").then(function(t){console.log(t),e.setState({data:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement(d.b,{to:"/"},l.a.createElement("img",{src:f.a,className:"img-thumbnail float-right",style:{width:"100px"},alt:""})),l.a.createElement("h1",null,"Founder History"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h3",null,"Title")),l.a.createElement("div",{className:"col"},l.a.createElement("h3",null,"Date Posted")),l.a.createElement("div",{className:"col"},l.a.createElement("h3",null,"Status")),l.a.createElement("div",{className:"col"},l.a.createElement("h3",null,"Image")),l.a.createElement(Y,{data:e}))))}}]),t}(l.a.Component),R=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).storeItem=function(e){a.setState({item:e})},a.state={item:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(p.d,null,l.a.createElement(g.Provider,{value:this.state.item},l.a.createElement(h.Provider,{value:this.storeItem},l.a.createElement(p.b,{path:"/",exact:!0,strict:!0,component:b}),l.a.createElement(p.b,{path:"/found",exact:!0,strict:!0,component:w}),l.a.createElement(p.b,{path:"/lost",exact:!0,strict:!0,component:A}),l.a.createElement(p.b,{path:"/itemmatch",exact:!0,strict:!0,component:M}),l.a.createElement(p.b,{path:"/claimPage",exact:!0,strict:!0,component:T}),l.a.createElement(p.b,{path:"/pickup",exact:!0,strict:!0,component:K}),l.a.createElement(p.b,{path:"/fedexhub",exact:!0,strict:!0,component:U}),l.a.createElement(p.b,{path:"/founderhistory",exact:!0,strict:!0,component:J})))))}}]),t}(l.a.Component);a(421);o.a.render(l.a.createElement(R,null),document.getElementById("root"))},72:function(e,t,a){}},[[172,1,2]]]);
//# sourceMappingURL=main.7c8846ce.chunk.js.map