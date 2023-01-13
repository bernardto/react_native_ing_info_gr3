import React from 'react';
import {Card, Text} from 'react-native-paper';
import {MyTheme} from "../constantes/theme";
import {View} from "react-native";

const NoData = ({message, src= "no_data.png"}) => {


    return (
        <View style={{
            justifyContent: 'center', //Centered horizontally
            alignItems: 'center', //Centered vertically
            flex: 1
        }}>
            <Card style={styles.cardContainer}>
                <Card.Content>
                    <Text style={styles.titleStyle}>{message}</Text>

                </Card.Content>
                <Card.Cover source={require('../../../assets/no_data.png')}/>
            </Card>
        </View>
    );
}

const styles = {
    cardContainer: {

        borderWidth: 1,
        borderRadius: MyTheme.dimens.radius,
        borderColor: MyTheme.colors.primary,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9,
        justifyContent: "center",
        shadowRadius: 10,
        backgroundColor: "#fff",
        paddingBottom: 20,
        elevation: MyTheme.dimens.elevation_s,
        marginLeft: MyTheme.dimens.marginLeft,
        marginRight: MyTheme.dimens.marginRight,
        marginTop: 10,

    },

    poster: {
        width: "100%",
        height: 150
    },
    textContainer: {
        padding: 10
    },
    titleStyle: {
        fontSize: 24,
        color: MyTheme.colors.primary,
        paddingBottom: 12
    },
    bodyText: {
        lineHeight: 20,
        fontSize: 14,
        margin: 10,
        textColor: "#b5bde9",
    },

};

export default NoData;
