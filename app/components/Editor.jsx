// @flow
import React from 'react';
// import styles from './Editor.css';


type Props = {
  tabIndex: number,
  tabList: Array<string>,
  tabs: Object,
};

const Editor = (props: Props) => {
  const { tabIndex, tabList, tabs } = props;
  const tab = tabs[tabList[tabIndex]];

  return (
    <div>
      <div>
        <h2>Editor</h2>
        <h4>{tab.key}</h4>
        {tab.text}
      </div>
    </div>
  );
};

export default Editor;

