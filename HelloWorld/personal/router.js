/**
 * 统一页面路由处理
 */

'use strict';
var React = require('react-native');
var {
    Navigator,
    View,
    Text,
    StyleSheet,
}=React;

var NewsFeed = React.createClass({
    goBack(){
        this.props.navigator.push({name:"default"});
    },

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.goBack} >
                    I am Feed View! Tab to default view!
                </Text>
            </View>
        )
    }
});




var Welcome = React.createClass({
    onPressFeed() {
        this.props.navigator.push({name: 'feed'});
    },


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.onPressFeed} >
                    This is welcome view.Tap to go to feed view.
                </Text>
            </View>
        );
    }

});

var DefaultView = React.createClass({

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Default view</Text>
            </View>
        )
    }
});

var Router = React.createClass({
    renderScene(route,navigator){
        var Component = null;
        this._navigator = navigator;
        switch(route){
            // console.log(route,'============');
            case 'welcome':
                Component = Welcome;
                break;
            case 'newsfeed':
                Component = NewsFeed;
                break;
            default:
                Component = DefaultView;

        }
        return(<Component navigator = {navigator}/>)
    },
    render(){
        return(
            <Navigator
                initalRoute = {{name:'welcome'}} // 路由初始化配置信息，就是说页面加载时，第一次需要展现什么内容
                configureScene = {(router)=>{
                    return Navigator.SceneConfigs.FloatFromRight
                }} //场景转换动画配置。在RN看来，从一个页面切换到另外一个页面，就是从一个场景切换到另外一个场景，这里配置的是场景动画信息，
                renderScene={ this.renderScene}//渲染场景，读取initialRouter传来的数据，确定显示那些内容。

            />
        )
    }
});

var styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff',
    },
    welcome:{
        fontSize:30,
        textAlign:'center',
        margin:10,
    },
    instructions:{
        textAlign:'center',
        color:'#333333',
        marginBottom:5,
    }
});



module.exports = Router;
