import React,{Component} from 'react'
import {connect} from 'react-redux'
import Drawer from 'react-native-drawer'
import ArticlePage from './ArticlePage'
import ControlPanel from '@app/containers/ControlPanel'

class MainDrawer extends Component {

    render() {
        return (
            <Drawer
                side= 'right'
                ref = {(c)=> this.drawer = c}
                openDrawerOffset = {0.6}
                panOpenMask={0.16}
                content = {<ControlPanel
                    onCloseDrawer={this.onCloseDrawer.bind(this)}
                    navigation = {this.props.navigation}
                />}>
                <ArticlePage/>
            </Drawer>
        )
    }

    onPenDrawer() {
        this.drawer.open()
    }

    onCloseDrawer() {
        this.drawer.close()
    }

}

export default connect()(MainDrawer)
