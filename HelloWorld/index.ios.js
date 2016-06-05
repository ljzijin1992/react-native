/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var eventEmitter = require('./personal/js/emitter');
var Router = require('./personal/router');
var ActivityIndicatorIOS = require('./personal/tabbar/ActivityIndicatorIOS');
var DatePickerIOS = require('./personal/tabbar/DatePickerIOS');
var {
    AppRegistry,
    View,
} = React;


var PropertyApp = React.createClass({
    eventEmitter:eventEmitter,
    render(){
        return(
            <View>
                <Router events = {this.eventEmitter}/>
                {/* <ActivityIndicatorIOS />*/}
                <DatePickerIOS/>
            </View>
            )
    }
});

AppRegistry.registerComponent('PropertyApp', () => PropertyApp);
