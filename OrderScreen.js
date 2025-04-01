import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const OrderScreen = () => {
  const [quantity, setQuantity] = useState(2);
  const price = 28; // Giá mỗi món ăn
  const deliveryFee = 6.20;

  return (
    <View style={styles.container}>
      {/* Hình ảnh món ăn */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/0896/cd31/9dba7b6c551de83c9f8fd689b415ce99?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ENhLEdjt6D-ydDlXnTYK48ynVk5tql5MfE3MGlrMZ4hF5DrsEAD~NrH3sVA7SZ8~MBZ25zM0xmQ5z4XsO0SOH-xwfCtsgKZlfgbWFd9DHEcYMHZy8mMH~e6cxVR8yrnTpxfB5GYi6cTR20CY01vmcgaRPZsdzmHHcCBDmOoFGD9yOiiSc5G-P9kJH4gOEdqHEEKk5O5Kke4-pmEQolJCD4d~Gn~7rzFa-0B31ClvCM6plSuvy5mmKLqmVX1b6QYRskOnaqOYyee4i6xey6lT0HxI0vSEv9I~tzTT4ltfN7FaheIQs~I-9CtNBU40BbFa-K8AebUIkQrKzKb5i-9F~Q__' }} style={styles.foodImage} />
        <Text style={styles.discountLabel}>10% OFF</Text>
      </View>

      {/* Danh sách các món ăn tương tự */}
      <View style={styles.similarItems}>
        <Image source={{ uri: 'https://th.bing.com/th/id/OIP.1BfYvDWlU_nzb0IREbtGXgHaHa?rs=1&pid=ImgDetMain' }} style={styles.similarImage} />
        <Image source={{ uri: 'https://th.bing.com/th/id/OIP.1BfYvDWlU_nzb0IREbtGXgHaHa?rs=1&pid=ImgDetMain' }} style={styles.similarImage} />
        <Image source={{ uri: 'https://th.bing.com/th/id/OIP.1BfYvDWlU_nzb0IREbtGXgHaHa?rs=1&pid=ImgDetMain' }} style={styles.similarImage} />
      </View>

      {/* Thông tin món ăn */}
      <Text style={styles.foodName}>BURGER</Text>
      <Text style={styles.rating}>⭐ 4.9 (3k+ Rating)</Text>
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

      {/* Địa chỉ giao hàng */}
      <View style={styles.shippingContainer}>
        <Text style={styles.shippingTitle}>Delivery Address</Text>
        <Text style={styles.shippingDetails}>Dhaka, Bangladesh</Text>
      </View>

      {/* Phương thức thanh toán */}
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentTitle}>Payment Method</Text>
        <TouchableOpacity>
          <Text style={styles.paymentChange}>Change</Text>
        </TouchableOpacity>
      </View>

      {/* Chi tiết đơn hàng */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Subtotal (2): ${price * quantity}</Text>
        <Text style={styles.summaryText}>Delivery Fee: ${deliveryFee}</Text>
        <Text style={styles.total}>Payable Total: ${price * quantity + deliveryFee}</Text>
      </View>

      {/* Nút xác nhận đơn hàng */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  imageContainer: { alignItems: 'center', position: 'relative' },
  foodImage: { width: 400, height: 200, borderRadius: 12 },
  discountLabel: { position: 'absolute', top: 10, right: 10, backgroundColor: 'red', color: '#fff', padding: 6, fontWeight: 'bold', borderRadius: 5 },
  similarItems: { flexDirection: 'row', justifyContent: 'center', marginVertical: 10 },
  similarImage: { width: 80, height: 80, borderRadius: 10, marginHorizontal: 5 },
  foodName: { fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
  rating: { fontSize: 16, color: '#777', textAlign: 'center' },
  price: { fontSize: 20, color: 'green', fontWeight: 'bold', textAlign: 'center', marginVertical: 8 },
  quantityContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 10 },
  button: { padding: 10, backgroundColor: '#ddd', borderRadius: 5 },
  buttonText: { fontSize: 18, fontWeight: 'bold' },
  quantity: { fontSize: 20, marginHorizontal: 10 },
  shippingContainer: { marginVertical: 10 },
  shippingTitle: { fontSize: 16, fontWeight: 'bold' },
  shippingDetails: { fontSize: 14, color: '#555' },
  paymentContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  paymentTitle: { fontSize: 16, fontWeight: 'bold' },
  paymentChange: { fontSize: 16, color: 'blue' },
  summary: { marginTop: 20 },
  summaryText: { fontSize: 16, marginVertical: 4 },
  total: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  orderButton: { marginTop: 20, backgroundColor: '#ff4500', padding: 12, borderRadius: 6, alignItems: 'center' },
  orderText: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
});

export default OrderScreen;
