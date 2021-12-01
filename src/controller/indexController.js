const {Users} = require('../models/users.js')
const indexController = {
	index(req,res){
		res.render('home')
	},
	async salvar(req,res){
		try {
			const{ name,email,message } = req.body;
			const user = await Users.create(
				{
					name,
					email,
					message
				}
			);
			console.log(user)
			return res.redirect('/')
		}catch(err){
			console.log(err);
			return res.redirect('/')
		}		

	},
};
module.exports = indexController;