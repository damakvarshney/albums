import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';

const AlbumsDetail = ({albumsData}) => {
  return (
    <View style={{marginBottom: 20}}>
      {albumsData.map((album) => {
        return (
          <>
            <View style={styles.container} key={album.title}>
              <View style={styles.horizontalSubContainer}>
                <Image
                  style={styles.artistImage}
                  source={{uri: album.thumbnail_image}}
                />
                <View style={styles.nameContainer}>
                  <Text style={styles.albumName}>{album.title}</Text>
                  <Text style={styles.artistStyle}>{album.artist}</Text>
                </View>
              </View>
              <Image source={{uri: album.image}} style={styles.albumImage} />
              <TouchableOpacity
                onPress={() => Linking.openURL(album.url)}
                style={styles.button}>
                <Text style={styles.buttonText}>Buy Now!</Text>
              </TouchableOpacity>
            </View>
          </>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#feeafa',
    elevation: 5,
  },
  horizontalSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  nameContainer: {
    width: '100%',
    paddingHorizontal: 5,
  },
  artistImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
    marginEnd: 20,
  },
  albumName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  artistStyle: {
    fontSize: 12,
    fontWeight: '800',
  },
  albumImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#efd3d7',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#707070',
  },
});

export default AlbumsDetail;
