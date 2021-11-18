import './App.css';
import { Table, Tag, Space, Button,Card } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { getData } from './redux/actions'
import { connect } from "react-redux";
import TableView from './component/TableView';
import Header from './component/Header';

function App() {

  return (
    <div>
      <Header />
      <div className="bottom">
<div className="content-block">
<div className="content" >      
<div>MARKET CAP</div>
<div>$2.74T</div>
</div>
<div className="content" >
<div>EXCHANGE VOL</div>
<div>$147.21B</div>
</div>
<div className="content" >
<div>ASSETS</div>
<div>2,290</div>
</div>
<div className="content" >
<div>EXCHANGES</div>
<div>73</div>
</div>
<div className="content" >
<div>MARKETS</div>
<div>18,746</div>
</div>
<div className="content" >
<div>BTC DOM INDEX</div>
<div>41.4%</div>
</div>
</div>
      </div>
        <TableView className="table" />
      
    </div>
  );
}

export default App;

