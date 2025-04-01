import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const popularItems = [
  { id: '1', name: 'Cheese Burger', image: 'https://th.bing.com/th/id/OIP.ovkKNT-Ed_82VnoPRYom3wHaGa?w=193&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: '2', name: 'Pepperoni Pizza', image: 'https://th.bing.com/th/id/OIP.RipGlkuJxW__CFXRTvqhCgHaLH?w=1333&h=2000&rs=1&pid=ImgDetMain' },
  { id: '3', name: 'Chicken Wings', image: 'https://th.bing.com/th/id/OIP.0znFNfvuLVPmA6faOLT4-QHaHa?rs=1&pid=ImgDetMain' },
  { id: '4', name: 'Strawberry Shake', image: 'https://th.bing.com/th/id/OIP.U7lVv4bmcWkVC46v2U4B0QHaLH?rs=1&pid=ImgDetMain' },
];

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Ảnh đại diện */}
      <Image source={{ uri: 'https://th.bing.com/th/id/OIP.pAyRN_lNf6IPukCMXYcRcQHaHa?rs=1&pid=ImgDetMain' }} style={styles.avatar} />

      {/* Tên địa điểm */}
      <View>
        <Text style={styles.locationLabel}>Your Location</Text>
        <Text style={styles.location}>Savar, Dhaka</Text>
      </View>

      {/* Biểu tượng thông báo */}
      <TouchableOpacity>
        <Image source={{ uri: 'https://th.bing.com/th/id/OIP.quEjDRgVDUSsGriTtOLJvAHaHa?rs=1&pid=ImgDetMain' }} style={styles.notificationIcon} />
      </TouchableOpacity>
    </View>
  );
};

const SearchBar = () => {
    return (
      <View style={styles.searchContainer}>
        {/* Biểu tượng kính lúp */}
        <Image source={{ uri: 'https://www.freeiconspng.com/uploads/search-icon-png-21.png' }} style={styles.icon} />
  
        {/* Ô tìm kiếm */}
        <TextInput style={styles.searchInput} placeholder="Search your food" placeholderTextColor="#fff" />
  
        {/* Biểu tượng dao và nĩa */}
        <TouchableOpacity>
          <Image source={{ uri: 'https://example.com/fork_knife_icon.png' }} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  };
const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Header />
      <SearchBar />

      {/* Danh mục món ăn */}
      <View style={styles.categories}>
        {['Pizza', 'Burger', 'Drink', 'Rice'].map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <Image source={{ uri: `https://example.com/${category.toLowerCase()}.png` }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Banner quảng cáo */}
      <View style={styles.banner}>
        <Image source={{ uri: 'https://th.bing.com/th/id/OIP.pdbaaKzHva9jRxqsFDsWVgHaE7?rs=1&pid=ImgDetMain' }} style={styles.bannerImage} />
        <Text style={styles.bannerTitle}>BURGER Today's Hot Offer</Text>
        <Text style={styles.bannerDiscount}>10% OFF</Text>
        <Text style={styles.rating}>⭐ 4.9 (3k+ ratings)</Text>
      </View>

      {/* Các món phổ biến */}
      <Text style={styles.popularTitle}>Popular Items</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularList}>
        {popularItems.map(item => (
          <View key={item.id} style={styles.popularItem}>
            <Image source={{ uri: item.image }} style={styles.foodImage} />
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12, paddingHorizontal: 16 },
  avatar: { width: 70, height: 70, borderRadius: 25 },
  locationLabel: { fontSize: 14, color: '#888' },
  location: { fontSize: 18, fontWeight: 'bold' },
  notificationIcon: { width: 24, height: 24 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 8, paddingHorizontal: 10, marginVertical: 10 },
  searchBar: { flex: 1, padding: 10 },
  filterIcon: { width: 24, height: 24, marginLeft: 10 },
  categories: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 },
  categoryButton: { alignItems: 'center' },
  categoryImage: { width: 60, height: 60, marginBottom: 8 },
  categoryText: { fontSize: 16 },
  banner: { padding: 16, backgroundColor: '#FFD700', borderRadius: 10, alignItems: 'center', marginBottom: 16 },
  bannerImage: { width: '100%', height: 120, borderRadius: 8 },
  popularTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  popularList: { flexDirection: 'row', paddingVertical: 8 },
  popularItem: { alignItems: 'center', marginRight: 12 },
  foodImage: { width: 80, height: 80, borderRadius: 10 },
  itemName: { fontSize: 14, marginTop: 4 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#800080', // Màu tím giống ảnh
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 10,
  },
  icon: { width: 24, height: 24, tintColor: '#ccc', marginHorizontal: 6 },
  searchInput: { flex: 1, color: '#fff', fontSize: 16 },
});

export default HomeScreen;
