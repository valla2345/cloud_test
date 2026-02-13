// config : 데이터와 관련된 파일들 
//          ex) db, api, ... etc 

// API (Application Programming Interface)
// : 프로그램과 프로그램 간의 다리 역할 
//   데이터를 주고받기 위한 방법과 규격 
// 서버에게 주문을 한다고 가정했을 때,
// 손님의 주문을 주방으로 전달하는 매개체 

// DB와 연결하려면 mysql2 라는 모듈이 필요 
// 1) 설치 : npm i mysql2 

// 2) require
const mysql = require('mysql2')

// 3) DB 정보 기재 
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234', 
    port : 3306,
    database : 'NODEJS'
})

conn.connect()
module.exports = conn;