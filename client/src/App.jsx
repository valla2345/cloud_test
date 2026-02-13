import axios from "axios"
import { useState } from "react"


function App() {

  const [data, setData] = useState()
  const [obj, setObj] = useState()
  const sendToServer = () => {
    axios.post('/getData', {
      data: data
    })
      .then((res) => {
        console.log(res.data)
        setObj(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <h1>
        <p>Client에서 Server로 데이터 전송하기</p>
        <input type="text" onChange={(e) => setData(e.target.value)}></input>
        <button onClick={sendToServer}>전송</button>
        <hr />
        <p>Server에서 Client로 넘어온 데이터</p>
        {obj?.status === 200 && <p>{obj.nick}님 환영합니다.</p>}
      </h1>
    </>
  )
}

export default App
