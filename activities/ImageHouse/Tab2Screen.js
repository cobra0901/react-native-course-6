import React, {Component} from 'react';

import {StyleSheet, View, Text, TouchableOpacity, LayoutAnimation, UIManager, Platform} from 'react-native';

export default class Tab2Screen extends Component<{}> {
    constructor() {
        super();

        if (Platform.OS === 'android') {

            UIManager.setLayoutAnimationEnabledExperimental(true);

        }

        this.state = {

            textLayoutHeight: 0,
            updatedHeight: 0,
            expand: false,
            buttonText: 'Click Here To Expand'

        }

    }

    expand_collapse_Function = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        if (this.state.expand == false) {
            this.setState({
                updatedHeight: this.state.textLayoutHeight,
                expand: true,
                buttonText: 'Click Here To Collapse'
            });
        }
        else {
            this.setState({
                updatedHeight: 0,
                expand: false,
                buttonText: 'Click Here To Expand'
            });
        }
    }

    getHeight(height) {
        this.setState({textLayoutHeight: height});
    }

    render() {
        return (
            <View style={styles.MainContainer}>

                <View style={styles.ChildView}>

                    <TouchableOpacity activeOpacity={0.7}
                                      onPress={this.expand_collapse_Function}
                                      style={styles.TouchableOpacityStyle}>


                        <Text style={styles.TouchableOpacityTitleText}>{this.state.buttonText}</Text>


                    </TouchableOpacity>


                    <View style={{height: this.state.updatedHeight, overflow: 'hidden'}}>


                        <Text style={styles.ExpandViewInsideText}
                              onLayout={(value) => this.getHeight(value.nativeEvent.layout.height)}>

                            Hello Developers, A warm welcome on ReactNativeCode.com, The best website for react native
                            developers.
                            You can find high quality dynamic type of tutorials with examples on my website and to
                            support us please like our Facebook page.

                        </Text>


                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        MainContainer:
            {
                flex: 1,
                justifyContent: 'center',
                paddingTop: (Platform.OS === 'ios') ? 20 : 0
            },

        ChildView:
            {
                borderWidth: 1,
                borderColor: '#00BCD4',
                margin: 5
            },

        TouchableOpacityStyle:
            {
                padding: 10,
                backgroundColor: '#00BCD4'
            },

        TouchableOpacityTitleText:
            {
                textAlign: 'center',
                color: '#fff',
                fontSize: 20
            },

        ExpandViewInsideText:
            {
                fontSize: 16,
                color: '#000',
                padding: 12
            }
    });