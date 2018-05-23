const ROUTESNAME = {
	autenticate: function () {
		return "http://brooklyn-bridge.i3met.com:4000/authenticate"
	},
	showusers: function () {
		return "http://brooklyn-bridge.i3met.com:4000/users"
	},
	getActConsOrd: function () {
		return "http://brooklyn-bridge.i3met.com:4000/act_cons_ords"
	},
	getSessionToken: function (sessionName) {
		return {
			headers: {
				'Authorization': JSON.parse(sessionStorage.getItem(sessionName))["user"]["token"]
			}
		}
	}
}

export default ROUTESNAME;