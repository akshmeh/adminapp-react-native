import { StyleSheet, SafeAreaView,FlatList} from 'react-native'
import React,{useState, useEffect,useCallback} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SingleUser from '../components/SingleUser'
import * as SplashScreen from 'expo-splash-screen';


const ShowUser = () => {

    const [data, setData] = useState([])

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        //render item
        AsyncStorage.getItem('@User_Data').then(item =>{
          if(item!== null){
            setData(JSON.parse(item))
          }
        }).catch((e)=>console.log(e))
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
  
  const renderItem = (ele) => (
    <SingleUser name={ele.item.name} email={ele.item.email} phone={ele.item.phone} data={data} setData={setData}/>
  );
  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.phone}
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
  },
})