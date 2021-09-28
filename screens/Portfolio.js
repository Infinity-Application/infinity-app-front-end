import React from 'react';
import {
    View,
    Text
} from 'react-native';
import{View,Text,TouchableOpacity,FlatList,Image} from 'react-native';
import { connect } from 'react-reddux'
import { useFoucuseffect } from "@react-navigation/native"
const Portfolio = ({getHoldings, myHoldings}) =>{
    const [selectedCoin, setSelectedCoin] = React.useState(null)
    function renderCurrentBalancesection(){
        return(
            <View
             style= {{
                 paddingHorizontal: SIZES.padding,
                 borderBottomLeftRadius: 25,
                 borderBottomRightRadius: 25,
                 backgroundColor: COLORS.gray
             }}
            >
                <Text style={{marginTop:50,color:COLORS.white,...FONTS.largTitle}}>Portfolio</Text>
                <BalanceInfo
                   title="Current Balance"
                   displayAmount ={totalWallet}
                   changePct={percChange}
                   containerStyle={{
                       marginTop: SIZES.radius,
                       marginBottom: SIZES.padding
                   }}
                />

            </View>
        )
    }
export default Portfolio;