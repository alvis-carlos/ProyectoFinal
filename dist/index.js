"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const class_sellect_1 = require("./class.sellect");
const class_update_1 = require("./class.update");
const class_insert_1 = require("./class.insert");
const class_delete_1 = require("./class.delete");
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
let __Select = new class_sellect_1.Select();
let __Update = new class_update_1.Update();
let __Insert = new class_insert_1.Insert();
let __Delete = new class_delete_1.Delete();
app.get('/consulta', function (req, res) {
    let var1 = req.body.data1;
    __Select.selectAll();
    res.end();
});
app.post('/consultaSKU', function (req, res) {
    let var1 = req.body.data1;
    let _json = __Select.SelectFilter('id', var1);
    res.end();
});
app.post('/consultaPrecio', function (req, res) {
    let var1 = req.body.precioDesde;
    let var2 = req.body.precioHasta;
    let _json = __Select.SelectFilterRange(var1, var2, 'precio');
    res.end();
});
app.post('/updateInventory', function (req, res) {
    let id = req.body.id;
    let Referencia = req.body.Referencia;
    let Nombre = req.body.Nombre;
    let Talla = req.body.Talla;
    let Medida = req.body.Medida;
    let Descripcion = req.body.Descripcion;
    let precio = req.body.precio;
    let quantity = req.body.quantity;
    let updateIn = {
        'id': id,
        'Referencia': Referencia,
        'Nombre': Nombre,
        'Talla': Talla,
        'Medida': Medida,
        'Descripcion': Descripcion,
        'precio': precio,
        'quantity': quantity
    };
    __Update.UpdateTable(updateIn);
    res.end();
});
app.post('/InsertInventory', function (req, res) {
    let Referencia = req.body.Referencia;
    let Nombre = req.body.Nombre;
    let Talla = req.body.Talla;
    let Medida = req.body.Medida;
    let Descripcion = req.body.Descripcion;
    let precio = req.body.precio;
    let quantity = req.body.quantity;
    let InsertInv = {
        'Referencia': Referencia,
        'Nombre': Nombre,
        'Talla': Talla,
        'Medida': Medida,
        'Descripcion': Descripcion,
        'precio': precio,
        'quantity': quantity
    };
    if (__Insert.validarDatos(InsertInv) != false) {
        __Insert.insertTable(InsertInv);
    }
    else {
        console.log("Error de campos");
    }
    res.end();
});
app.post('/DeleteInventory', function (req, res) {
    let ide = req.body.id;
    if (ide == undefined) {
        console.log("falta enviar el valor ID");
    }
    else {
        __Delete.DeleteTable(ide);
    }
});
app.listen(3000);
