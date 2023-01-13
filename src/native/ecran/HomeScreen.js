import React, {useEffect, useState} from "react";
import {Alert, FlatList, StyleSheet, Text, View} from "react-native";
import MovieCard1 from "../component/MoviesCard";
import privateConfig from "../../config/config-private";
import {MyTheme} from "../constantes/theme";
import {useDispatch, useSelector} from 'react-redux';
import {favoritesAdd, favoritesRemove} from "../../actions/movies";
import Nodata from "../component/NoData";
import Pagination from "../component/pagination";
import {Divider} from "@rneui/base";

const {apiKey} = privateConfig;

function HomeScreen({navigation, r}) {
    /*
    const store = useSelector((store) => store.movies); est une instruction utilisée pour accéder à une partie spécifique de l'état global de l'application dans un composant React.
     */
    const store = useSelector((store) => store.movies);
    const [data, setData] = useState([]); //c'est ici que sont stockés les films trouvés dans la recherche
    const [search, setSearch] = useState("");//text de recherché
    const [total, setTotal] = useState(0);//total des résultats
    const [totalPage, setTotalPage] = useState(0);//nb_page
    /*
     const dispatch = useDispatch();
      est une instruction utilisée pour accéder à la fonction dispatch de Redux dans un composant React.
      La fonction dispatch est utilisée pour envoyer des actions à l'application,
       ce qui peut entraîner une mise à jour de l'état global de l'application.
      */
    const dispatch = useDispatch();

    //Alert pas de connexion internet
    const createThreeButtonAlert = () =>
        Alert.alert('', 'Echec de connexion\n Aucun film trouvé', [
            {text: 'OK'},
        ]);

    //A la création de la vue
    useEffect(() => {
        //  console.log(store);

        navigation.setOptions({
            headerLargeTitle: false,
            headerTitle: "Accueil",
            headerSearchBarOptions: {
                placeholder: "Rechercher un film",
                onChangeText: (event) => {

                    setSearch(event.nativeEvent.text);
                    if (event.nativeEvent.text?.length >= 3)
                        fetchData(event.nativeEvent.text, 1);
                    else
                        setData([]);
                },
            },
        });
    }, [navigation]);

    //Récupération des données
    const fetchData = async (text, page) => {
        const url = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&query=" + encodeURIComponent(text) + "&language=fr&page=" + page
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
            setTotal(json.total_results);
            setTotalPage(json.total_pages);

        } catch (error) {
            setData([])
            setTotal(0);
            setTotalPage(0);

            createThreeButtonAlert();
        }
    };


    return (

        <View style={{flex: 10, backgroundColor: "#fff",}}>
            {
                //le text de recherche n'est pas vide
                search && search.length > 0 ? <>
                    {
                        //Le nombre de film trouvé n'est pas vide
                        data && data.length > 0 ?
                            <>
                                <View style={{flex: 2, margin: 10}}>

                                    <Text
                                        style={styles.textTotal}>{total > 1 ? total + " Films trouvés" : total + " Film trouvé"} </Text>
                                    <Divider/>
                                    <Pagination total={totalPage} onChange={(e) => {
                                        fetchData(search, e);
                                    }}/>
                                </View>
                                <View
                                    style={{flex: 8}}
                                >
                                    <FlatList
                                        data={data}
                                        renderItem={({item}) =>
                                            // CARD de chaque film
                                            <MovieCard1
                                                onClickDetails={() => {
                                                    navigation.navigate('Details', {data: item});
                                                }}
                                                data={item} onClick={(e) => {
                                                //AJOUTE OU SUPPRIME LE FILM DES FAVORIS
                                                if (!e)
                                                    dispatch(favoritesAdd(item));
                                                else
                                                    dispatch(favoritesRemove(item));

                                            }}/>
                                        }
                                        keyExtractor={(item) => item.id}
                                    />
                                </View>

                            </> : <Nodata message={"Aucun résultat trouvé"} src={"no_data_2.png"}/>

                    }
                </> : <Nodata message={"Vous pouvez rechercher un film dans la barre de recherche"}/>
            }


        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    textTotal: {
        color: MyTheme.colors.primary,
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 10,

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