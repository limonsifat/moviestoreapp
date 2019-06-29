var Common = require(__dirname + '/common-controller');
var user = require(__dirname + '/../models/user.js');

exports.signup = function (request, response) {
	user.findOne({"email": request.body.email}).then((userData) => {
		if(userData != null){
			common.sendResponseBack(response, 'OK', 'This email is already exist!', null);
		} else{
			user.create(request.body)
	   		.then(() => {
    			common.sendResponseBack(response, 'OK', 'Signup successfully!', null);	
	   		})
	   		.catch(err => {
    			common.sendResponseBack(response, 'FAIL', 'Ineternal server error!', null);
			});
		}
   	})
   	.catch(err => {
		common.sendResponseBack(response, 'FAIL', 'Ineternal server error!', null);
   	});
}

exports.login = function (request, response) {
	user.findOne({"email": request.body.email, "password": request.body.password}).then((userData) => {
		if(userData != null){
			var obj = {
				"firstName": userData.firstName,
				"lastName": userData.lastName,
				"email": userData.email
			};
			
			common.sendResponseBack(response, 'OK', 'Login successfully!', obj);
		} else{
			common.sendResponseBack(response, 'OK', 'Incorrect email or password!', null)
		}
   	})
   	.catch(err => {
		common.sendResponseBack(response, 'FAIL', 'Ineternal server error!', null);
   	});
}

exports.changePassword = function (request, response) {

    user.findOne({"email": request.body.email, "password": request.body.oldPassword}).then((userData) => {
		if(userData != null){		
			var id = { '_id': userData._id };
			var updateValue = { $set: {password: request.body.newPassword} };
			
			user.updateOne(id, updateValue).then(() => {
				common.sendResponseBack(response, 'OK', 'Update password successfully!', );	
	   		})
	   		.catch(err => {
				common.sendResponseBack(response, 'FAIL', 'Ineternal server error!', null);
	   		});

		} else{
			common.sendResponseBack(response, 'OK', 'Incorrect email or password!', null)
		}
   	})
   	.catch(err => {
		common.sendResponseBack(response, 'FAIL', 'Ineternal server error!', null);
   	});
}

exports.updateProfile = function (request, response) {

    user.findOne({"email": request.body.email, "password": request.body.oldPassword}).then((userData) => {
		if(userData != null){		
			var id = { '_id': userData._id };
			var updateValue = { $set: {password: request.body.newPassword, firstName: request.body.firstName, lastName: request.body.lastName} };
			
			user.updateOne(id, updateValue).then(() => {
				common.sendResponseBack(response, 'OK', 'Update profile successfully!', );	
	   		})
	   		.catch(err => {
				common.sendResponseBack(response, 'FAIL', 'Ineternal server error!', null);
	   		});

		} else{
			common.sendResponseBack(response, 'OK', 'Incorrect email or password!', null)
		}
   	})
   	.catch(err => {
		common.sendResponseBack(response, 'FAIL', 'Ineternal server error!', null);
   	});
}