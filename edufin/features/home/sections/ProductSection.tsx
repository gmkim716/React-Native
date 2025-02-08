import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SectionTitle from "@/shared/ui/SectionTitle";
import {useComponentState} from "nativewind/dist/styled/use-component-state";
import React, {useState} from "react";
import Temp예적금화면 from "@/features/home/tabs/Temp예적금화면";


type TabContentProps = {
  activeTab: string;
}

const TabContent = ({activeTab}: TabContentProps)=> {
  switch(activeTab) {
    case '예·적금': return <Temp예적금화면 />;
    case '주식': return <Text>주식 상품</Text>;
    case '가상자산': return <Text>가상자산 상품</Text>;
    default: return null;
  }
}

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState("예·적금")

  const tabs = ['예·적금', '주식', '가상자산'];
  

  // 탭 추가 작업 진행 중이었음
  
  return (
    <View style={styles.container}>
      <SectionTitle>관심상품</SectionTitle>
      <View style={styles.tabBar}>
        {tabs.map(tab => (
          <Pressable
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text>
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.content}>
        <TabContent activeTab={activeTab} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#e5e5e5'
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center'
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: '#3b82f6'
  },
  tabText: {
    color: '#666'
  },
  activeTabText: {
    color: '#3b82f6',
    fontWeight: 'bold'
  },
  content: {
    padding: 16
  }
});