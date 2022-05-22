export const isLogued = (req:any, res:any, next:Function) => {
    if (!req.session.nombreUsuario) {
        res.redirect('/login');
    }
    next()
}