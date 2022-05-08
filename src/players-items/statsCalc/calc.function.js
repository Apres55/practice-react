export const getStats = ({points, rebounts, assists}) => {
    return +(points + rebounts + assists).toFixed(2);
}