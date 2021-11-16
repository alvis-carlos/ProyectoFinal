"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = void 0;
const class_conection_1 = require("./class.conection");
class Delete extends class_conection_1.Conecction {
    constructor() {
        super();
        this._conn = super.conn();
        this.__bandera = false;
    }
    DeleteTable(id) {
        ;
        this._conn.query("use b1qra5w0w1ujakonxla7;");
        this._conn.query(`DELETE FROM inventory WHERE id = ${id}`, function (error, results, fields) {
            if (error)
                throw error;
            console.log(results);
        });
    }
}
exports.Delete = Delete;
