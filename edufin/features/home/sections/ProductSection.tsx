import {Pressable, StyleSheet, Text, View, ViewStyle, TextStyle} from "react-native";
import SectionTitle from "@/shared/ui/SectionTitle";
import React, {useState} from "react";
import TempSaving from "@/features/home/tabs/TempSaving";

type TabType = '예·적금' | '주식' | '가상자산';

type TabContentProps = {
  activeTab: TabType;
}

const TabContent = ({activeTab}: TabContentProps)=> {
  switch(activeTab) {
    case '예·적금': return <TempSaving />;
    case '주식': return <Text>주식 상품</Text>;
    case '가상자산': return <Text>가상자산 상품</Text>;
    default: return null;
  }
}

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState<TabType>('예·적금');
  const tabs: TabType[] = ['예·적금', '주식', '가상자산'];

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
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
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

interface Styles {
  container: ViewStyle;
  tabBar: ViewStyle;
  tab: ViewStyle;
  activeTab: ViewStyle;
  tabText: TextStyle;
  activeTabText: TextStyle;
  content: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
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