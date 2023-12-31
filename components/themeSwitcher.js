import {Button, Flex, useColorMode} from '@chakra-ui/react';
import {BsMoonStarsFill, BsSun} from 'react-icons/bs';

export default function ThemeSwitcher(props) {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        /**
         * Ideally, only the button component should be used (without Flex).
         * Props compatible with <Button /> are supported.
         */
        <Flex h="100vh" justifyContent="center" alignItems="center">
            <Button
                aria-label="Toggle Color Mode"
                onClick={toggleColorMode}
                _focus={{boxShadow: 'none'}}
                w="fit-content"
                {...props}>
                {colorMode === 'light' ? <BsMoonStarsFill/> : <BsSun/>}
            </Button>
        </Flex>
    );
}