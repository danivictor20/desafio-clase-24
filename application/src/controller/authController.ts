

class AuthController{
    
    login(req:any, res:any){
        const { nombre } = req.body
        req.session.nombreUsuario = nombre;
        res.redirect('/products');
    }

    logout (req:any, res:any) {
        const nombre = req.session.nombreUsuario
        req.session.destroy(function (err:any) {
            res.redirect('/products/logout/'+nombre);
        });
    }

    admin (req:any, res:any){
        res.send('Solo para administradores logueados')
    }

}

export default new AuthController()