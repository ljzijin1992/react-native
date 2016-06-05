/**
 * Created by lvjie on 16/5/22.
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} = React;


var customNavBar = React.createClass({
    render(){
        return(
            <View style={[styles.flex_1,styles.wrapView,styles.navBar]}>
                <View style={[styles.flex_1,styles.leftNavBar]}>
                    <TouchableHighlight>
                        <Text style={styles.leftTextColor}>返回</Text>
                    </TouchableHighlight>
                </View>
                <View style={[styles.flex(2),styles.navBar_center]}>
                    <TouchableHighlight>
                        <Text style={styles.centerTextColor}>我的好友</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text style={styles.centerTextColor}>我的群聊</Text>
                    </TouchableHighlight>
                </View>
                <View style={[styles.flex_1,styles.rightNavBar]}>
                    <TouchableHighlight>
                        <Text style={styles.rightTextColor}>编辑</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
});
var styles = StyleSheet.create({
    flex_1:{
        flex:1,
        flexDirection:'row',
    },
    navBar_center:{
        height:28,
        backgroundColor:'red',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
    },
    centerTextColor:{
        color:'#FFFFFF',
        fontSize:17,
        justifyContent:'center',

    },
    rightNavBar:{
        paddingRight: 12,
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
    },
    rightTextColor:{
        color:'#FFFFFF',
        fontSize:17,
    },
    leftTextColor:{
        paddingLeft: 12,
        color:'#FFFFFF',
        fontSize:17,
    },
    leftNavBar:{
        paddingLeft: 12,
        backgroundColor: 'transparent',
        justifyContent:'flex-start',

    },
    wrapView:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        height:68,
        backgroundColor:'#E62116'
    },
    navBar:{
        // flexDirection:'row',
        // justifyContent:'flex-end',
        alignItems:'flex-end',
    }
});
styles.flex = function(size){
    return{
        flex:size,
    }
}


module.exports = customNavBar;
