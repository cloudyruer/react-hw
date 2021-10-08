import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import './Assignment3.css'

const Assignment3 = () => {
  const [value, onChange] = useState(new Date('1969-1-1'))

  const calcAge = () => {
    const today = new Date()
    let curAge = new Date().getFullYear() - value.getFullYear()
    const curAgeMonth = today.getMonth() - value.getMonth()

    if (
      //若 curAgeMonth < 0 代表 當年未滿
      //若 curAgeMonth 為 0 代表 同月 因此繼續判斷 Date
      curAgeMonth < 0 ||
      (curAgeMonth === 0 && today.getDate() < value.getDate())
    )
      curAge--

    const whether18 = curAge >= 18

    const comment1 = curAge ? `你已經滿${curAge}歲` : '你還未滿1歲歐'
    const comment2 = whether18 ? '已經滿18歲囉' : '警告! 你未滿18歲'

    return (
      <>
        <div className="as-3__comment">{comment1}</div>
        <div
          className={`as-3__comment ${whether18 ? '' : 'as-3__comment-error'}`}
        >
          {comment2}
        </div>
      </>
    )
  }

  return (
    <div className="as-3">
      <div className="as-3__card">
        <div className="as-3__comment">請選擇生日</div>
        <DatePicker onChange={onChange} value={value} maxDate={new Date()} />
        {value ? (
          calcAge()
        ) : (
          <div className="as-3__comment">快選生日啦 不要調皮</div>
        )}
      </div>
    </div>
  )
}

export default Assignment3
