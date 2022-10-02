import React, { useState } from 'react'
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [num, setNum] = useState();
    return (
        <div>
            <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
                <Toolbar>
                    <NavLink to="/" style={{ color: "white" }}>
                        <Typography>
                            <BookIcon /> Book Store
                        </Typography>
                    </NavLink>
                    <Tabs sx={{ ml: "auto" }}
                        textColor='inherit'
                        indicatorColor='primary'
                        value={num}
                        onChange={(e, val) => setNum(val)}>
                        <Tab LinkComponent={NavLink} to="/Add" label='Add product' />
                        <Tab LinkComponent={NavLink} to="/Books" label='Books' />
                        <Tab LinkComponent={NavLink} to="/About" label='About us' />

                    </Tabs>

                </Toolbar>

            </AppBar>


        </div>
    )
}

export default Header