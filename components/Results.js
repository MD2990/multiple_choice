import { Button, Center, Divider, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

export default function Results({ title }) {
  const snap = useSnapshot(state);
  const router = useRouter();

  return (
    <Center>
      <VStack
        m="10%"
        boxShadow={"inner"}
        align={"flex-start"}
        rounded={"2xl"}
        p="4"
        fontSize={["md", "xl", "3xl", "5xl"]}
        color={"teal.400"}
        fontFamily="serif"
        fontWeight={"extrabold"}
        textShadow={`0px 2px 5px lightGray`}
      >
        <Text
          className="animate__animated  animate__rotateInDownLeft"
          textDecoration={"underline"}
        >
          {title}:
        </Text>
        <Text className="animate__animated animate__delay-2s  animate__rotateInDownLeft">
          Correct: {snap.correct}
        </Text>
        <Text className="animate__animated animate__delay-3s animate__rotateInDownLeft">
          Incorrect: {snap.data.length - snap.correct}
        </Text>
        <Text className="animate__animated animate__delay-4s  animate__rotateInDownLeft">
          You got {snap.correct} out of {snap.data.length}
        </Text>
        <Text className="animate__animated animate__delay-5s animate__rotateInDownLeft">
          Average Score : {Math.round((snap.correct / snap.data.length) * 100)}%
        </Text>
        <Divider />
        <Button w="full" onClick={() => router.reload()}>
          Restart (only for test purpose)
        </Button>
      </VStack>
    </Center>
  );
}
