import React, {useEffect} from "react";
import {ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {Icon} from "@rneui/themed";
import {MyTheme} from "../constantes/theme";
import {Card} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import {favoritesAdd, favoritesRemove} from "../../actions/movies";

function DetailsFilm({navigation, route}) {
    useEffect(() => {
        navigation.setOptions({
            headerLargeTitle: false,
            headerTitle: data.title,
        });
    }, []);
    /*
    const dispatch = useDispatch();
     est une instruction utilisée pour accéder à la fonction dispatch de Redux dans un composant React.
     La fonction dispatch est utilisée pour envoyer des actions à l'application,
      ce qui peut entraîner une mise à jour de l'état global de l'application.
     */
    const dispatch = useDispatch();
    const store = useSelector((store) => store.movies);
    const isFavorie = () => {
        if (store.movies?.find(e => e.id === data.id))
            return true;
        else
            return false;
    }

    const {data} = route.params;
    const image = {uri: "https://image.tmdb.org/t/p/w500/" + data.poster_path};
    return (
        <View style={{flex: 1}}>
            <ImageBackground source={image} resizeMode="cover" style={{flex: 1, justifyContent: "center"}}>
                <ScrollView>
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "15%",
                        backgroundColor: "rgba(0,0,0,0.75)"
                    }}>
                        <Text style={styles.titleStyle}>{data.title}</Text>
                        <Text style={styles.subtitleStyle}>Année : {data.release_date.split("-")[0]}</Text>
                        <Text style={styles.subtitleStyle}>Titre Original : {data.original_title}</Text>
                        <Text style={styles.subtitleStyle}>Note : {data.vote_average + "/10"}</Text>
                        <Icon
                            onPress={() => {
                                //AJOUTE OU SUPPRIME LE FILM DES FAVORIS
                                if (!isFavorie())
                                    dispatch(favoritesAdd(data));
                                else
                                    dispatch(favoritesRemove(data));
                            }}
                            name={isFavorie() ? "heart" : "heart-outline"}
                            type='ionicon'
                            size={34}
                            color={MyTheme.colors.primary}
                        />
                    </View>

                    <View style={styles.body}>
                        <Text style={styles.bodyText}>
                            {data.overview}
                        </Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#CCC",
        flexWrap: "nowrap",
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: -2,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3,
        overflow: "hidden"
    },
    bodyContent: {
        padding: 16,
        paddingTop: 24,
        justifyContent: "center"
    },
    titleStyle: {
        fontSize: 32,
        color: "#fff",
        paddingBottom: 12
    },
    subtitleStyle: {
        fontSize: 14,
        color: "#fff",
        lineHeight: 16,

        opacity: 0.9
    },
    body: {
        padding: 16,
        paddingTop: 8
    },
    bodyText: {
        lineHeight: 20,
        fontSize: 14,
        color: "#fff",
        marginTop: "50%",
        backgroundColor: "rgba(0,0,0,0.75)",
        flexWrap: "wrap"
    }
});

export default DetailsFilm;
