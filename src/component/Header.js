import React from 'react'
import { SearchOutlined,SettingFilled } from '@ant-design/icons';
import { Button } from 'antd';
import './header.css'
export default function Header() {
    return (
        <div className="header">
            <div className="left-header" >
                <div>Coins</div>
                <div>Exchange</div>
                <div>Swap</div>
            </div>
            <div className="center-header" >
                <img className="logo" src="https://coincap.io/static/logos/black.svg" />
            </div>
            <div className="right-header" >
                <div>
                <SearchOutlined />
                </div>
                <div>
                <SettingFilled />
                </div>
                <div>
                <Button className="btn">Connect Wallet</Button>
                </div>
            </div>
        </div>
    )
}
