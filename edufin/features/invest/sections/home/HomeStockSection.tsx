import HomeInvestSeciton from "@/features/invest/ui/home/HomeInvestSection";
import React from "react";
import ListItem from "@/features/invest/ui/home/ListItem";
import {View} from "react-native";

export default function HomeStockSection() {
  return (
    <HomeInvestSeciton
      secTitle="주식"
      depositVal={123456}
      totalVal={123456}
      totalValDiff={123456}
      totalValDiffRate={1234}
      itemList={
        <View>
          <ListItem
            imgSource={'@/assets/images/marulab-logo.png'}
            name={"광명전기"}
            curPrc={1475}
            avgPrc={1600}
            amount={230}
            totalPosVal={349575}
            prcDiff={500}
            prcDiffRate={8.9}
          />
          <ListItem
            imgSource={'@/assets/images/marulab-logo.png'}
            name={"광명전기"}
            curPrc={1475}
            avgPrc={1600}
            amount={230}
            totalPosVal={349575}
            prcDiff={500}
            prcDiffRate={8.9}
          />
        </View>
      }/>
  )
}