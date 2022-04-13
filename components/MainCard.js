import {
  Box,
  Button,
  Divider,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import BottomButtons from "./BottomButtons";
import { conformation } from "./Modal";
import Timer from "./Timer";

export default function MainCard() {
  const snap = useSnapshot(state);

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      ++state.correct;
    }

    if (state.currentQuestion + 1 < state.data.length) {
      ++state.currentQuestion;
    } else {
      conformation(() => (state.isFinished = true));
    }
  };
  return (
    <Wrap
      align="center"
      justify="center"
      alignContent={"center"}
      alignItems={"center"}
      alignSelf={"center"}
      justifyContent={"center"}
      direction={"column"}
    >
      <WrapItem className="animate__animated  animate__flip">
        <Timer />
      </WrapItem>
      <WrapItem className="animate__animated animate__delay-2s  animate__lightSpeedInRight ">
        <Text as="cite" fontSize={"sm"}>
          Question: {snap.currentQuestion + 1} out of {snap.data.length}
        </Text>
      </WrapItem>
      <WrapItem>
        <Box boxShadow={"2xl"} rounded="2xl" p="2" px="6" m="2">
          <Text
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            textAlign={"center"}
            color={"teal.400"}
            mt="3"
            textShadow={`0px 0px 5px lightGray`}
            fontWeight="bold"
            fontSize={["md", "xl", "2xl", "4xl"]}
          >
            {snap.data[snap.currentQuestion].text}
          </Text>

          <VStack
            align="center"
            spacing={[2, 4, 6, 8]}
            justify="flex-start"
            fontSize={["md", "xl", "2xl", "3xl"]}
            className="animate__animated animate__backInDown"
          >
            <Divider />
            {snap.data[snap.currentQuestion].options.map(
              ({ id, isCorrect, text }) => {
                return (
                  <Button
                  
                    w="fit-content"
                    minW="60%"
                    p={[4, 6, 8]}
                    fontSize={["xs", "md", "xl", "2xl"]}
                    color={"blackAlpha.600"}
                    textAlign={"center"}
                    key={id}
                    bg={`${
                      snap.selectedValue[snap.currentQuestion] === id
                        ? "lightGreen"
                        : "lightgray"
                    } `}
                    onClick={() => {
                      state.selectedValue[snap.currentQuestion] = id || [];

                      optionClicked(isCorrect);
                    }}
                  >
                    {text}
                  </Button>
                );
              }
            )}
            <Divider />
            <BottomButtons />
          </VStack>
        </Box>{" "}
      </WrapItem>
    </Wrap>
  );
}
