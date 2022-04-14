import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
export default function BottomButtons() {
  const snap = useSnapshot(state);

  // create a button for each of the bottom buttons
  const BackButtonHandler = () => {
    if (state.currentQuestion > 0) --state.currentQuestion;

    // we must decrement the score if the user goes back to a previous question
    if (state.correct > 0) {
      --state.correct;
    }
  };

  const MyButtons = ({ title, handleClick, disabled }) => (
    <Button
      fontSize={["sm", "md", "xl", "2xl"]}
      colorScheme={"teal"}
      w="fit-content"
      p={[2, 4, 6, 8]}
      mt="-5%"
      onClick={handleClick}
      disabled={disabled}
    >
      {title}
    </Button>
  );

  return (
    <HStack
      justify={"center"}
      spacing={[1, 4, 8]}
      alignSelf="center"
      color={"teal.500"}
    >
      <MyButtons
        title="Previous"
        handleClick={BackButtonHandler}
        /* 	disable the Button if we are on first index    */
        disabled={snap.currentQuestion === 0}
      />
    </HStack>
  );
}
