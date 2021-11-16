"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const class_conection_1 = require("./class.conection");
class Select extends class_conection_1.Conecction {
    constructor() {
        super();
        this._conn = super.conn();
    }
    selectAll() {
        ;
        this._conn.query("use b1qra5w0w1ujakonxla7;");
        this._conn.query(`SELECT * FROM inventory`, function (error, results, fields) {
            if (error)
                throw error;
            console.log(results);
            return results;
        });
    }
    SelectFilter(attribute, value) {
        ;
        this._conn.query("use b1qra5w0w1ujakonxla7;");
        this._conn.query(`SELECT * FROM inventory WHERE ${attribute} = '${value}'`, function (error, results, fields) {
            if (error)
                throw error;
            console.log(results);
            return results;
        });
    }
    SelectFilterRange(desde, hasta, attribute) {
        ;
        this._conn.query("use b1qra5w0w1ujakonxla7;");
        this._conn.query(`SELECT * FROM inventory WHERE ${attribute} >= '${desde}' AND
        ${attribute} <= '${hasta}'`, function (error, results, fields) {
            if (error)
                throw error;
            console.log(results);
            return results;
        });
    }
}
exports.Select = Select;
/*

- ID (autoinc)
- Referencia
- Nombre
- Talla/Medida
- Precio
- Descripción

*/ 
