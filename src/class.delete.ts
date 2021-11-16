import {Conecction} from './class.conection'
import { createConnection } from 'mysql2';
import { table } from 'console';
import { fchown } from 'fs';


export class Delete extends Conecction{
    private  _conn;
    private __bandera:Boolean;
    
    constructor() {
        super();
        this._conn = super.conn();
        this.__bandera = false
    }

    public DeleteTable(id:any):any{
        interface Table {
            item:number;
        };
        this._conn.query("use b1qra5w0w1ujakonxla7;")
        this._conn.query(`DELETE FROM inventory WHERE id = ${id}`, function (error, results:Table[], fields) {
            if (error) throw error;
            console.log(results);
        });
    }
}