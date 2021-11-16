"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Update = void 0;
const class_conection_1 = require("./class.conection");
class Update extends class_conection_1.Conecction {
    constructor() {
        super();
        this._conn = super.conn();
    }
    SentenceSQL(value) {
        let _SQL = 'update inventory set ';
        for (const a in value) {
            if (value[a] != undefined && a != 'id') {
                _SQL = _SQL + a + "='" + value[a] + "',";
            }
        }
        _SQL = _SQL + ' where id=' + value.id;
        return _SQL.replace(', where', ' where');
    }
    UpdateTable(campos) {
        ;
        this._conn.query("use b1qra5w0w1ujakonxla7;");
        this._conn.query(this.SentenceSQL(campos), function (error, results, fields) {
            if (error)
                throw error;
            console.log(results);
            return results;
        });
    }
}
exports.Update = Update;
