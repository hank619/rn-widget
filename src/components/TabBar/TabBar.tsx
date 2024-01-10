/*
 * @Author: Hong.Zhang
 * @Date: 2023-05-08 11:44:42
 * @Description: 
 */
import { TabBar as AntDTabBar } from '@ant-design/react-native';
import React  from 'react';
import { Colors } from '../../theme';

export interface ITabBarProps { 
  tabs: {
    title: string;
    icon?: React.ReactNode;
    selectedIcon?: React.ReactNode;
    badge?: number;
  }[];
  value?: number;
  onChange?: (index: number)=> void;
}

export default function TabBar(props: ITabBarProps) {

  const { tabs, value, onChange } = props;

  return (
    <AntDTabBar
      barTintColor={Colors.white}
      tintColor={Colors.primary}
      unselectedTintColor={Colors.black}
    >
      {tabs.map((tab, index) => 
        <AntDTabBar.Item
          key={index}
          selected={value === index}
          onPress={() => {
            if (onChange) {
              onChange(index)
            }
          }}
          {...tab}
        />  
      )}
    </AntDTabBar>
  )
}