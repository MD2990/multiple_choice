import {
  Center,
  CircularProgress,
  CircularProgressLabel,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import state from "../store";

export default function Timer() {
  const snap = useSnapshot(state);
  const seconds = 5 * 60;

  const myColor = () => {
    if (snap.seconds > seconds / 1.3) return "red.500";
    if (snap.seconds > seconds / 2) return "orange.400";

    return "green.400";
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (state.started && state.seconds < seconds) {
        ++state.seconds;
        clearInterval(interval);
      } else if (state.seconds === seconds) {
        state.isTimeUp = true;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [snap.seconds, snap.isTimeUp, seconds]);

  return (
    <Center  p="5" m="2">
      <CircularProgress
        size={["3.5rem", "5rem", "10rem", "15rem"]}
        value={snap.seconds}
        min={0}
        max={seconds}
        color={myColor()}
      >
        <CircularProgressLabel color={myColor()}>
          <Text as="span">
            {("0" + Math.floor((snap.seconds / 60) % 60)).slice(-2)}:
          </Text>
          <Text as="span">{("0" + ((snap.seconds / 1) % 60)).slice(-2)}</Text>
        </CircularProgressLabel>
      </CircularProgress>
    </Center>
  );
}
