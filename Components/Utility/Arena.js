import React from "react";
import {
    View,
    ImageBackground,
    StyleSheet
} from "react-native";



export default class Arena extends React.Component {
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ time: Date.now() });
        }, 100);
    }
    componentWillUnmount() {clearInterval(this.interval)}

    render() {
        return (
            <View>
                <ImageBackground
                    source={require('../../Assets/2020Field.png')}
                    style={styles.imageBackground}
                    imageStyle={{
                        borderRadius: 10,
                        transform: [{rotate: global.data["Team"]? "180deg" : "0deg"}]
                    }}
                >
                    {this.props.children}
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageBackground: {
        width: 900,
        height: 453,
        marginTop: 20,
        flexDirection: "row"
    }
}); 
