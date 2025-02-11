import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotOptimized from "../screens/NotOptimized";
import Optimized from "../screens/Optimized";
import UseRef from "../screens/UseRef";
import UseMemo from "../screens/UseMemo";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home"component={DrawerNav}/>
    </Stack.Navigator>
  );
};

function DrawerNav() {
    return (
      <Drawer.Navigator >
        <Drawer.Screen name="Memo and useCallback" component={Optimized} />
        <Drawer.Screen name="Not Optimized" component={NotOptimized} />
        <Drawer.Screen name="UseRef" component={UseRef} />
        <Drawer.Screen name="UseMemo" component={UseMemo} />
      </Drawer.Navigator>
    );
  }

  const AppNavigation = () =>{
    return(

    <RootStack/>
);
  }

  export default AppNavigation;