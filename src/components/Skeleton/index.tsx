import { SkeletonStyled } from "./styled"

type Props = {
    width:string;
    height:string;
}

export const Skeleton = ({width, height}:Props)=> {
    return (
        <SkeletonStyled 
            width={width}
            height={height}
        />
    )
}