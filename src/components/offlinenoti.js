import React, { PureComponent } from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import { loadingToogle } from './src/actions/auth';
const { width } = Dimensions.get('window');

function MiniOfflineSign() {
    return (
        <View style={styles.offlineContainer}>
            <Text style={styles.offlineText}>Offline</Text>
        </View>
    );
}

class OfflineNotice extends PureComponent {

    state = {
        isConnected: true
    };

    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    }

    handleConnectivityChange = isConnected => {
        const{dispatch} = this.props;
        if  (isConnected) {
            this.setState({ isConnected});
        } else {
            dispatch(loadingToogle());
            this.setState({ isConnected});
        }
    };

    render() {
        if (!this.state.isConnected) {
            return <MiniOfflineSign />;
        }
        return null;
    }
}

const styles = StyleSheet.create({
    offlineContainer: {
        backgroundColor: '#b52424',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width
    },
    offlineText: { color: '#fff' }
});



