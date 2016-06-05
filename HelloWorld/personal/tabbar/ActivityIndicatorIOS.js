/**
 * ActivityIndicatorIOs
 */

'use strict';
var React = require('react-native');
var {
    View,
    StyleSheet,
    ActivityIndicatorIOS
} = React;
var TimerMixin = require('react-timer-mixin');

var ToggleActivityIndicatorIOS = React.createClass({
    mixins :[TimerMixin],

    getInitialState(){
        return{
            animating:true,
        }
    },
    setToggleTimeout(){
        this.setTimeout(()=>{
            this.setState({
                animating: !this.state.animating
            });
            this.setToggleTimeout();
        },1200)
    },

    componentDidMount(){
        this.setToggleTimeout();
    },

    render(){
        return(
            <ActivityIndicatorIOS
                animating ={this.state.animating} //bool,是否要显示指示器
                style = {[styles.centering,{height:80}]}
                size = 'large' //enum('small','large')指示器的大小,small的高度是20,large的高度是36
            />

        )
    }
});


var styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

module.exports = ToggleActivityIndicatorIOS;