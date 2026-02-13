const express = require("express")
const path = require("path")
const router = express.Router()
const conn = require("../config/database")

// 메인 페이지
router.get("/", (req, res) => {
    console.log("Hello World! q(≧▽≦q)")
    res.sendFile(path.join(__dirname, "../client/dist/index.html"))
})

// 데이터 받아올 부분
router.post("/getData", (req, res) => {
    console.log('getData : ', req.body);

    const inputData = req.body.data; 

    if (!inputData) {
        console.log("데이터가 undefined입니다. 500 응답 전송");
        return res.status(500).json({ status: 500 });
    }

    const sql = "INSERT INTO DATA_TABLE VALUES (?)";
    
    conn.query(sql, [inputData], (err, rows) => {
        console.log('rows : ', rows);
        
        if (!err && rows) {
            res.json({ status: 200, nick: '이홍진' });
        } else {
            console.log('DB 에러 발생');
            res.status(500).json({ status: 500 });
        }
    });
});

module.exports = router
