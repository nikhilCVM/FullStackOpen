import React from 'react'

export default function Header(props) {
  console.log(props)
  return (
    <>
    <div>{props.course}</div>
    <div>Header kanpisthunda</div>
    </>
  )
}
