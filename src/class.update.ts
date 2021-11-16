import {Conecction} from './class.conection'
import { createConnection } from 'mysql2';
import { table } from 'console';

export class Update extends Conecction{
    private  _conn;
    
    constructor() {
        super();
        this._conn = super.conn();
    }

    private SentenceSQL(value : any){
        let _SQL:string = 'update inventory set ';
        for( const a in value){
            if(value[a] != undefined && a !='id'){
                _SQL = _SQL+a+"='"+value[a]+"',";
            }
        }
        _SQL= _SQL + ' where id='+value.id;
        return _SQL.replace(', where', ' where')
    }

    public UpdateTable(campos:any){
        interface Table {
            item:number;
            data1:number;
        };
        this._conn.query("use b1qra5w0w1ujakonxla7;")
        this._conn.query(this.SentenceSQL(campos), function (error, results:Table[], fields) {
            if (error) throw error;
            console.log(results);
            return results;
        });
    }
}