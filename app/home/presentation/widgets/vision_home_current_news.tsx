import React, { useEffect, useState } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  Text, 
  Alert, 
  View, 
  Dimensions, 
  ActivityIndicator 
} from 'react-native';

// API URL
const API_URL = 'https://vision-iadx.onrender.com/api/images/imagebytes/byteimages';

// Get screen dimensions
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
const containerHeight = screenHeight * 0.3;

export default function VisionHomeCurrentNews() {
  const [images, setImages] = useState<any[]>([]);  // State to store the list of images
  const [loading, setLoading] = useState<boolean>(true);  // Loading state
  const [error, setError] = useState<string | null>(null);  // Error state

  // Fetch images from API when component mounts
  useEffect(() => {
    fetchImages();
  }, []);

  // Function to fetch images from the API
  const fetchImages = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      const data = await response.json();
      setImages(data);  // Store the fetched images
    } catch (error) {
      setError('Failed to load images. Please try again.');
      Alert.alert('Error');
    } finally {
      setLoading(false);  // Hide loading spinner
    }
  };

  // Handle press event
  const handlePress = (title: string) => {
    Alert.alert('Clicked on', title);
  };

  // Render loading state
  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Render error state
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={() => handlePress(item.name)} 
            style={styles.itemContainer}
          >
            <Image 
              source={{ uri: `data:image/png;base64,${item.base64Data}` }} 
              style={{ height: containerHeight, width: 300 }} 
            />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text: {
    marginTop: 5,
    textAlign: 'center',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});
