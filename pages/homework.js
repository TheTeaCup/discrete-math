import Head from "next/head";
import Layout from "@/components/layout";
import {Heading, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import Card from "@/components/card";

// functions array
const functions = [
    {
        name: "Combinatorics",
        url: "/homework/combinatorics",
    }
];

export default function Home() {
    return (
        <>
            <Head>
                <title>Homework Examples | Hunter Wilson</title>
            </Head>

            <Layout>
                <VStack>
                    <Heading as="h1" size="2xl">Discrete Math Homework Files</Heading>
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
