import {Button, Center, Text} from "@chakra-ui/react";
import Link from "next/link";

const Card = ({link}) => {
    return (
        <>
            <Link href={link.url} key={link.name} rel='noopener noreferrer'>
                <Button w={'full'} leftIcon={link.icon}>
                    <Center>
                        <Text>{link.name}</Text>
                    </Center>
                </Button>
            </Link>
        </>
    )
}

export default Card;