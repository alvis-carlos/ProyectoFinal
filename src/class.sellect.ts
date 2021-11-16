import {Conecction} from './class.conection'
import { createConnection } from 'mysql2';
import { table } from 'console';

export class Select extends Conecction{

    private  _conn;
    
    constructor() {
        super();
        this._conn = super.conn();
    }

    public selectAll():any{

        interface Table {
            item:number;
            data1:number;
        };

        this._conn.query("use b1qra5w0w1ujakonxla7;")
        this._conn.query(`SELECT * FROM inventory`, function (error, results:Table[], fields) {
            if (error) throw error;
            console.log(results);
            return results;
        });
    }

    public SelectFilter(attribute: String,value:any):any{
        interface Table {
            item:number;
            data1:number;
        };

        this._conn.query("use b1qra5w0w1ujakonxla7;")
        this._conn.query(`SELECT * FROM inventory WHERE ${attribute} = '${value}'`, function (error, results:Table[], fields) {
            if (error) throw error;
            console.log(results);
            return results;
        });
    }

    public SelectFilterRange(desde:any,hasta:any,attribute:any){
        interface Table {
            item:number;
            data1:number;
        };

        this._conn.query("use b1qra5w0w1ujakonxla7;")
        this._conn.query(`SELECT * FROM inventory WHERE ${attribute} >= '${desde}' AND
        ${attribute} <= '${hasta}'`, function (error, results:Table[], fields) {
            if (error) throw error;
            console.log(results);
            return results;
        });
    }
}


/*

- ID (autoinc)
- Referencia
- Nombre
- Talla/Medida
- Precio
- Descripción

*/