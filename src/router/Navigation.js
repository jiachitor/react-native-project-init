import {
    StackNavigator,
    TabBarBottom,
    TabNavigator
} from 'react-navigation';

import { tabOptions } from './navigationConfig';
import { configRoute } from './addToRouteStack'
import Home from '@app/containers/HomePage';
import Mine from '@app/containers/MinePage';

const Tab = TabNavigator({
    Home: {
        screen: Home, navigationOptions: tabOptions({
            title: '首页',
            // normalIcon: Images.tab_home_normal,
            // selectedIcon: Images.tab_home_selected
        })
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
})


// 配置路由
const navigation = StackNavigator({
    ...configRoute({
        Tab: { screen: Tab },
        Mine: { screen: Mine },
    })
}, {
    initialRouteName: 'Tab',
    navigationOptions: {
        header: null
    }
});

export default navigation;
