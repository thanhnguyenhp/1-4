import React from 'react';
import { Card, Button } from 'react-native-paper';
import { Text } from 'react-native';

const ProductCard = ({ product }) => (
  <Card style={{ marginBottom: 10 }}>
    <Card.Cover source={{ uri: product.image }} />
    <Card.Content>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{product.name}</Text>
      <Text>{product.price}</Text>
    </Card.Content>
    <Card.Actions>
      <Button mode="contained">Add to Cart</Button>
    </Card.Actions>
  </Card>
);

export default ProductCard;
