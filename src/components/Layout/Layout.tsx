import styled from 'styled-components'
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import './index.css'

export const LayoutContainer = styled.div`
  display: flex;
  height: 100%;
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
