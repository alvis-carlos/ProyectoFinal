import {Conecction} from './class.conection'
import { createConnection } from 'mysql2';
import { table } from 'console';
import { fchown } from 'fs';


export class Insert extends Conecction{
    
    private  _conn;
    private __bandera:Boolean;
    
    constructor() {
        super();
        this._conn = super.conn();
        this.__bandera = false
    }

    public validarDatos(camposV:any){

        for( const a in camposV){
            if(camposV[a] == undefined){
                this.__bandera = false
                console.log(a)
                return this.__bandera
            }
        }
    }

    public insertTable(campos:any):any{
        interface Table {
            item:number;
        };
        this._conn.query("use b1qra5w0w1ujakonxla7;")
        this._conn.query(`INSERT INTO inventory (Referencia,Nombre,Talla,Medida,Descripcion,precio,quantity,fechaCreacion)
                            VALUES ('${campos.Referencia}','${campos.Nombre}','${campos.Talla}','${campos.Medida}',
                            '${campos.Descripcion}',${campos.precio},${campos.quantity},NOW());`, function (error, results:Table[], fields) {
            if (error) throw error;
            console.log(results);
        });
    }

}
