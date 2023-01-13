import React, {useEffect, useState} from "react";
import {SelectList} from 'react-native-dropdown-select-list'
import {View, Text} from "react-native";
import {MyTheme} from "../constantes/theme";
import RNPickerSelect from "react-native-picker-select";

const Pagination = ({total, onChange}) => {

   const [data, setData] =useState([]);
    useEffect(()=>{
        let dat = [];

        for (let i = 0; i < total; i++) {
            dat.push({
                label : i+1+"",
                value : i+1+""
            });
        }
        setData(dat);

    },[total]);


    return (
        <View style={{flex: 1, flexDirection: "row", marginTop: 10}}>
            <View style={styles.itemStyle}>
                <Text style={styles.titleStyle}>Choisir une page :</Text>
            </View>

            <View style={styles.itemStyle}>
                <RNPickerSelect

                    itemKey="value"
                    placeholder={"Page"}
                    onValueChange={onChange}
                    items={data}
                />
            </View>
        </View>
    )

};
const styles = {

    itemStyle: {
        flex: 1
    },
    titleStyle: {
        fontSize: 18,
        color: MyTheme.colors.primary,

    },

};
export default Pagination;