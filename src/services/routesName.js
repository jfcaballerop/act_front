const ROUTESNAME = {
	autenticate: function () {
		return "http://brooklyn-bridge.i3met.com:4000/authenticate"
	},
	showusers: function () {
		return "http://brooklyn-bridge.i3met.com:4000/users"
	},
	getuser: function (id) {
		return "http://brooklyn-bridge.i3met.com:4000/users/" + id
	},
	getActConsOrd: function () {
		return "http://brooklyn-bridge.i3met.com:4000/act_cons_ords"
	},
	delActConsOrd: function (id) {
		return "http://brooklyn-bridge.i3met.com:4000/act_cons_ords/" + id
	},
	getSessionToken: function (sessionName) {
		return {
			headers: {
				'Authorization': JSON.parse(sessionStorage.getItem(sessionName))["user"]["token"]
			}
		}
	},
	newuser: function () {
		return "http://brooklyn-bridge.i3met.com:4000/users"
	}
}

export default ROUTESNAME;