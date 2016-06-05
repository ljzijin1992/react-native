/**
 * DatePickerIOS.
 * date:Date 当前被选中的日期
 * maximumDate Date //可选的最大日期
 * minimumDate Date //可选的最小日期
 * minuteInterVal enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)//可选的最小的分钟单位
 * model enum('date','time','datetime')
 * onDateChange function
 * 当用户修改日期或时间调用此回调函数,唯一的参数是一个日期对象,表示新的日期和时间
 * timeZoneOffsetInMinutes number 时区差,单位是分钟
 */

'use strict';

var React = require('react-native');
var {
    DatePickerIOS,
    StyleSheet,
    Text,
    TextInput,
    View,
} = React;

var DatePickerExample = React.createClass({
    getDefaultProps(){
        return{
            date:new Date(),
            timeZoneOffsetInHours:(-1)*(new Date()).getTimezoneOffset()/60
        }

    },
    getInitialState(){
        return{
            date:this.props.date,
            timeZoneOffsetInHours:this.props.timeZoneOffsetInHours
        }
    },
    onDateChange(date){
        this.setState({
            date:date
        })
    },
    onTimezoneChange(event){
        var offset= parseInt(event.nativeEvent.text,10);
        if(isNaN(offset)){
            return ;
        }
        this.setState({timeZoneOffsetInHours:offset})
    },
    render(){
        return(
            <View>
               <WithLabel label="Value:">
                   <Text>{this.state.date.toLocaleDateString()+''+this.state.date.toLocaleTimeString()}</Text>
               </WithLabel>
                <WithLabel label="Value:">
                    <TextInput
                        onChange={this.onTimezoneChange}
                        style={styles.textinput}
                        value ={this.state.timeZoneOffsetInHours.toString()}

                    />
                    <Text>hours from UTC</Text>
                </WithLabel>
                <Heading label="Date + time picker" />
                <DatePickerIOS
                    date={this.state.date}
                    mode = "datetime"
                    timeZoneOffsetInMinues = {this.state.timeZoneOffsetInHours*60}
                    onDateChange={this.onDateChange}

                />

            </View>
        )
    }

});

var WithLabel = React.createClass({
    render(){
        return (
            <View style={styles.labelContainer}>
                <View style={styles.labelView}>
                    <Text style={styles.label}>{this.props.label}</Text>
                </View>
                {this.props.children}
            </View>
        )
    }
});
var Heading = React.createClass({
    render() {
        return (
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>
                    {this.props.label}
                </Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    textinput: {
        height: 26,
        width: 50,
        borderWidth: 0.5,
        borderColor: '#0f0f0f',
        padding: 4,
        fontSize: 13,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
    },
    labelView: {
        marginRight: 10,
        paddingVertical: 2,
    },
    label: {
        fontWeight: '500',
    },
    headingContainer: {
        padding: 4,
        backgroundColor: '#f6f7f8',
    },
    heading: {
        fontWeight: '500',
        fontSize: 14,
    },
});
module.exports = DatePickerExample;

