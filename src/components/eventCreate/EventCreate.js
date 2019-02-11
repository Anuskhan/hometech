import React, { Component } from "react";
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import EventCreateStyle from './EventCreateStyle';
import { TextField } from 'react-native-material-textfield';


export default class EventCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            startDate: '',
            endDate: '',
            isDatePickerVisible: false,
            location: '',
            description: '',
        }
    }

    onChange(name, val) {
        this.setState({ [name]: val })
    }
    showDateTimePicker = () => this.setState({ isDatePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDatePickerVisible: false });

    handleDatePicker = (startDate) => {
        this.setState({ startDate }, () => this._hideDateTimePicker());
    };
    handleEndDate = (endDate) => {
        this.setState({ endDate }, () => this._hideDateTimePicker());
    };

    render() {
        let { isDatePickerVisible, startDate, endDate} = this.state;
        return (
            <View>
                <Text style={EventCreateStyle.heading}>EventCreate</Text>
                <View style={EventCreateStyle.textFeildView}>
                    <TextField
                        label='Name'
                        value={this.state.name}
                        onChangeText={this.onChange.bind(this, 'name')}
                    />
                    <TextField
                        label='Description'
                        value={this.state.description}
                        onChangeText={this.onChange.bind(this, 'description')}
                    />
                    <TextField
                        label='Location'
                        value={this.state.location}
                        onChangeText={this.onChange.bind(this, 'location')}
                    />

                  
                   
                </View>
                
            </View>

        );

    }

}

