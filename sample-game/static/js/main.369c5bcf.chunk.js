(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n(76)},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),i=n(6),s=n(12),u={currentDialog:{},roomsList:[],currentRoom:1,inventory:{isOpen:!1,items:[{id:1,image:"#",name:"\u0418\u043c\u044f",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}]},messages:[],gameRoutes:{},characters:{},settings:{volume:100},gameLoaded:!1,userData:{Time:"00:00",Date:"1 \u044f\u043d\u0432\u0430\u0440\u044f 2019"}},l=n(1),m=n(2),d=n(33),h=n.n(d),p=function(){function e(){var t=this;Object(l.a)(this,e),this.catchError=function(e){return e.response.status},this.getCharacterList=function(){return t.getData("/data/characters.json").then(function(e){return e.data}).catch(function(e){return t.catchError(e)})},this.getCharacter=function(e){return t.getCharacterList().then(function(t){return t[e]}).catch(function(e){return t.catchError(e)})}}return Object(m.a)(e,[{key:"getData",value:function(e){return h.a.get(e)}},{key:"getRoutes",value:function(){var e=this;return this.getData("/data/game-routes.json").then(function(e){return e.data}).catch(function(t){return e.catchError(t)})}},{key:"getSettings",value:function(){return this.getData("/data/settings.json")}},{key:"getRooms",value:function(){var e=this;return this.getData("/data/room-list.json").then(function(e){return e.data}).catch(function(t){return e.catchError(t)})}},{key:"getRoom",value:function(e){var t=this;return this.getRooms().then(function(e){return e.data.currentRoom}).catch(function(e){return t.catchError(e)})}},{key:"getDialog",value:function(e){return!1}}]),e}(),v=r.a.createContext(),g=v.Provider,f=v.Consumer,E=n(15),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_DIALOG":return{currentDialog:t.payload};default:return e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROOM_SET_LIST":return t.payload;case"ROOM_GET_LIST":default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_ROOM":return t.payload;default:return e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1,items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INVENTORY_TOGGLE":return t.payload;case"INVENTORY_GET_ITEMS":return e;case"INVENTORY_ADD_ITEM":case"INVENTORY_REMOVE_ITEM":return t.payload;default:return e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];arguments.length>1&&arguments[1];return e},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ROUTE":case"ROUTE_SET_LIST":case"ROUTE_GET_LIST":return t.payload;default:return e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments.length>1&&arguments[1];return e},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{time:"00:00",Date:"1 \u044f\u043d\u0432\u0430\u0440\u044f 2019"};arguments.length>1&&arguments[1];return e},R=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GAME_LOADED":return t.payload;default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHARACTER_GET":case"CHARACTER_GET_LIST":case"CHARACTERS_LOAD":return t.payload;default:return e}},C=function(){return Object(E.b)({currentDialog:y,roomsList:O,currentRoom:b,inventory:_,messages:j,gameRoutes:L,settings:k,userData:N,characters:T,gameLoaded:R})},D=function(e){return Object(E.c)(C(),e||{})},S=n(4),A=n(3),w=n(5),G=n(14),M=function(e){var t=e.continueGame;return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page__button-list"},t,r.a.createElement(i.b,{className:"page__button",to:"/loading"},"\u041d\u043e\u0432\u0430\u044f \u0418\u0433\u0440\u0430"),r.a.createElement(i.b,{className:"page__button",to:"/settings"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),r.a.createElement(i.b,{className:"page__button",to:"/exit"},"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0438\u0433\u0440\u044b")))},x=(n(68),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(S.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={hasSavedGames:!1},n.onEscKeyPress=function(e){"Escape"===e.key&&n.props.history.goBack()},n}return Object(w.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("keydown",this.onEscKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onEscKeyPress)}},{key:"render",value:function(){var e=this.state.hasSavedGames?r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{className:"page__button",to:"/game/"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0438\u0433\u0440\u0443"),r.a.createElement(i.b,{className:"page__button",to:"/load-game"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0433\u0440\u0443")):null;return r.a.createElement(M,{continueGame:e})}}]),t}(a.Component)),P=Object(G.f)(x),I=function(e){function t(){return Object(l.a)(this,t),Object(S.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"game-settings page"},r.a.createElement("div",{className:"page__popup"},"Game Settings. \u0442\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0444\u043e\u0440\u043c\u0430 \u0441 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438"))}}]),t}(a.Component),K=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(S.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).onEscKeyPress=function(e){"Escape"===e.key&&n.props.history.goBack()},n}return Object(w.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.setState({loadGame:this.props.loadGame}),document.addEventListener("keydown",this.onEscKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onEscKeyPress)}},{key:"render",value:function(){return r.a.createElement("div",{className:"save-load page"},r.a.createElement("div",{className:"page__popup"},"Save Load. \u0422\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u043c\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u043c\u0438 \u0438\u0433\u0440\u0430\u043c\u0438, \u0444\u043e\u0440\u043c\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f/\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f."))}}]),t}(a.Component),W=Object(G.f)(K),U=function(e){var t=e.item;return r.a.createElement("div",{className:"inventory__item"},r.a.createElement("div",{className:"inventory__item-image"},r.a.createElement("img",{src:t.image,alt:t.name})),r.a.createElement("div",{className:"inventory__item-description"},r.a.createElement("div",{className:"inventory__item-name"},t.name),r.a.createElement("div",{className:"inventory__item-content"},t.description)))},H=(n(69),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(S.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1,items:[]},n.onEscKeyPress=function(e){var t=n.state.isOpen;t&&"Escape"===e.key&&(n.props.inventoryToggled(!t),n.setState({isOpen:!t}))},n.onToggleInventory=function(){n.setState({isOpen:!n.state.isOpen})},n}return Object(w.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.inventory,t=e.isOpen,n=e.items;this.setState({items:n,isOpen:t}),document.addEventListener("keydown",this.onEscKeyPress)}},{key:"componentWillReceiveProps",value:function(e){var t=e.inventory,n=t.isOpen,a=t.items;this.setState({items:a,isOpen:n})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onEscKeyPress)}},{key:"render",value:function(){var e=this.state,t=e.isOpen,n=e.items.map(function(e){return r.a.createElement(U,{item:e,key:e.id})}),a=t?r.a.createElement("div",{className:"inventory__container"},r.a.createElement("div",{className:"inventory__container-title"},"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044c"),r.a.createElement("div",{className:"inventory__container-content"},n)):null;return r.a.createElement("div",{className:"inventory"},r.a.createElement("div",{className:"inventory__button",onClick:this.onToggleInventory}),a)}}]),t}(a.Component)),V=Object(s.b)(function(e){return{inventory:e.inventory}},function(e){return{inventoryToggled:function(t){e({type:"INVENTORY_TOGGLE",payload:t})}}})(H),Y=(n(70),function(e){var t=e.style,n=void 0===t?{}:t,a=e.linkTo,o=e.text;return r.a.createElement(i.b,{style:n,to:a},o)}),B=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(S.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={name:null,style:null,interactions:null,things:null,characters:null,links:null,isActive:!1,isLoaded:!1},n}return Object(w.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.state,t=e.name,n=e.style,a=e.characters,r=e.links,o=e.things,c=this.props.isActive;this.setState({name:t,style:n,characters:a,isActive:c,things:o,links:r,isLoaded:!0})}},{key:"render",value:function(){if(!this.state.isLoaded)return!1;var e=this.state,t=e.name,n=e.style,a=e.characters,o=e.links,c=e.things,i=o?o.map(function(e){return r.a.createElement(Y,Object.assign({},e,{key:e.key}))}):null,s=c?c.map(function(e,t){return r.a.createElement("div",{key:t},"thing")}):null,u=a?a.map(function(e,t){return r.a.createElement("div",{key:t},e)}):null;return r.a.createElement("div",{className:"room",style:n},t,i,s,u)}}]),t}(a.Component),J=(n(71),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(S.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={currentRoom:n.props.match.params.id,loadGame:!1,gameLoaded:!1,inventoryIsOpen:!1,roomsList:null,characters:{}},n}return Object(w.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.props,t=e.currentRoom,n=(e.gameLoaded,e.loadGame),a=e.inventory,r=e.characters,o=e.roomsList;this.setState({loadGame:n,roomsList:o,currentRoom:t,characters:r,inventoryIsOpen:a.isOpen})}},{key:"componentWillReceiveProps",value:function(e){this.state.currentRoom!==e.match.params.id&&(this.setState({currentRoom:Number(e.match.params.id)}),this.props.roomChanged(Number(e.match.params.id)))}},{key:"render",value:function(){var e=this.props.gameLoaded,t=this.state,n=t.currentRoom,a=t.roomsList;t.characters;if(!e)return r.a.createElement(G.a,{to:"/"});var o=a?a.map(function(e,t){return r.a.createElement(G.b,{path:"/game/".concat(e.index.toString()),exact:!0,render:function(t){return r.a.createElement(B,Object.assign({},t,{state:e}))},key:t})}):null;return r.a.createElement("div",{className:"game-page"},r.a.createElement("div",{className:"game-page__rooms"},r.a.createElement(G.d,null,o)),r.a.createElement("div",{className:"game-page__popup"},r.a.createElement("h1",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0438\u0433\u0440\u044b."),r.a.createElement("p",null,"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430, \u043a\u043e\u043c\u043d\u0430\u0442\u044b \u0438 \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0435 \u043e\u043a\u043d\u043e"),r.a.createElement("p",null,"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u043a\u043e\u043c\u043d\u0430\u0442\u0430 ",n)),r.a.createElement(V,null))}}]),t}(a.Component)),F=Object(s.b)(function(e){return{currentRoom:e.currentRoom,gameLoaded:e.gameLoaded,roomsList:e.roomsList,inventory:e.inventory}},function(e){return{roomChanged:function(t){e({type:"CHANGE_ROOM",payload:t})},gameLoading:function(t){e({type:"GAME_LOADED",payload:t})}}})(J),q=(n(72),function(e){return function(t){return r.a.createElement(f,null,function(n){return r.a.createElement(e,Object.assign({},t,{gameService:n}))})}}),z=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(S.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r))))._isMounted=!1,n.state={loadPercent:0,loadingText:null,hasError:!1,characterList:[]},n.errorCatcher=function(e){return"number"===typeof e?(n.setState({hasError:!0}),!1):e},n.onLoadingDone=function(){var e=n.state,t=e.hasError,a=e.loadPercent;if(n.onChangeLoadingText(),t||100!==a)return!1;n.props.gameLoading(!1),n.props.onLoadingDone()},n.onChangePersent=function(e){var t=n.state.loadPercent+e;n.setState({loadPercent:t})},n.onChangeLoadingText=function(){var e=n.state.loadPercent;[{index:0,name:"\u043b\u043e\u043a\u0430\u0446\u0438\u0439"},{index:40,name:"\u043a\u0432\u0435\u0441\u0442\u043e\u0432"},{index:75,name:"\u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0435\u0439"}].forEach(function(t){var a=t.name,r=t.index;e>=r&&n.setState({loadingText:a})})},n}return Object(w.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;var t=this.props,n=t.gameService;t.gameLoaded;n.getCharacterList().then(function(t){if(e._isMounted){var n=e.errorCatcher(t);return!!n&&(e.setState({characterList:n}),e.props.loadCharacters(n),!0)}}).then(function(){e.onChangePersent(35),e.onLoadingDone()}),n.getRoutes().then(function(t){if(e._isMounted){var n=e.errorCatcher(t);return!!n&&(e.props.loadRoutes(n),!0)}}).then(function(){e.onChangePersent(35),e.onLoadingDone()}),n.getRooms().then(function(t){var n=t.roomsList;if(e._isMounted){var a=e.errorCatcher(n);return!!a&&(e.props.loadRooms(a),!0)}}).then(function(){e.onChangePersent(30),e.onLoadingDone()})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state,t=e.loadPercent,n=e.hasError,a=e.loadingText,o=n?r.a.createElement("div",{className:"game-loader__error"},r.a.createElement("div",{className:"game-loader__error-text"},"\u041e\u0448\u0438\u0431\u043a\u0430, \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043b\u0438\u0441\u044c"),r.a.createElement(i.b,{to:"/",className:"game-loader__link"},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")):r.a.createElement("div",{className:"game-loader__loading"},r.a.createElement("div",{className:"game-loader__loading-text"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 ",a),r.a.createElement("div",{className:"game-loader__line"},r.a.createElement("div",{className:"game-loader__line-filler",style:{width:"".concat(t,"%")}})));return r.a.createElement("div",{className:"game-loader"},o)}}]),t}(a.Component),Q=q(Object(s.b)(null,function(e){return{gameLoading:function(t){e({type:"GAME_LOADED",payload:t})},loadCharacters:function(t){e(function(e){return{type:"CHARACTERS_LOAD",payload:e}}(t))},loadRoutes:function(t){e({type:"ROUTE_SET_LIST",payload:t})},loadRooms:function(t){e(function(e){return{type:"ROOM_SET_LIST",payload:e}}(t))}}})(z)),X=(n(73),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(S.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={gameLoaded:!1,gameLoading:!1},n.onLoadingDone=function(){n.props.gameLoaded(!0),n.setState({gameLoaded:!0,gameLoading:!0})},n}return Object(w.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.gameLoading?r.a.createElement(G.a,{to:"/game/1"}):null;return r.a.createElement("div",{className:"page"},r.a.createElement(Q,{onLoadingDone:this.onLoadingDone}),e)}}]),t}(a.Component)),Z=Object(s.b)(function(e){return{gameLoaded:e.gameLoaded}},function(e){return{gameLoaded:function(t){e(function(e){return{type:"GAME_LOADED",payload:e}}(t))}}})(X),$=function(e){function t(){return Object(l.a)(this,t),Object(S.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(G.d,null,r.a.createElement(G.b,{path:"/",component:P,exact:!0}),r.a.createElement(G.b,{path:"/loading",component:Z,exact:!0}),r.a.createElement(G.b,{path:"/game/?id",component:F}),r.a.createElement(G.b,{path:"/settings/",component:I,exact:!0}),r.a.createElement(G.b,{path:"/save-game",component:W,exact:!0}),r.a.createElement(G.b,{path:"/load-game",component:W,exact:!0}),r.a.createElement(G.b,{path:"/new-game/",component:F,exact:!0}),r.a.createElement(G.b,{path:"/game/:id?",render:function(e){var t=e.match;return r.a.createElement(F,{match:t})}})))}}]),t}(a.Component),ee=(n(74),function(e){function t(){return Object(l.a)(this,t),Object(S.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"error-indicator"},"\u041e\u0448\u0438\u0431\u043a\u0430")}}]),t}(a.Component)),te=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(S.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(w.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(ee,null):this.props.children}}]),t}(a.Component),ne=(n(75),D(u));window.store=ne;var ae=new p;c.a.render(r.a.createElement(s.a,{store:ne},r.a.createElement(te,null,r.a.createElement(g,{value:ae},r.a.createElement(i.a,null,r.a.createElement($,null))))),document.getElementById("root"))}},[[35,1,2]]]);