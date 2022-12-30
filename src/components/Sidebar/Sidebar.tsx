import * as React from "react";

import './styles.css'
import rickMortyTitle from '../../assets/Rick_and_Morty.png'
import rickMortyTitle2 from '../../assets/Rick-and-morty-title2.png'

export function Sidebar(props: React.HTMLAttributes<HTMLDivElement>){
  return(
    <div {...props}>
      <img className="sidebar-title-image top" src={rickMortyTitle} alt="Rick and Morty" />
      <img className="sidebar-title-image bottom" src={rickMortyTitle2} alt="Rick and Morty Footer" />
    </div>
  )
}
