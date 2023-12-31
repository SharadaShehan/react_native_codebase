import { View, Text, StyleSheet, SectionList, Pressable } from 'react-native';
import React, { useState } from 'react';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const Separator = () => {return <View style={menuStyles.separator}></View>}
const Header = () => {return <View><Text style={menuStyles.headerText}>View Menu</Text></View>}

const Footer = () => {
    return (
        <View>
            <Text style={menuStyles.footerText}>All rights reserved by Little Lemon, 2022</Text>
        </View>
    )
};

const Item = ({ name, price }) => {
    return (
        <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.itemText}>{name}</Text>
        <Text style={menuStyles.itemText}>{price}</Text>
        </View>
    )
};

export default function MenuItems () {
    const [showMenu, setShowMenu] = useState(false);
    const renderItem = ({ item }) => <Item name={item.name} price={item.price}/>; 
    const renderSectionHeader = ({ section: { title } }) => (
      <View style={menuStyles.headerStyle}>
        <Text style={menuStyles.sectionHeader}>{title}</Text>
      </View>
    );
    return (
      <View style={menuStyles.container}>
        {!showMenu && (
        <Text style={menuStyles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. View our
          menu to explore our cuisine with daily specials!
        </Text>
        )}
        <Pressable
          style={menuStyles.button}
          onPress={() => { setShowMenu(!showMenu); }}>
          <Text style={menuStyles.buttonText}>
            {showMenu ? 'Home' : 'View Menu'}
          </Text>
        </Pressable>
        { showMenu && (
          <SectionList
            sections={menuItemsToDisplay}
            renderItem={renderItem}
            keyExtractor={(item, index) => item + index}
            renderSectionHeader={renderSectionHeader}
            ItemSeparatorComponent={Separator}
            ListFooterComponent={Footer}>
          </SectionList>
        )}
      </View>
    );
};

const menuStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    innerContainer: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    itemText: {
      color: '#F4CE14',
      fontSize: 30,
    },
    headerText: {
        color: 'white',
        fontSize: 40,
        flexWrap: 'wrap',
        textAlign: 'center',
      },
    separator: {
        borderColor: '#F4CE14',
        borderBottomWidth: 1,
        marginHorizontal: 20,
    },
    footerText: {
        color: 'white',
        fontSize: 15,
        flexWrap: 'wrap',
        textAlign: 'center',
        marginBottom: 5
    },
    headerStyle: {
      backgroundColor: '#F4CE14',
    },
    sectionHeader: {
      color: 'black',
      fontSize: 26,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
    button: {
      fontSize: 22,
      padding: 10,
      marginVertical: 8,
      margin: 40,
      backgroundColor: '#EDEFEE',
      borderColor: '#EDEFEE',
      borderWidth: 2,
      borderRadius: 12
    },
    buttonText: {
      color: '#333333',
      textAlign: 'center',
      fontSize: 32,
    },
    infoSection: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
      textAlign: 'center',
      backgroundColor: '#495E57',
    },
  });
