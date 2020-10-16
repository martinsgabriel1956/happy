import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Mapview ,{ Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons/';
import { useNavigation } from '@react-navigation/native';

import mapMarker from '../images/map-marker.png';

export default function OrphanagesMap() {
    const navigation = useNavigation();

    function handleNavigateToOrphanageDetails() {
        navigation.navigate('OrphanageDetails');
    }

    return (
        <View style={styles.container}>
            <Mapview 
                provider={PROVIDER_GOOGLE}
                style={styles.map} 
                initialRegion={{ 
                latitude: -22.922772,
                longitude: -43.5510806,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008,
                }}
            >
 
                <Marker 
                    icon={mapMarker}
                    calloutAnchor={{
                        x: 2.7,
                        y: 0.8,
                    }}
                    coordinate={{ 
                        latitude: -22.922772,
                        longitude: -43.5510806,
                    }}
                >
                        
                    <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
                        <View style={styles.calloutContainer}>
                            <Text style={styles.calloutText}>Lar dos Anjos</Text>
                        </View>
                    </Callout>
                </Marker>
            </Mapview>

            <View style={styles.footer}>
                <Text style={styles.footerText}>2 orfanatos encontrados</Text>
                <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {}}>
                    <Feather name="plus" size={20} color='#FFF' />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255,255,255, 0.8)',
      borderRadius: 16,
      justifyContent: 'center',
    },
  
    calloutText: {
      fontFamily: 'nunito700',
      color: '#0089a5',
      fontSize: 14,
    },
  
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
  
      backgroundColor: '#fff',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 10,
    },
  
    footerText: {
      fontFamily: 'nunito700',
      color: '#8fa7b3',
  
    },
  
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3b6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center',
  
    },
  });
