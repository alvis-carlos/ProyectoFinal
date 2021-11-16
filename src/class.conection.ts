import { createConnection } from 'mysql2';
import { table } from 'console';


export class Conecction{
    
    conn(){
        const _conn = createConnection({
            host: 'b1qra5w0w1ujakonxla7-mysql.services.clever-cloud.com',
            user: 'uvalbqqqrlx0mjqd',
            password: 'm6Bqa5cYiupCBIKAcY5q'
        }); 

        return _conn
    }
}