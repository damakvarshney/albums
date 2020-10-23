import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import axios from 'axios';
import AlbumsDetail from './AlbumsDetail';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => setAlbums(response.data));
  }, []);

  return (
    <ScrollView>
      <View style={{padding: 20}}>
        <AlbumsDetail albumsData={albums} />
      </View>
    </ScrollView>
  );
};

export default AlbumList;
