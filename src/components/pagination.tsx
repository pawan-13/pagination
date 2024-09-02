import './styles.css';
const Pagination = ({ pageNo, setPageNo }) => {
    const PrevThreeNumberArray = Array.from({ length: 3 }, (_, index) => pageNo - 1 - index).filter((value) => value > 0).reverse();
    console.log('hey', PrevThreeNumberArray);

    const NextFourNumberArray = Array.from({ length: 4 }, (_, index) => pageNo + index)
    console.log(NextFourNumberArray);

    const aggredateDate = [...PrevThreeNumberArray, ...NextFourNumberArray];
    console.log('pawan', aggredateDate);


    const moveForwardPage = () => {
        setPageNo(pageNo + 1);
    };

    const moveBackwardPage = () => {
        setPageNo(pageNo - 1);
    };
    return (
        <div className="outerPLayer">
            {
                pageNo > 1 && <span onClick={moveBackwardPage} className="innerPlayer">{"<"}</span>
            }
            {
                aggredateDate.map((item, index) => {
                    console.log(item, pageNo, 'ip')
                    return (
                        <span onClick={() => setPageNo(item)} key={index} className={item === pageNo ? `innerPlayer active` : `innerPlayer`}>{item}</span>
                    )
                })
            }

            <span onClick={moveForwardPage} className="innerPlayer">{">"}</span>
        </div>
    )
}
export default Pagination;