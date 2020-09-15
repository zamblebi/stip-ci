import React from 'react'
import NavigationBar from './navigationBar'
import {GlobalStyle} from '../styled/all-style'

export default function Layouts({ children }) {
    return (
        <div>
            <GlobalStyle/>
            <NavigationBar/>
            {children}
        </div>
    )
}