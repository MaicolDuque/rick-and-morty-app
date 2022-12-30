import styled from 'styled-components'
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import './index.css'

export const LayoutContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
`

export function Layout(){
  return (
    <LayoutContainer>
      <Sidebar className="container-sidebar"/>
      <div className='container-outlet'>
        <Outlet />
      </div>
    </LayoutContainer>
  )
}
