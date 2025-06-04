import {useMediaQuery} from "react-responsive";

function useIsMobile() {
    return useMediaQuery({query: '(max-width: 1080px)'});
}
export default useIsMobile;