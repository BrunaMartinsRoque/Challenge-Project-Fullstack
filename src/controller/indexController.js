const { User } = require("../models");

// const indexController = {
//   index(req, res) {
//     res.render("home");
//   },
//   async salvar(req, res) {
//     const { name, email, message } = req.body;
//     if (name === "" || email === "" || message === "") {
//       res.send("insira os dados");
//     // } else if (name === undefined || email === null || message === null) {
//     //   res.send("verifique os dados");
//     } else if (
//       name === undefined ||
//       email === undefined ||
//       message === undefined
//     ) {
//       res.send("dados invalidos");
//     } else {
//       const resultado = await User.create({
//         name,
//         email,
//         message,
//       });

//       console.log(resultado);
//       return res.render("home");
//     }
//   },
// };
const indexController = {
	index(req,res){
		res.render('home')
	},
	async salvar(req,res){
		try {
			const{ id, name, email, message } = req.body;
			const result = await User.create(
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
