import React from 'react';
import ContactApp from "../ContactsCard/ContactApp";
import {ButtonGroup, Button } from '@mui/material';

const Home = ({ setIsLoggedIn }) => {

    return (
        <>
          <h1 className="title">You are now logged in!</h1>
          <ContactApp />
          <ButtonGroup variant="text" aria-label="text button group">
          <Button style={{color: "red"}}>Load more</Button>
          <Button style={{color: "red"}} className="back"  onClick={() => setIsLoggedIn(false)}>
            Log Out
          </Button>
    </ButtonGroup>

        </>
      );

}

export default Home