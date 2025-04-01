import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Switch, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      {/* Ảnh đại diện */}
      <View style={styles.profileContainer}>
        <Image source={{ uri: 'https://th.bing.com/th/id/OIP.pAyRN_lNf6IPukCMXYcRcQHaHa?rs=1&pid=ImgDetMain' }} style={styles.profileImage} />
        <TouchableOpacity style={styles.editIcon}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.hnuzZBNljR0tSZRr_QAcMwHaHa?rs=1&pid=ImgDetMain' }} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Thông tin cá nhân */}
      <Text style={styles.profileName}>Rakibul Hasan</Text>
      <Text style={styles.profileEmail}>rakibhbrand@gmail.com</Text>

      {/* Danh sách menu */}
      <View style={styles.menuContainer}>
        {["Home", "My Card", "Track Your Order", "Settings", "Help Center"].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.menuText}>{item}</Text>
          </TouchableOpacity>
        ))}
        
        {/* Dark Mode */}
        <View style={styles.darkModeContainer}>
          <Text style={styles.menuText}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} />
        </View>
      </View>

      {/* Nút đăng xuất */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  profileContainer: { position: 'relative', marginBottom: 16 },
  profileImage: { width: 100, height: 100, borderRadius: 50 },
  editIcon: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#ddd', borderRadius: 12, padding: 6 },
  icon: { width: 16, height: 16 },
  profileName: { fontSize: 20, fontWeight: 'bold' },
  profileEmail: { fontSize: 16, color: '#777', marginBottom: 20 },
  menuContainer: { width: '100%', paddingHorizontal: 20 },
  menuItem: { paddingVertical: 12 },
  menuText: { fontSize: 16, color: '#333' },
  darkModeContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 },
  logoutButton: { marginTop: 20, backgroundColor: 'red', padding: 12, borderRadius: 8 },
  logoutText: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
});

export default ProfileScreen;
