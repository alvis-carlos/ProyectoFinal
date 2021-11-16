import express from 'express';
import bodyParser from "body-parser";
import {Select} from './class.sellect'
import {Update} from './class.update'
import {Insert} from './class.insert'
import {Delete} from './class.delete'
import { Tracing } from 'trace_events';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let __Select = new Select();
let __Update = new Update();
let __Insert = new Insert();
let __Delete = new Delete();


app.get('/consulta', function(req, res) {
    let var1:string=req.body.data1;
    __Select.selectAll();
    res.end();
});

app.post('/consultaSKU', function(req, res) {
    let var1:string=req.body.data1;
    let _json = __Select.SelectFilter('id',var1);
    res.end();
});

app.post('/consultaPrecio', function(req, res) {
    let var1:string=req.body.precioDesde;
    let var2:string=req.body.precioHasta;
    let _json = __Select.SelectFilterRange(var1,var2,'precio');
    res.end();
});


app.post('/updateInventory', function(req, res) {
    let id:number=req.body.id;
    let Referencia:string=req.body.Referencia;
    let Nombre:string =req.body.Nombre;
    let Talla:string =req.body.Talla;
    let Medida:string =req.body.Medida;
    let Descripcion:string =req.body.Descripcion;
    let precio:number =req.body.precio;
    let quantity:number =req.body.quantity;

    let updateIn : any={ 
        'id':id,
        'Referencia': Referencia,
        'Nombre':Nombre,
        'Talla':Talla,
        'Medida':Medida,
        'Descripcion' :Descripcion,
        'precio' :precio,
        'quantity':quantity
        
    }
    __Update.UpdateTable(updateIn);
    res.end();
});

app.post('/InsertInventory', function(req, res) {
    let Referencia:string=req.body.Referencia;
    let Nombre:string =req.body.Nombre;
    let Talla:string =req.body.Talla;
    let Medida:string =req.body.Medida;
    let Descripcion:string =req.body.Descripcion;
    let precio:number =req.body.precio;
    let quantity:number =req.body.quantity;

    let InsertInv : any={ 
        'Referencia': Referencia,
        'Nombre':Nombre,
        'Talla':Talla,
        'Medida':Medida,
        'Descripcion' :Descripcion,
        'precio' :precio,
        'quantity':quantity
        
    }
    if(__Insert.validarDatos(InsertInv) != false){
        __Insert.insertTable(InsertInv)
    }else{
        console.log("Error de campos")
    }
    res.end();
});

app.post('/DeleteInventory', function(req, res) {
    let ide:string=req.body.id;

    if(ide == undefined){
        console.log("falta enviar el valor ID")
    }else{
        __Delete.DeleteTable(ide)
    }
});

app.listen(3000);