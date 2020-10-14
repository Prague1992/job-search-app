import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css'

class SearchBar extends Component {
    render() {
        const { dark_mode, search, location, full_time } = this.props.stateValues;
        return (
            <div className={dark_mode ? "searchbarDark" : "searchbarLight"}>
                <div style={{ padding: '16px', paddingLeft: '25px', textAlign: 'left' }}>
                    <FontAwesomeIcon icon={faSearch} style={{ color: '#5865E0', marginRight: '5px' }} />
                    <input type="text" value={search} name="search" id="searchbar" placeholder="Filter by title, companies, expertise..." style={{ width: '75%', marginLeft: '5px' }} onChange={this.props.searchQueryHandler}></input>
                </div>
                <div style={dark_mode ? { backgroundColor: 'rgb(56 56 56)', margin: '3px 0px 7px 0px' } : { backgroundColor: '#e6e5e5', margin: '3px 0px 7px 0px' }}>
                </div>
                <div style={{ padding: '16px', paddingLeft: '25px', textAlign: 'end' }}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#5865E0', marginRight: '5px' }} />
                    <input type="text" value={location} name="location" id="searchbar" placeholder="Filter by location..." style={{ width: '60%', marginLeft: '5px' }} onChange={this.props.searchQueryHandler}></input>
                </div>
                <div style={dark_mode ? { backgroundColor: 'rgb(56 56 56)', margin: '3px 0px 7px 0px' } : { backgroundColor: '#e6e5e5', margin: '3px 0px 7px 0px' }}>
                </div>
                <div style={{ textAlign: 'left', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '0px 16px' }}>
                    <label class="container"><span style={dark_mode ? { color: '#736e6e' } : { color: 'darkgrey' }}>Full Time Only</span>
                        <input type="checkbox" defaultChecked={full_time} onChange={this.props.fullTimeToggle} />
                        <span class={dark_mode ? "checkmarkDark" : "checkmarkLight"}></span>
                    </label>
                    <button class="searchbutton" onClick={this.props.searchButtonOnClick}>Search</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;