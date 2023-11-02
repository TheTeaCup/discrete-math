import Head from "next/head";
import Layout from "@/components/layout";
import {Text, Heading, VStack, SimpleGrid} from "@chakra-ui/react";
import Card from "@/components/card";

// functions array
const functions = [
    {
        name: "test",
        url: "/test",
    }
];

export default function Home() {

  return (
    <>
      <Head>
        <title>Math | Hunter Wilson</title>
      </Head>

        <Layout>
            <VStack>
                <Heading as="h1" size="2xl">Math Functions</Heading>
                <Text fontSize="xl">A list of links of different math functions with steps included!</Text>
            </VStack>

            <br/>

            <SimpleGrid columns={1} spacing={5}>
                {functions.map((link) => {
                    return <Card key={link.name} link={link}/>
                })}
            </SimpleGrid>

        </Layout>
    </>
  )
}
