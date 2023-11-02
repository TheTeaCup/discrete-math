import {Box, Flex, useColorModeValue} from "@chakra-ui/react";

const Layout = ({children}) => {
    return (
        <>
            <Flex
                align="center"
                justify="center"
                id="layout">
                {/*minH="100vh"*/}
                <Box
                    borderRadius="lg"
                    m={{base: 5, md: 16, lg: 10}}
                    p={{base: 5, lg: 16}}>

                    {children}
                </Box>
            </Flex>
        </>
    )
}

export default Layout