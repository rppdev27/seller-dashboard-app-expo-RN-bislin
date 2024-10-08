import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, ScrollView, StyleSheet, Platform, StatusBar, Animated } from "react-native";
import { Link, Edit, Package, Palette, HelpCircle, Layout, Megaphone, Bell } from 'lucide-react-native';
import { useFonts } from 'expo-font';
import {
    PlusJakartaSans_200ExtraLight,
    PlusJakartaSans_300Light,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  } from '@expo-google-fonts/plus-jakarta-sans'

const HomeScreen = ({ navigation }) => {
    const [scrollY] = useState(new Animated.Value(0));
    
    let [fontsLoaded] = useFonts({
        PlusJakartaSans_200ExtraLight,
        PlusJakartaSans_300Light,
        PlusJakartaSans_400Regular,
        PlusJakartaSans_500Medium,
        PlusJakartaSans_600SemiBold,
        PlusJakartaSans_700Bold,
        PlusJakartaSans_800ExtraBold,
    });

    const storeName = "Menica Store";
    const storeLink = "https://mystore.com/awesomestore";

    const summaryData = [
        { title: "Total Orders", value: "156" },
        { title: "Income", value: "$3,450" },
        { title: "Pending Orders", value: "23" },
        { title: "Completed Orders", value: "133" },
    ];

    const menuItems = [
        { title: "Ekspedisi", icon: Package, color: "#FFD1DC" },
        { title: "Tampilan", icon: Palette, color: "#BDFCC9" },
        { title: "FAQ", icon: HelpCircle, color: "#CCE5FF" },
        { title: "Landingpage", icon: Layout, color: "#FFFFD1" },
        { title: "Marketing", icon: Megaphone, color: "#E6E6FA" },
    ];

    const headerHeight = 60;
    const scrollDistance = 10;

    const headerOpacity = scrollY.interpolate({
        inputRange: [0, scrollDistance],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[
                styles.header,
                {
                    shadowOpacity: headerOpacity,
                    elevation: headerOpacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 5],
                    }),
                }
            ]}>
                <Text style={styles.headerText}>Hi, {storeName}</Text>
                <TouchableOpacity style={styles.notificationIcon}>
                    <Bell size={24} color="#333" />
                </TouchableOpacity>
            </Animated.View>
            <ScrollView 
                contentContainerStyle={styles.scrollContent}
                style={styles.scrollView}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            >
                {/* Section 1: Store Link */}
                <View style={styles.section}>
                    <View style={styles.storeHeader}>
                        <Text style={styles.storeName}>{storeName}</Text>
                        <TouchableOpacity style={styles.editButton}>
                            <Edit size={10} color="#007AFF" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.linkContainer}>
                        <Link size={20} color="#007AFF" />
                        <Text style={styles.linkText}>{storeLink}</Text>
                        <TouchableOpacity style={styles.copyButton}>
                            <Text style={styles.copyButtonText}>Copy</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Section 2: Summary */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Summary</Text>
                    <View style={styles.summaryGrid}>
                        {summaryData.map((item, index) => (
                            <View key={index} style={styles.summaryItem}>
                                <Text style={styles.summaryValue}>{item.value}</Text>
                                <Text style={styles.summaryTitle}>{item.title}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Section 3: Menu */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Menu</Text>
                    <View style={styles.menuGrid}>
                        {menuItems.map((item, index) => (
                            <TouchableOpacity 
                                key={index} 
                                style={[styles.menuItem, { backgroundColor: item.color }]}
                                onPress={() => navigation.navigate(item.title)}
                            >
                                <item.icon size={24} color="#333" />
                                <Text style={styles.menuItemText}>{item.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
        paddingBottom: 10,
        height: Platform.OS === 'android' ? 50 + StatusBar.currentHeight : 70, // Slightly reduced height
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    headerText: {
        fontSize: 14,
        // fontWeight: 'bold',
        fontFamily: 'PlusJakartaSans_700Bold',
    },
    notificationIcon: {
        padding: 8,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        padding: 16,
        paddingTop: 8, // Reduced top padding
    },
    section: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    firstSection: {
        marginTop: 8, // Added small top margin for the first section
    },
    storeHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    storeName: {
        fontSize: 14,
        // fontWeight: 'bold',
        fontFamily: 'PlusJakartaSans_700Bold',
    },
    editButton: {
        padding: 4,
    },
    linkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    linkText: {
        marginLeft: 8,
        flex: 1,
    },
    copyButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4,
    },
    copyButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    summaryGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    summaryItem: {
        width: '48%',
        backgroundColor: '#f0f0f0',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
    },
    summaryValue: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    summaryTitle: {
        fontSize: 12,
        color: '#666',
    },
    menuGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    menuItem: {
        width: '48%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 16,
    },
    menuItemText: {
        marginTop: 8,
        color: '#333333',
        fontSize: 10,
        fontFamily: 'PlusJakartaSans_600SemiBold'
    },
});

export default HomeScreen;