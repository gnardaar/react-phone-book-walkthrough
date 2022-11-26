import React from 'react'

interface Props{
  title:string;
}
//this component adds the UI for the title of the app
//this is also using props from the UI to display on the <Home /> component in main/index.tsx

export const Home =(props: Props,) => {
  return (
    <div>
      {props.title}
    </div>
  )
}
