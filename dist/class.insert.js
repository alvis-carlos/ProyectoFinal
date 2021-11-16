"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Insert = void 0;
const class_conection_1 = require("./class.conection");
class Insert extends class_conection_1.Conecction {
    constructor() {
        super();
        this._conn = super.conn();
        this.__bandera = false;
    }
    validarDatos(camposV) {
        for (const a in camposV) {
            if (camposV[a] == undefined) {
                this.__bandera = false;
                console.log(a);
                return this.__bandera;
            }
        }
    }
    insertTable(campos) {
        ;
        this._conn.query("use b1qra5w0w1ujakonxla7;");
        this._conn.query(`INSERT INTO inventory (Referencia,Nombre,Talla,Medida,Descripcion,precio,quantity,fechaCreacion)
                            VALUES ('${campos.Referencia}','${campos.Nombre}','${campos.Talla}','${campos.Medida}',
                            '${campos.Descripcion}',${campos.precio},${campos.quantity},NOW());`, function (error, results, fields) {
            if (error)
                throw error;
            console.log(results);
        });
    }
}
exports.Insert = Insert;
