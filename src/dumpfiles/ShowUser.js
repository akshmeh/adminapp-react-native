import { StyleSheet, Text, View , SafeAreaView,FlatList} from 'react-native'
import React,{useState, useEffect,useCallback} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SplashScreen from 'expo-splash-screen';
import SingleUser from '../components/SingleUser'

const ShowUser = () => {
    const [data, setData] = useState([])
  const getData =  () =>{
     AsyncStorage.getItem('@Storage_Key').then(item =>{
      if(item!== null){
        setData(JSON.parse(item))
      }
    }).catch((e)=>console.log(e))
  }
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise(resolve => getData);
        await getData();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  const renderItem = ({ item }) => (
    <SingleUser name={item.name} email={item.email} phone={item.phone}/>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={onLayoutRootView}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  )
}

export default ShowUser

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84d9ff',
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%"
  },
})

