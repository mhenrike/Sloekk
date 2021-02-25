import { getByDisplayValue } from '@testing-library/react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    return (
        <StyledHeader>
            <Link to="/">Home</Link> &nbsp;
            <Link to="/register">About</Link> &nbsp;
            <Link to="/login">Users</Link>&nbsp;
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    display: inline-block;
    width: 100%;
    height: 100px;
    background-color: purple;
    `



export default Header