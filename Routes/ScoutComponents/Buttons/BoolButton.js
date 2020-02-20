import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native';

export default class BoolButton extends React.Component {
    /** Update */
    componentDidMount() {
        /** Set default */
        global.data[this.props.id] = false;

        this.interval = setInterval(() => {this.setState({ time: Date.now() });}, 20);
    }
    componentWillUnmount() {clearInterval(this.interval)}

    render() {
        const p = this.props;
        const styles = StyleSheet.create({
            button: {
                textAlign: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: '#000000',
                width: (p.width? p.width : 100),
                height: (p.height? p.height : 40)
            }
        });


        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress = {() => global.data[this.props.id] = !global.data[this.props.id]}>
                    <View style = {{
                        textAlign: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        borderWidth: StyleSheet.hairlineWidth,
                        borderColor: '#000000',
                        width: (p.width? p.width : 100),
                        height: (p.height? p.height : 40),
                        backgroundColor: (global.data[this.props.id]? p.bgc : 'white')
                    }}>
                        <Text>{this.props.children}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}