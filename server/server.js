const express = require("express")

const app = express()

const indexRouter = require("./routes/index")

const path = require("path")

// cors 오류 해결
const cors = require("cors")
app.use(cors())
app.use(express.json())

// post 방식 데이터를 주고 받을 때 필요한 미들웨어
app.use(express.urlencoded({ extended: true }))

// npm run build를 통해 React 프로젝트를 하나의 index.html 파일로 만듬
// -> 그 파일을 켜기 위해 정적인 파일을 담당하는 코드를 작성
app.use(express.static(path.join(__dirname, '../client/dist')))

app.use("/", indexRouter)

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`${app.get('port')}번 포트에서 서버 실행 중`);
})

