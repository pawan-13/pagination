import './styles.css';
const Pagination = ({pageNo,setPageNo}) => {
    const moveForwardPage = () => {
        setPageNo(pageNo + 1);
    };

    const moveBackwardPage = () => {
        setPageNo(pageNo - 1);
    };
    return (
        <div className="outerPLayer">
            <span onClick={moveBackwardPage} className="innerPlayer">{"<"}</span>
            <span className="innerPlayer">{pageNo}</span>
            <span onClick={moveForwardPage} className="innerPlayer">{">"}</span>
        </div>
    )
}
export default Pagination;