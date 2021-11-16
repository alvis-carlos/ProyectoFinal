"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conecction = void 0;
const mysql2_1 = require("mysql2");
class Conecction {
    conn() {
        const _conn = (0, mysql2_1.createConnection)({
            host: 'b1qra5w0w1ujakonxla7-mysql.services.clever-cloud.com',
            user: 'uvalbqqqrlx0mjqd',
            password: 'm6Bqa5cYiupCBIKAcY5q'
        });
        return _conn;
    }
}
exports.Conecction = Conecction;
