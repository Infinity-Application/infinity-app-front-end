import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    Switch
   
} from 'react-native';

import { MainLayout } from "./";
import { HeaderBar } from "../components";
import { FONTS, COLORS, SIZE, dummyData, icons } from "../constants";



const SectionTitle = ({ title }) =>  {
    return (
        <View
            style={{
                marginTop: SIZES.padding
            }}
        >
            <Text style={{ color: COLORS.lightGray3, ...FONTS.h4 }}>{title}</Text>
        </View>
    )
}

const Setting = ({ title, value, type, onPress }) => {
    if (type == "button") {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    height: 50,
                    alignItems: 'center'
                }}
                onPress={onPress}
            >
                <Text style={{ flex: 1, color: COLORS.white, ...FONTS.h3 }}>{title}</Text>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{ marginRight: SIZES.radius, color: COLORS.lightGray3, ...FONTS.h3 }}>{value}</Text>
                    <Image
                        source={icons.rightArrow}
                        style={{
                            height: 15,
                            width: 15,
                            tintColor: COLORS.white
                        }}
                    />
                </View>
            </TouchableOpacity>
        )
    } else {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    alignItems: 'center'
                }}
            >
                <Text style={{ flex: 1, color: COLORS.white, ...FONTS.h3 }}>{title}</Text>
                <Switch
                    value={value}
                    onValueChange={(value) => onPress(value)}
                />
            </View>
        )
    }

}
const Profile = () => {
    const [faceId, setfaceId] =  React.useState(true)
    return {
        <MainLayout>
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZE.padding,
                    backgroundColor: COLORS.black
                }}

export default Profile;