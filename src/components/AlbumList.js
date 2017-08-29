import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    
    constructor() {
        super();
        this.state = {
            albums: []
        };
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((res) => {
                this.setState({
                    albums: res.data
                });
            });     
    }

    renderAlbums() {
        return this.state.albums.map((album) => {
            return <AlbumDetail key={album.title} album={album} />;
        });
    }

    render() {

        console.log('state', this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }

}

export default AlbumList;
