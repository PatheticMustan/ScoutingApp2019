import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Image
} from "react-native";

export default class ClimbHeight extends React.Component {
    constructor(props) {
        super(props);
        /** Set default */
        this.state = {
            val: global.data[props.id]
        }
        global.data[props.id] = this.state.val;

        this.data = [
            ["Low",     require("../../Assets/EndLow.png")],
            ["Leveled", require("../../Assets/EndLevel.png")],
            ["High",    require("../../Assets/EndHigh.png")]
        ];
    }
    componentWillUnmount() {clearInterval(this.interval)}

    render() {
        const p = this.props;

        return (
            <View style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around"
            }}>
                <TouchableWithoutFeedback
                    key={this.data[0][0]}
                    onPress={() => {
                        this.setState(
                            {val: this.state.val==this.data[0][0]? "" : this.data[0][0]},
                            () => global.data[p.id] = this.state.val
                        )
                    }}
                >
                    <View style={[
                        styles.container,
                        {backgroundColor: (this.state.val === this.data[0][0]? p.bgc : "white")}
                    ]}>
                        <Image
                            source={this.data[0][1]}
                            style={styles.image}
                        />
                        <Text style={{textAlign: "center"}}>{this.data[0][0]}</Text>
                    </View>
                </TouchableWithoutFeedback>



                <TouchableWithoutFeedback
                    key={this.data[1][0]}
                    onPress={() => {
                        this.setState(
                            {val: this.state.val==this.data[1][0]? "" : this.data[1][0]},
                            () => global.data[p.id] = this.state.val
                        )
                    }}
                >
                    <View style={[
                        styles.container,
                        {backgroundColor: (this.state.val === this.data[1][0]? p.bgc : "white")}
                    ]}>
                        <Image
                            source={this.data[1][1]}
                            style={styles.image}
                        />
                        <Text style={{textAlign: "center"}}>{this.data[1][0]}</Text>
                    </View>
                </TouchableWithoutFeedback>



                <TouchableWithoutFeedback
                    key={this.data[2][0]}
                    onPress={() => {
                        this.setState(
                            {val: this.state.val==this.data[2][0]? "" : this.data[2][0]},
                            () => global.data[p.id] = this.state.val
                        )
                    }}
                >
                    <View style={[
                        styles.container,
                        {backgroundColor: (this.state.val === this.data[2][0]? p.bgc : "white")}
                    ]}>
                        <Image
                            source={this.data[2][1]}
                            style={styles.image}
                        />
                        <Text style={{textAlign: "center"}}>{this.data[2][0]}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
        margin: 10,
        flexDirection: "column"
    },
    image: {
        width: 300,
        height: 150,
        borderRadius: 10
    }
});