
const ROUTESNAME = {
	autenticate:function(){ return "http://localhost:4000/authenticate"},
	showusers: function(){ return "http://localhost:4000/users"},
	getSessionToken: function(sessionName) { return {headers: { 'Authorization': JSON.parse(sessionStorage.getItem(sessionName))["user"]["token"]}}}
}

export default ROUTESNAME;