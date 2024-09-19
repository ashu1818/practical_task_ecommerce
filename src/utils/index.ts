import NetInfo from '@react-native-community/netinfo';

export const isInternetConnected = async () => {
  const result = await NetInfo.fetch();
  return result?.isConnected || false;
};
