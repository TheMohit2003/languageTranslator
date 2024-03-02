import { Skeleton } from "@chakra-ui/react";
import { SkeletonLoaderProps } from "../interfaces/globalTypes";
const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ height = "20px" }) => { // Default value of height is "20px"
    return (
        <Skeleton
            height={height} // Use the height prop correctly
            width="100%"
            startColor="gray.300"
            endColor="gray.100"
        />
    );
};

export default SkeletonLoader;
