

import React, { useState,useEffect } from 'react';
import { View, FlatList, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';
import axios from 'axios'
import { AllProduct } from '../API';


const staticData = [
  {
    id: 1,
    title: 'Product 1',
    price: '10.99',
    category: 'Electronics',
    description: 'This is product 1 description.',
    image: 'https://fakestoreapi.com/img/1.jpg',
  },
  {
    id: 2,
    title: 'Product 2',
    price: '19.99',
    category: 'Clothing',
    description: 'This is product 2 description.',
    image: 'https://fakestoreapi.com/img/2.jpg',
  },
  {
  id: 3,
  title: 'Product 3',
  price: '67',
  category: 'Mobiles',
  description: 'This is product 3 description.',
  image: 'https://fakestoreapi.com/img/3.jpg',
},

  
];

const ProductList = ({navigation}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);  

    
       // Fetch the product data from the API



//     axios.get('https://fakestoreapi.com/products')
//     .then(res => { setProducts(res.data);
//     })
//     .catch(e => console.log(e))
//     .finally(() => setLoading(false));
// }, []);

// axios
// .get('https://fakestoreapi.com/products')
// .then((res) => {
//   setProducts(res.data);
// })
// .catch((error) => {
//   console.log('Axios network error:', error);
// })
// .finally(() => setLoading(false));
// }, []);




// useEffect(() => {
//     setLoading(true);

// AllProduct(products).then(response => { 
//     setProducts(response); 
//     setLoading(false);
//   })
//   .catch((error) => {
//     console.error('Fetch error:', error);
//   })
// }, [products]); 

// useEffect(() => {
//     setLoading(true);

//     AllProduct({category: 'Electronics'}) // Pass any query parameters here if needed, like { category: 'Electronics' }
//       .then((response) => {
//         setProducts(response);
//       })
//       .catch((error) => {
//         console.error('Fetch error:', error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);




      const handleProductAdded = (product) => {
       
        console.log('New product:', product);
      };
   
    // useEffect(() => {
    //     // Check if the email state is not empty
    //     if (data) {
    //       console.log('Email retrieved from AsyncStorage:', data);
    //       // You can also use the email state value for further processing, if needed
    //     }
    //   }, [data]);

  const renderItem = ({ item }) => (
    <View>
    <Card>
      {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
      <Text style={styles.title}>Item: {item.title}</Text>
      <Text style={styles.price}>Price: ${item.price}</Text>
      <Text style={styles.category}>Category: {item.category}</Text>
      <Text style={styles.description}>Description: {item.description}</Text>
      <Button  title={'Add'} onPress={()=>navigation.navigate('', {productData: item, onProductAdded: handleProductAdded})}/>
    </Card>
    </View> 
  );    

  return (
    <View style={styles.container}>
      <FlatList
        data={staticData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  category: {
    fontSize: 14,
    color: 'gray',
  },
  description: {
    marginTop: 10,
  },
});

export default ProductList;
