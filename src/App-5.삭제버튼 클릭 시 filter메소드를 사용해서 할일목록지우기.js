import React, {useState} from 'react'

export default function App() {

const listStyle ={
  padding:"10px",
  borderBottom:"1px #ccc dotted",
  textDecoration:"none"
}
//버튼스타일
const btnStyle ={
  color:"#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor:"pointer",
  float:"right"
}

//1.할일목록 배열에 저장

const [todoList, settodoList] = useState([]);

//2.textChange함수
const textChange = (e) => {
 //console.log('e', e.target.value)
 setValue(e.target.value);
}

const [value, setValue] = useState("");

const btnSubmit = (e) => {
  e.preventDefault();

  let newTodo = {
    id: Date.now(),
    title: value,
    completed: false
}

settodoList(prev => [...prev, newTodo])
setValue("");
}

const btnClick = (id) => {
  let newTodoList = todoList.filter(data => data.id !== id)

  //console.log('newTodoList', newTodoList);
  settodoList(newTodoList);
}


  return (
    <div className='container'>
      <div className="todoBlock">
        <div className="title">
          <h1>To do List</h1>
        </div>
        {/*2.map()메소드를 이용해 배열내에 요소를 호출한 결과를 모아 새로운 배열로 반환*/}
        {todoList.map((data)=>
        <div style={listStyle} key={data.id}>
          <input type="checkbox" defaultChecked={false} />
          {data.title}
          <button style={btnStyle} onClick ={() => btnClick(data.id)}>x</button>
        </div>
        )}
        {/* 할 일 목록 추가 입력창 만들기 */}
        <form style={{display:'flex'}} onSubmit={btnSubmit}>
          <input type="text" name="value" style={{flex:'10', padding:'5px'}}placeholder="해야할 일을 입력하세요"
          onChange={textChange} value={value}/>
          <input type="submit" value="입력" style={{flex:'1'}}/>
        </form>
        
      </div>
      
    </div>
  )
}