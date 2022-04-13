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
  // Properties
  const snap = useSnapshot(state);

  useEffect(() => {
    state.data = questions;
  }, []);




  if (!snap.data.length) return <Center>Loading...</Center>;
  if (snap.isTimeUp) return <Results title={"Sorry your time is up"} />;
  if (!snap.started) return <Start />;
  if (snap.isFinished) return <Results title={"Your Results"} />;

  return (
    <>
      <Head>
        <title>Simple Multiple Choice Next js Application</title>
        <meta name="description" content="Created by Majid Ahmed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center>
        <MainCard />
      </Center>
    </>
  );
}
