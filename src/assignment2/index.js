import './Assignment2.css'
import { useState } from 'react'
import MenuLink from './MenuLink'

const Assignment2 = () => {
  const [curActive, setCurActive] = useState('')
  const links = ['首頁', '關於我們', '產品']
  const renderedLinks = links.map((link) => (
    <MenuLink
      key={link}
      curActive={curActive}
      setCurActive={setCurActive}
      link={link}
    />
  ))

  return (
    <>
      <ul>{renderedLinks}</ul>
    </>
  )
}

export default Assignment2
