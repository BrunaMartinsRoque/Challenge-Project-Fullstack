const {users} = require('../models/users.js')
const indexController = {
	index(req,res){
		res.render('home')
	},
	async salvar(req,res){
		try {
			const{ id, name, email, message } = req.body;
			const result = await users.create(
				{
					id,
					name,
					email,
					message
				}
			);
			console.log(result)
			return res.redirect('/')
		}catch(err){
			console.log(err);
			return res.redirect('/')
		}		

	},
};
module.exports = indexController;