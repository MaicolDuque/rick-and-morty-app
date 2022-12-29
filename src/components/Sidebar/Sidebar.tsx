import * as React from "react";

import './styles.css'
import rickMortyTitle from '../../assets/Rick_and_Morty.png'

export function Sidebar(props: React.HTMLAttributes<HTMLDivElement>){
  return(
    <div {...props}>
      <div>
        <img className="sidebar-title-image" src={rickMortyTitle} alt="Rick and Morty" />
      </div>
      Sidebar
    </div>
  )
}
