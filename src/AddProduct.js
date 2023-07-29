// AddProduct.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const AddProduct = ({ navigation, route }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [addedProduct, setAddedProduct] = useState(null);

  useEffect(() => {
    // Pre-fill the form fields with the product data received as parameter
    if (route.params?.productData) {
      const { title, price, category, description } = route.params.productData;
      setProductName(title || '');
      setPrice(price || '');
      setCategory(category || '');
      setDescription(description || '');
    }
  }, [route.params]);

  const handleAddProduct = () => {
    const product = {
      productName,
      price,
      category,
      description,
    };

    setAddedProduct(product);

    // Call the onProductAdded function passed as a parameter from ProductList screen
    route.params.onProductAdded(product);

    // Navigate back to the ProductList screen
    navigation.goBack();
  };

  // ... (rendering the form elements and styles)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Product Page</Text>
      
      
      <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
        <Text style={styles.addButtonText}>show Added Product</Text>
      </TouchableOpacity>



      {addedProduct && (
        <View style={styles.addedProductContainer}>
          <Text style={styles.addedProductText}>Added Product Details:</Text>
          <Text>Product Name: {addedProduct.productName}</Text>
          <Text>Price: ${addedProduct.price}</Text>
          <Text>Category: {addedProduct.category}</Text>
          <Text>Description: {addedProduct.description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      formContainer: {
        marginBottom: 20,
      },
      input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
      },
      addButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      addedProductContainer: {
        marginVertical: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
      },
      addedProductText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
    
  
    
})

export default AddProduct;
