import generateRandomProds from '../services/faker'


class ViewsController{
    static listProd:Array<any> = []
    constructor(){
        ViewsController.listProd = generateRandomProds()
    }
    
    productsView(req:any, res:any) {
        const log = req.params.log
        const nombre = req.params.nombre
        
        res.render('index', {
            data: log == 'logout' ? 'logout' : 'null',
            nombre: log == 'logout' ? nombre : req.session.nombreUsuario,
            listproducts: ViewsController.listProd
        })
    }

}


export default new ViewsController()