import { extendTheme } from '@chakra-ui/react';
import '@fontsource/lobster';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: "#D3D3D3",
                fontFamily: "Lobster"
            }
        }
    }
});
export default theme;