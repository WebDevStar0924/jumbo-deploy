"use strict";(self.webpackChunkjumbo_6_x=self.webpackChunkjumbo_6_x||[]).push([[9630],{75898:function(e,a,t){t.r(a),t.d(a,{default:function(){return D}});var n=t(72791),i=t(20890),l=t(61889),r=t(20601),d=t(42),c=t(21041),u=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],s=[{name:"A1",value:100},{name:"A2",value:300},{name:"B1",value:100},{name:"B2",value:80},{name:"B3",value:40},{name:"B4",value:30},{name:"B5",value:50},{name:"C1",value:100},{name:"C2",value:200},{name:"D1",value:150},{name:"D2",value:50}],o=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200},{name:"Group E",value:278},{name:"Group F",value:189}],x=t(42183),h=t.p+"static/media/two-level-pie.93f0680315435b4097d8.txt",p=t(80184),m=function(){return(0,p.jsx)(x.Z,{title:"Two Level Pie Chart",demoCode:h,wrapperSx:{pt:0,backgroundColor:"background.paper"},children:(0,p.jsx)(r.h,{width:"100%",height:300,children:(0,p.jsxs)(d.u,{children:[(0,p.jsx)(c.b,{dataKey:"value",data:u,outerRadius:60,fill:"#1e88e5"}),(0,p.jsx)(c.b,{dataKey:"value",data:s,innerRadius:70,outerRadius:90,fill:"#e91e63",label:!0})]})})})},j=t.p+"static/media/staight-angle-pie.5b5b0ce69385bd31cf0e.txt",g=function(){return(0,p.jsx)(x.Z,{title:"Straight Angle Pie Chart",demoCode:j,wrapperSx:{pt:0,backgroundColor:"background.paper"},children:(0,p.jsx)(r.h,{width:"100%",height:300,children:(0,p.jsx)(d.u,{children:(0,p.jsx)(c.b,{dataKey:"value",startAngle:270,endAngle:0,data:o,outerRadius:80,fill:"#1e88e5",label:!0})})})})},b=t(29439),f=t(96295),v=t.p+"static/media/custom-avtive-shape.fa7d5ae7134d84729118.txt",y=function(e){var a=Math.PI/180,t=e.cx,n=e.cy,i=e.midAngle,l=e.innerRadius,r=e.outerRadius,d=e.startAngle,c=e.endAngle,u=e.fill,s=e.payload,o=e.percent,x=e.value,h=Math.sin(-a*i),m=Math.cos(-a*i),j=t+(r+10)*m,g=n+(r+10)*h,b=t+(r+30)*m,v=n+(r+30)*h,y=b+22*(m>=0?1:-1),A=v,C=m>=0?"start":"end";return(0,p.jsxs)("g",{children:[(0,p.jsx)("text",{x:t,y:n,dy:8,textAnchor:"middle",fill:u,children:s.name}),(0,p.jsx)(f.L,{cx:t,cy:n,innerRadius:l,outerRadius:r,startAngle:d,endAngle:c,fill:u}),(0,p.jsx)(f.L,{cx:t,cy:n,startAngle:d,endAngle:c,innerRadius:r+6,outerRadius:r+10,fill:u}),(0,p.jsx)("path",{d:"M".concat(j,",").concat(g,"L").concat(b,",").concat(v,"L").concat(y,",").concat(A),stroke:u,fill:"none"}),(0,p.jsx)("circle",{cx:y,cy:A,r:2,fill:u,stroke:"none"}),(0,p.jsx)("text",{x:y+12*(m>=0?1:-1),y:A,textAnchor:C,fill:"#333",children:"PV ".concat(x)}),(0,p.jsx)("text",{x:y+12*(m>=0?1:-1),y:A,dy:18,textAnchor:C,fill:"#999",children:"(Rate ".concat((100*o).toFixed(2),"%)")})]})},A=function(){var e=(0,n.useState)(0),a=(0,b.Z)(e,2),t=a[0],i=a[1];return(0,p.jsx)(x.Z,{title:"Custom Active Shape Pie Chart",demoCode:v,wrapperSx:{pt:0,backgroundColor:"background.paper"},children:(0,p.jsx)(r.h,{width:"100%",height:300,children:(0,p.jsx)(d.u,{children:(0,p.jsx)(c.b,{dataKey:"value",activeIndex:t,activeShape:y,onMouseEnter:function(e,a){i(a)},data:o,innerRadius:60,outerRadius:80,fill:"#1e88e5"})})})})},C=t(41048),w=t.p+"static/media/pie-chart-with-customized.ed8b14d8d1f89ec0f217.txt",R=["#1e88e5","#e91e63","#FF8C00","#F44336"],k=Math.PI/180,P=function(e){var a=e.cx,t=e.cy,n=e.midAngle,i=e.innerRadius,l=e.outerRadius,r=e.percent,d=(e.index,i+.5*(l-i)),c=a+d*Math.cos(-n*k),u=t+d*Math.sin(-n*k);return(0,p.jsx)("text",{x:c,y:u,fill:"white",textAnchor:c>a?"start":"end",dominantBaseline:"central",children:"".concat((100*r).toFixed(0),"%")})},Z=function(){return(0,p.jsx)(x.Z,{title:"Pie Chart with Customized Label",demoCode:w,wrapperSx:{pt:0,backgroundColor:"background.paper"},children:(0,p.jsx)(r.h,{width:"100%",height:300,children:(0,p.jsx)(d.u,{children:(0,p.jsx)(c.b,{dataKey:"value",data:o,labelLine:!1,label:P,outerRadius:80,fill:"#1e88e5",children:o.map((function(e,a){return(0,p.jsx)(C.b,{fill:R[a%R.length]},a)}))})})})})},S=t(35667),F=t.p+"static/media/two-simple-pie.269bccbadff9dcb941e1.txt",G=function(){return(0,p.jsx)(x.Z,{title:"Two Simple Pie charts",demoCode:F,wrapperSx:{pt:0,backgroundColor:"background.paper"},children:(0,p.jsx)(r.h,{width:"100%",height:300,children:(0,p.jsxs)(d.u,{children:[(0,p.jsx)(c.b,{dataKey:"value",isAnimationActive:!1,data:u,cx:"35%",cy:"50%",outerRadius:80,fill:"#1e88e5",label:!0}),(0,p.jsx)(c.b,{dataKey:"value",data:s,cx:"70%",cy:"50%",innerRadius:40,outerRadius:80,fill:"#e91e63"}),(0,p.jsx)(S.u,{labelStyle:{color:"black"},itemStyle:{color:"black"},cursor:!1})]})})})},K=t.p+"static/media/pie-chart-with-padding.928e5b3a329690070003.txt",B=["#1e88e5","#e91e63","#FF8C00","#F44336"],M=function(){return(0,p.jsx)(x.Z,{title:"Pie Chart with Padding Angle",demoCode:K,wrapperSx:{pt:0,backgroundColor:"background.paper"},children:(0,p.jsx)(r.h,{width:"100%",height:300,children:(0,p.jsxs)(d.u,{children:[(0,p.jsx)(c.b,{dataKey:"value",data:o,cx:"35%",cy:"50%",innerRadius:60,outerRadius:80,fill:"#6200EE",paddingAngle:5,children:o.map((function(e,a){return(0,p.jsx)(C.b,{fill:B[a%B.length]},a)}))}),(0,p.jsx)(c.b,{dataKey:"value",data:o,cx:"70%",cy:"50%",startAngle:180,endAngle:0,innerRadius:60,outerRadius:80,fill:"#1e88e5",paddingAngle:5,children:o.map((function(e,a){return(0,p.jsx)(C.b,{fill:B[a%B.length]},a)}))})]})})})},L=t(33168),D=function(){var e=(0,L.$)().t;return(0,p.jsxs)(n.Fragment,{children:[(0,p.jsx)(i.Z,{variant:"h1",mb:3,children:e("pages.title.chartPie")}),(0,p.jsxs)(l.ZP,{container:!0,spacing:3.75,children:[(0,p.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,p.jsx)(m,{})}),(0,p.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,p.jsx)(g,{})}),(0,p.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,p.jsx)(A,{})}),(0,p.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,p.jsx)(Z,{})}),(0,p.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,p.jsx)(G,{})}),(0,p.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,p.jsx)(M,{})})]})]})}}}]);
//# sourceMappingURL=9630.5dd7d1bb.chunk.js.map