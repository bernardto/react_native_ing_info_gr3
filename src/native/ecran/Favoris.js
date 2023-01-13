import React, {useEffect} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import MovieCard1 from "../component/MoviesCard";
import {MyTheme} from "../constantes/theme";
import {useDispatch, useSelector} from 'react-redux';
import {favoritesAdd, favoritesRemove} from "../../actions/movies";
import NoData from "../component/NoData";


function Favoris({navigation, route}) {
    const dispatch = useDispatch();
    const store = useSelector((store) => store.sections);


    useEffect(() => {
        //  console.log(store);
        navigation.setOptions({
            headerLargeTitle: false,
            headerTitle: "Favoris",
        });
    }, []);


    return (
        <View style={{flex: 1, width: "100%"}}>

            { store.sections && store.sections.length > 0 ? <>
                <Text style={styles.textTotal}>{store.sections?.length > 1 ? store.sections.length+" Films trouvés": store.sections.length+" Film trouvé" } </Text>

                <FlatList
                   style={{backgroundColor: "#fff"}}
                   data={store.sections}
                   renderItem={({item}) =>
                       <MovieCard1
                           onClickDetails={() => {
                               navigation.navigate('Details', {data: item});
                           }}
                           data={item} onClick={(e) => {
                           if (!e)
                               dispatch(favoritesAdd(item));
                           else
                               dispatch(favoritesRemove(item));

                       }}/>
                   }
                   keyExtractor={(item) => item.id}
               />
           </> : <NoData message={"Vous n'avez aucun favoris!"} src={"no_data_2.png"}/>}

        </View>
    );
}

export default Favoris;

const styles = StyleSheet.create({
    textTotal: {
        color: MyTheme.colors.secondary,
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 10,
        fontWeight: 'bold',
        marginTop: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textName: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: "600",
    },
    textEmail: {
        fontSize: 14,
        marginLeft: 10,
        color: "grey",
    },
});