import Assignment1 from './assignment1'
// import Assignment2 from './assignment2'
// import Assignment3 from './assignment3'
// import Assignment4 from './assignment4'

const App = () => {
  //  NOTE 一次只能引入 + 開一個
  // e.g. import Assignment4 from './assignment4' 下面就只開 <Assignment4 />
  // 雖然最後整合成一份 但當初實作時是分開的專案 如果一起引入的話css會衝到
  return (
    <>
      <Assignment1 />
      {/* <Assignment2 /> */}
      {/* <Assignment3 /> */}
      {/* <Assignment4 /> */}
    </>
  )
}

export default App
