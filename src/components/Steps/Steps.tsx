import { View } from 'react-native';
import React, { Fragment } from 'react';
import { Colors } from "../../theme";

export interface IStepsProps {
  style?: object;
  total: number;
  current: number;
}

export default function Steps(props: IStepsProps) {

  const { style = {}, total, current } = props;

  return (
    <View style={[
      {
        display: 'flex',
        flexDirection: 'row',
        height: 8,
        alignItems: 'center',
      },
      style
    ]}>
      <Circle shadowed={false} key={`circle--1`} />
      {Array.from({ length: total }).map((_, index) => {
        // total: 3, index=0,1,2
        const shadowed = index >= current;
        return (
          <Fragment key={index}>
            <Line shadowed={shadowed} key={`line-${index}`} />
            <Circle shadowed={shadowed} key={`circle-${index}`} />
          </Fragment>
        );
      })}
    </View>
  );
}

function Circle({ shadowed }: { shadowed: boolean; }) {
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        opacity: shadowed ? 0.5 : 1,
        borderRadius: 4,
        width: 8,
        height: 8
      }}
    />
  );
}

function Line({ shadowed }: { shadowed: boolean; }) {
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        opacity: shadowed ? 0.5 : 1,
        flex: 1,
        height: 4,
        alignSelf: "center",
      }}
    />
  );
}