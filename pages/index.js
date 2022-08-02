import { Center } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import MainCard from "../components/MainCard";
import Results from "../components/Results";
import Start from "../components/Start";
import questions from "../questions";
import state from "../store";

export default function Home() {
  const snap = useSnapshot(state);

  useEffect(() => {
    state.data = questions;
  }, []);

  return (
    <>
      <Head>
        <title>Simple Multiple Choice</title>
        <meta name="description" content="Created by Majid Ahmed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {snap.isFinished ? (
        <Results title={"Your Results"} />
      ) : !snap.started ? (
        <Start />
      ) : snap.isTimeUp ? (
        <Results title={"Sorry your time is up"} />
      ) : !snap.data.length ? (
        <Center>Loading...</Center>
      ) : (
        <MainCard />
      )}
  
    </>
  );
}
