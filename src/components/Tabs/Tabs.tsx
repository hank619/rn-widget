/*
 * @Author: Hong.Zhang
 * @Date: 2023-05-08 11:44:42
 * @Description: 
 */
import { Tabs as AntDTabs } from '@ant-design/react-native';
import React  from 'react';
import { Colors } from '../../theme';

export interface ITabBarProps { 
  tabs: string[];
  children: React.ReactNode[];
}

// TODO: config underline width
export default function Tabs(props: ITabBarProps) {

  const { tabs, children } = props;

  return (
    <AntDTabs
      tabs={tabs.map(tab => ({title: tab}))}
      tabBarBackgroundColor={Colors.white}
      tabBarUnderlineStyle={{backgroundColor: Colors.primary}}
      tabBarActiveTextColor={Colors.primary}
      tabBarInactiveTextColor={Colors.black}
    >
      {children}
    </AntDTabs>
  )
}