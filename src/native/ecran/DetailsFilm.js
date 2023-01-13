import React, {useEffect} from "react";
import {ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";

function DetailsFilm({navigation, route}) {
    useEffect(() => {
        navigation.setOptions({
            headerLargeTitle: false,
            headerTitle: data.title,
        });
    }, []);

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
