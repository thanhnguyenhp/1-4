import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CartScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 10; // Giá mỗi món ăn
  const deliveryFee = 2;

  return (
    <View style={styles.container}>
      {/* Hình ảnh món ăn */}
      <Image source={{ uri: 'https://example.com/pizza.png' }} style={styles.foodImage} />

      {/* Tên và giá món ăn */}
      <Text style={styles.foodName}>Pepperoni Pizza</Text>
      <Text style={styles.price}>${price}</Text>

      {/* Bộ đếm số lượng */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Tổng giá */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Subtotal: ${price * quantity}</Text>
        <Text style={styles.summaryText}>Delivery Fee: ${deliveryFee}</Text>
        <Text style={styles.total}>Total: ${price * quantity + deliveryFee}</Text>
      </View>

      {/* Nút xác nhận đơn hàng */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  foodImage: { width: 200, height: 200, borderRadius: 10 },
  foodName: { fontSize: 22, fontWeight: 'bold', marginVertical: 8 },
  price: { fontSize: 18, color: 'green' },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  button: { padding: 10, backgroundColor: '#ddd', borderRadius: 5 },
  buttonText: { fontSize: 18, fontWeight: 'bold' },
  quantity: { fontSize: 20, marginHorizontal: 10 },
  summary: { width: '100%', marginTop: 20 },
  summaryText: { fontSize: 16, marginVertical: 4 },
  total: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  orderButton: { marginTop: 20, backgroundColor: '#ff4500', padding: 12, borderRadius: 6 },
  orderText: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
});

export default CartScreen;
