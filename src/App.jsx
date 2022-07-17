import React, { useEffect, useRef } from 'react'
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import { Details, Main } from './components';
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel, BigTranscript, IntroPopup } from '@speechly/react-ui';


function App() {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()

  useEffect(() => {
    if (speechState === SpeechState?.Recording) {
      executeScroll();
    }
  }, [speechState]);
  return (
    <>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: '100vh' }}
      >
        <Grid
          item
          xs={false}
          md={3}
          sm={false}
          className={classes.mobile}
        >
          <Details title="Income" />
        </Grid>

        <Grid
          item
          ref={main}
          xs={12}
          md={4}
          sm={5}
          className={classes.main}
        >
          <Main />
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          sm={5}
        >
          <Grid
            className={classes.grid}
            container
            spacing={0}
            alignItems="center"
            justifyContent="center"
            style={{ margin: "0px" }}>
            <Grid
              item
              md={false}
              xs={12}
              className={classes.income}
            >
              <Details title="Income" />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              className={classes.last}
            >
              <Details title="Expense" />
            </Grid>
          </Grid>
        </Grid>

        {/* Can add "Hey! Assistant" inital to add transaction verbally. */}

        <PushToTalkButtonContainer>
          {/* <BigTranscript placement="top" /> */}
          <PushToTalkButton
            placement="bottom"
            captureKey=" "
            intro="Push & Speak"
            size='70px'
          />
          {/* <IntroPopup /> */}
          {/* <PushToTalkButton /> */}
          {/* <ErrorPanel /> */}
        </PushToTalkButtonContainer>
      </Grid>
    </>
  );
}

export default App;
