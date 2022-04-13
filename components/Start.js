import { Button, Center, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { startNow } from "./Modal";

export default function Start() {
  const size = ["1rem", "1.5rem", "2rem", "2.5rem"];
  return (
    <Center m="15%">
      <VStack spacing={size}>
        <Text
          color={`teal.400`}
          fontFamily={"serif"}
          fontWeight="bold"
          fontSize={size}
        >
          Welcome to React JS Multiple Choice Quiz
        </Text>

        <Button
          fontFamily={"revert"}
          fontSize={size}
          p={size}
          size={"lg"}
          colorScheme="teal"
          onClick={() => {
            startNow(() => {
              state.started = true;
            });
          }}
        >
          Start
        </Button>
      </VStack>
    </Center>
  );
}
