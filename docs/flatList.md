## FlatList

高性能的简单列表组件，支持下面这些常用的功能：

	完全跨平台。
	支持水平布局模式。
	行组件显示或隐藏时可配置回调事件。
	支持单独的头部组件。
	支持单独的尾部组件。
	支持自定义行间分隔线。
	支持下拉刷新。
	支持上拉加载。
	支持跳转到指定行（ScrollToIndex）。

#### 使用说明

一个最简单的例子：

```bash

	<FlatList
	  	data={[{key: 'a'}, {key: 'b'}]}
	  	renderItem={({item}) => <Text>{item.key}</Text>}
	/>

```


###### 属性

ItemSeparatorComponent?: ?ReactClass<any> 
行与行之间的分隔线组件。不会出现在第一行之前和最后一行之后。

ListFooterComponent?: ?ReactClass<any> 
尾部组件

ListHeaderComponent?: ?ReactClass<any> 
头部组件

columnWrapperStyle?: StyleObj 
如果设置了多列布局（即将numColumns值设为大于1的整数），则可以额外指定此样式作用在每行容器上。

data: ?Array<ItemT> 
为了简化起见，data属性目前只支持普通数组。如果需要使用其他特殊数据结构，例如immutable数组，请直接使用更底层的VirtualizedList组件。

extraData?: any 
如果有除data以外的数据用在列表中（不论是用在renderItem还是Header或者Footer中），请在此属性中指定。同时此数据在修改时也需要先修改其引用地址（比如先复制到一个新的Object或者数组中），然后再修改其值，否则界面很可能不会刷新。

getItem?: 
getItemCount?: 
getItemLayout?: (data: ?Array<ItemT>, index: number) =>
  {length: number, offset: number, index: number} 
getItemLayout是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度。如果你的行高是固定的，getItemLayout用起来就既高效又简单，类似下面这样：

getItemLayout={(data, index) => ( {length: 行高, offset: 行高 * index, index} )}
注意如果你指定了SeparatorComponent，请把分隔线的尺寸也考虑到offset的计算之中。

horizontal?: ?boolean 
设置为true则变为水平布局模式。

initialNumToRender: number 
指定一开始渲染的元素数量，最好刚刚够填满一个屏幕，这样保证了用最短的时间给用户呈现可见的内容。注意这第一批次渲染的元素不会在滑动过程中被卸载，这样是为了保证用户执行返回顶部的操作时，不需要重新渲染首批元素。

keyExtractor: (item: ItemT, index: number) => string 
此函数用于为给定的item生成一个不重复的key。Key的作用是使React能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销。若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标。

legacyImplementation?:  ?boolean 

设置为true则使用旧的ListView的实现。

numColumns: number 
多列布局只能在非水平模式下使用，即必须是horizontal={false}。此时组件内元素会从左到右从上到下按Z字形排列，类似启用了flexWrap的布局。组件内元素必须是等高的——暂时还无法支持瀑布流布局。

onEndReached?: ?(info: {distanceFromEnd: number}) => void 
当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用。

onEndReachedThreshold?: ?number 
决定当距离内容最底部还有多远时触发onEndReached回调。注意此参数是一个比值而非像素单位。比如，0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。

onRefresh?: ?() => void 
如果设置了此选项，则会在列表头部添加一个标准的RefreshControl控件，以便实现“下拉刷新”的功能。同时你需要正确设置refreshing属性。

onViewableItemsChanged?:  ?(info: {viewableItems: Array<ViewToken>, changed: Array<ViewToken>}) => void 
在可见行元素变化时调用。可见范围和变化频率等参数的配置请设置viewabilityconfig属性

refreshing?: ?boolean 
在等待加载新数据时将此属性设为true，列表就会显示出一个正在加载的符号。

renderItem: (info: {item: ItemT, index: number}) => ?React.Element<any> 
根据行数据data渲染每一行的组件。典型用法：

_renderItem = ({item}) => ( <TouchableOpacity onPress={() => this._onPress(item)}> <Text>{item.title}}</Text> </TouchableOpacity> ); ... <FlatList data={[{title: 'Title Text', key: 'item1'}]} renderItem={this._renderItem} />
除data外还有第二个参数index可供使用。

viewabilityConfig?: ViewabilityConfig 
请参考ViewabilityHelper的源码来了解具体的配置。


###### 方法

scrollToEnd(params?: object) 
滚动到底部。如果不设置getItemLayout属性的话，可能会比较卡。

scrollToIndex(params: object) 
Scrolls to the item at a the specified index such that it is positioned in the viewable area such that viewPosition 0 places it at the top, 1 at the bottom, and 0.5 centered in the middle.

如果不设置getItemLayout属性的话，可能会比较卡。

scrollToItem(params: object) 
Requires linear scan through data - use scrollToIndex instead if possible. 如果不设置getItemLayout属性的话，可能会比较卡。

scrollToOffset(params: object) 
Scroll to a specific content pixel offset, like a normal ScrollView.

recordInteraction() 
Tells the list an interaction has occured, which should trigger viewability calculations, e.g. if waitForInteractions is true and the user has not scrolled. This is typically called by taps on items or by navigation actions.



