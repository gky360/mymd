// @flow
import React, { Component } from 'react';
import {
  MuiThemeProvider, createMuiTheme,
  Grid, Paper,
} from 'material-ui';
import Editor from '../components/Editor';


type Props = {
};

type State = {
  tabIndex: number,
  tabList: Array<string>,
  tabs: Object,
};

const theme = createMuiTheme();

class EditorPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      tabIndex: 0,
      tabList: ['readme'],
      tabs: {
        readme: {
          key: 'readme',
          text: `
# MyMd

A markdown editor built with Electron and React
      `,
        },
      },
    };
  }

  render() {
    const { tabIndex, tabList, tabs } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <Grid container>
          <Grid item xs={6}>
            <Paper>
              <Editor
                tabIndex={tabIndex}
                tabList={tabList}
                tabs={tabs}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} />
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default EditorPage;

