import { Router } from "express"
const routes = Router()

routes.post('/login' , (req, res) => {
    const { nombre } = req.body
    if (req.session.nombreUsuario) {
        res.redirect('/products');
    } else {
        req.session.nombreUsuario = nombre;
        res.redirect('/products');
    }
})

routes.get('/logout', (req, res) => {
    req.session.destroy(function (err) {
      res.render('/logout');
     });
})


export default routes