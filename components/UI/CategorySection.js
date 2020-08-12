import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ProductItem from '../Product/ProductItem';
import TextGeo from './TextGeo';
import Colors from '../../constants/Colors';
//PropTypes check
import PropTypes from 'prop-types';

const CategorySection = ({ name, bg, data, navigation }) => {
  return (
    <View style={[styles.category]}>
      <Image style={styles.background} source={bg} />
      <View style={styles.titleHeader}>
        <TextGeo style={styles.title}>{name}</TextGeo>
      </View>
      <View style={styles.productList}>
        {data.map((item, index) => {
          return (
            <ProductItem
              key={`${item._id}${index}`}
              item={item}
              navigation={navigation}
            />
          );
        })}
        <TouchableOpacity
          onPress={() => navigation.navigate('Product')}
          style={styles.seeMore}
        >
          <TextGeo style={styles.seeMoreText}>Xem Thêm</TextGeo>
        </TouchableOpacity>
      </View>
    </View>
  );
};

CategorySection.propTypes = {
  name: PropTypes.string.isRequired,
  bg: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  category: {
    height: 518,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    resizeMode: 'stretch',
    borderRadius: 5,
    height: 518,
    width: '100%',
    bottom: 0,
  },
  titleHeader: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    color: Colors.light_green,
  },
  productList: {
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  seeMore: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '100%',
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeMoreText: {
    fontSize: 14,
    color: Colors.lighter_green,
  },
});

export default CategorySection;