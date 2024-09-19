import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {debounce} from 'lodash';
import {ParamData} from '../../services/product';
import {getProductAction} from '../../redux/action/getProductAction';
import {RootState} from '../../redux/reducer/rootReducer';
import {styles} from './HomeScreenStyle';
import {APP_COLORS} from '../../theme/color';
import Images from '../../assets/images/map';
import {useNavigation} from '@react-navigation/native';

let isPagination = false;

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  const [searchTitle, setSearchTitle] = useState('');
  const [offSet, setOffSet] = useState(0);
  const limit = 10;
  const productResponse = useSelector((state: RootState) => state.products);
  const isLoading = productResponse?.isLoading;
  const [currentPage, setCurrentPage] = useState(1);
  const [arrayProducts, setArrayProducts] = useState([] as any);

  const fetchResults = useCallback(
    debounce(async (paramData: ParamData) => {
      try {
        console.log('In try', paramData);

        dispatch(getProductAction(paramData));
      } catch (error) {
        console.log(error);
      }
    }, 300),
    [searchTitle, offSet],
  );

  useEffect(() => {
    const paramData: ParamData = {
      title: searchTitle,
      offset: offSet,
      limit: limit,
    };
    console.log('paramData', paramData);

    isPagination = false;
    fetchResults(paramData);
  }, [searchTitle]);

  useEffect(() => {
    if (
      productResponse?.productData &&
      productResponse?.productData?.length > 0
    ) {
      console.log(
        '(productResponse?.productData',
        productResponse?.productData,
      );

      if (currentPage > 1) {
        setArrayProducts([...arrayProducts, ...productResponse?.productData]);
      } else {
        setArrayProducts(productResponse?.productData);
      }
    } else {
      setArrayProducts([]);
    }
  }, [productResponse?.productData]);

  const callPaginationAPI = () => {
    if (isPagination) {
      if (arrayProducts && arrayProducts?.length > 0) {
        const paramData: ParamData = {
          title: searchTitle,
          offset: currentPage + 1,
          limit: limit,
        };
        isPagination = false;
        setCurrentPage(currentPage + 1);
        fetchResults(paramData);
      }
    }
  };

  const setValueForPagination = (value: boolean) => {
    isPagination = value;
  };

  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailScreen', {item});
        }}
        style={styles.card}>
        <Image source={{uri: item?.images[0]}} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>Price : ₹{item.price}</Text>
      </TouchableOpacity>
    );
  };

  const listEmptyComponent = isLoading ? null : (
    <View style={styles.emptyView}>
      <Text style={styles.headerTitle}>No Product found</Text>
    </View>
  );

  const listFooterComponent = (
    <View>
      <ActivityIndicator color={APP_COLORS.primary} size={'large'} />
    </View>
  );

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Products </Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search Products"
          value={searchTitle}
          onChangeText={setSearchTitle}
          placeholderTextColor={APP_COLORS.grey}
        />
        <FlatList
          numColumns={2}
          keyExtractor={(item, index) => String(index)}
          data={arrayProducts}
          renderItem={renderItem}
          onEndReached={callPaginationAPI}
          onEndReachedThreshold={0.4}
          ListFooterComponent={isLoading ? listFooterComponent : null}
          ListEmptyComponent={listEmptyComponent}
          onMomentumScrollBegin={() => {
            setValueForPagination(true);
          }}
          scrollEnabled={true}
          style={{
            flex: 1,
          }}
        />
      </View>
    </>
  );
};

export default HomeScreen;
