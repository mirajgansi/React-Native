import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapLibreGL from '@rnmapbox/maps';

MapLibreGL.setAccessToken(null); // Not needed for GalliMaps

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapLibreGL.MapView
        style={styles.map}
        styleURL="https://map-init.gallimap.com/styles/light/style.json?accessToken=fc9e5491-a766-4470-8198-486f4dd054ed"
        logoEnabled={false}
        attributionEnabled={false}
      >
        <MapLibreGL.Camera
          zoomLevel={15}
          centerCoordinate={[85.3, 27.7]}
        />
      </MapLibreGL.MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 }
});
