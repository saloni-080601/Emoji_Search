import React, { Component } from 'react'
import Emoji from './Emoji_list.json'
import { CopyToClipboard } from 'react-copy-to-clipboard';
class EmojiSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchData: '',
            copied: false
        }
    }


    search = (event) => {

        this.setState({
            searchData: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>😼Emoji Search😼</h1>
                <input type="text" className='Zero' onChange={this.search} placeholder="Search....." />
                {Emoji.filter((data) => {
                    return (data.symbol.toLowerCase().includes(this.state.searchData.toLowerCase())
                        || data.keywords.toLowerCase().includes(this.state.searchData.toLowerCase()) ||
                        data.title.toLowerCase().includes(this.state.searchData.toLowerCase()))
                }).map(data => {
                    return (
                        <div className="react">
                            <ul className='emoj'>
                                <div key={data.symbol} className='div'>
                                    <span>{data.symbol}</span>
                                    <span>{data.title}</span>
                                </div>
                                <div className='Copy'>
                                    <CopyToClipboard text={data.symbol}>
                                        <li className='Copybor'>Copy to emoji</li>
                                    </CopyToClipboard>
                                </div>
                            </ul>
                        </div>
                    )
                })}
            </div>

        )
    }
}

export default EmojiSearch
