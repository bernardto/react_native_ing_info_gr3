import React from 'react';
import {MyTheme} from "../constantes/theme";
import {Card, Text} from 'react-native-paper';
import {Icon} from '@rneui/themed';
import {Divider} from "@rneui/base";
import {View} from "react-native";
import {useSelector} from "react-redux";

const MovieCard1 = ({data, onClick, onClickDetails}) => {


    const store = useSelector((store) => store.movies);

    /**
     * Permet de vérifier que le film est un favoris
     * @returns {boolean}
     */
    const isFavorie = () => {


        if (store.movies?.find(e => e.id === data.id))
            return true;
        else
            return false;
    }

    return (
        <Card style={styles.cardContainer} onPress={onClickDetails}>
            <Card.Content>
                <Text style={styles.titleStyle}>{data.title}</Text>
                <View style={{flex: 1, flexDirection: "row"}}>
                    <Icon
                        name='calendar'
                        type='ionicon'
                        size={15}
                        style={{marginRight: 5}}
                        color={MyTheme.colors.primary}
                    />
                    <Text>{data.release_date.split("-")[0]}</Text>
                </View>
                <View style={{flex: 1, flexDirection: "row"}}>
                    <Icon
                        name='bookmark'
                        type='ionicon'
                        size={15}
                        style={{marginRight: 5}}
                        color={MyTheme.colors.primary}
                    />
                    <Text>{data.vote_average + "/10"}</Text>
                </View>
                <Divider/>

                <Text
                    style={styles.bodyText}>{data.overview.length > 200 ? data.overview.substring(0, 200) + "..." : data.overview}</Text>
            </Card.Content>
            <Card.Cover source={{uri: "https://image.tmdb.org/t/p/w500/" + data.poster_path}}/>
            <Card.Actions>
                <Icon
                    onPress={() => {
                        onClick(isFavorie());
                    }}
                    name={isFavorie() ? "heart" : "heart-outline"}
                    type='ionicon'
                    size={34}
                    color={MyTheme.colors.primary}
                />
            </Card.Actions>
        </Card>
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
        shadowRadius: 10,
        backgroundColor: "#fff",
        elevation: MyTheme.dimens.elevation_s,
        marginLeft: MyTheme.dimens.marginLeft,
        marginRight: MyTheme.dimens.marginRight,
        marginTop: 10,

    },

    poster: {
        width: "100%",
        height: 100
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

export default MovieCard1;
