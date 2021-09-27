import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Animated,
    Image
} from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { connect } from "react-redux";
import { getCoinMarket } from "../stores/market/marketActions";

import { MainLayout } from "./";
import { HeaderBar, TextButton } from "../components";
import { constants, COLORS, FONTS, SIZES, icons } from "../constants";

const marketTabs = constants.marketTabs.map((marketTab) => ({
    ...marketTab,
    ref: React.createRef()
}))

const TabIndicator = ({ measureLayout, scrollX }) => {

    const inputRange = marketTabs.map((_, i) => i * SIZES.width)

    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: measureLayout.map(measure => measure.x)
    })

    return (
        <Animated.View
            style={{
                position: 'absolute',
                left: 0,
                height: "100%",
                width: (SIZES.width - (SIZES.radius * 2)) / 2,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray,
                transform: [{
                    translateX
                }]
            }}
        />
    )
}

const Tabs = ({ scrollX, onMarketTabPress }) => {

    const [measureLayout, setMeasureLayout] = React.useState([])
    const containerRef = React.useRef()

    React.useEffect(() => {
        let ml = []

        marketTabs.forEach(marketTab => {
            marketTab?.ref?.current?.measureLayout(
                containerRef.current,
                (x, y, width, height) => {
                    ml.push({
                        x, y, width, height
                    })

                    if (ml.length === marketTabs.length) {
                        setMeasureLayout(ml)
                    }
                }
            )
        })
    }, [containerRef.current])

    return (
        <View
            ref={containerRef}
            style={{
                flexDirection: 'row'
            }}
        >
            {/* Tab Indicator */}
            {measureLayout.length > 0 && <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />}

            {/* Tabs */}
            {marketTabs.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={`MarketTab-${index}`}
                        style={{
                            flex: 1
                        }}
                        onPress={() => onMarketTabPress(index)}
                    >
                        <View
                            ref={item.ref}
                            style={{
                                paddingHorizontal: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 40
                            }}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const Market = ({ getCoinMarket, coins }) => {

    const scrollX = React.useRef(new Animated.Value(0)).current;
    const marketTabScrollViewRef = React.useRef()

    const onMarketTabPress = React.useCallback(marketTabIndex => {
        marketTabScrollViewRef?.current?.scrollToOffset({
            offset: marketTabIndex * SIZES.width
        })

    })

    React.useEffect(() => {
        getCoinMarket()
    }, [])

    function renderTabBar() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.gray
                }}
            >
                <Tabs
                    scrollX={scrollX}
                    onMarketTabPress={onMarketTabPress}
                />
            </View>
        )
    }

    function renderButtons() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius,
                    marginHorizontal: SIZES.radius
                }}
            >
                <TextButton
                    label="USD"
                />

                <TextButton
                    label="% (7d)"
                    containerStyle={{
                        marginLeft: SIZES.base
                    }}
                />

                <TextButton
                    label="Top"
                    containerStyle={{
                        marginLeft: SIZES.base
                    }}
                />
            </View>
        )
    }
export default Market;
