/*
 react-navigation 该库包含三类组件：
（1）StackNavigator：用来跳转页面和传递参数
（2）TabNavigator：类似底部导航栏，用来在同一屏幕下切换不同界面
（3）DrawerNavigator：侧滑菜单导航栏，用于轻松设置带抽屉导航的屏幕
*/
import {
    StackNavigator,
    TabBarBottom,
    TabNavigator
} from 'react-navigation';

import { tabOptions } from './navigationConfig';
import { configRoute } from './addToRouteStack'
import HomeScreen from '@app/containers/HomePage';
import MineScreen from '@app/containers/MinePage';

const Tab = TabNavigator(
    {
        Home: {
            screen: HomeScreen, 
            navigationOptions: tabOptions({
                title: '首页',
                // normalIcon: Images.tab_home_normal,
                // selectedIcon: Images.tab_home_selected
            })
        },
        Mine: {
            screen: MineScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '我的',
            }),
        },
    }, {
        tabBarOptions: {
            showIcon: true,
            indicatorStyle: { height: 0 },
            activeTintColor: "#0085da",
            style: {
                backgroundColor: "#fff"
            },
            activeTintColor: '#589017',
            tabStyle: {
                margin: 2,
            },
        },
        lazy: true, //懒加载
        swipeEnabled: false,
        animationEnabled: false, //关闭安卓底栏动画
        tabBarPosition: "bottom",
        tabBarComponent: TabBarBottom,
        initialRouteName: 'Home'
    }
)


// 配置路由
const navigation = StackNavigator({
    ...configRoute({
        Tab: { screen: Tab },
        // Mine: { screen: Mine },
    })
}, {
    initialRouteName: 'Tab',
    navigationOptions: {
        header: null
    }
});

export default navigation;
