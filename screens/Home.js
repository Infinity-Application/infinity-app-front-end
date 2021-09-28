import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { SIZES, COLORS, FONTS, dummyData, icons } from "../constants";
const Home = ({ getHoldings, getCoinMarket, coins, myHoldings }) => {


    useFocusEffect(
        React.useCallback(() => {
            getHoldings(dummyData.holdings)
            getCoinMarket()
        }, [])
    )

    let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0)

    let valueChange = myHoldings.reduce((a, b) => a + (b.holding_value_change_7d || 0), 0)
    let percChange = valueChange / (totalWallet - valueChange) * 100


export default Home;