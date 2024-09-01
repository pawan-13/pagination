import Pagination from "./pagination";
import PageAPI from "../api/PageApi";
import { useQuery } from "@tanstack/react-query";
import './styles.css';
import { useEffect } from "react";
import { useContext } from "react";
import { PageContext } from "../App";


const Page = () => {
    const {pageNo,setPageNo} =  useContext(PageContext);
    const { data: PageData, isLoading, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: PageAPI,
    });
    console.log('pagedata', PageData?.data?.products);
    useEffect(() => {
        PageAPI();
    }, []);

    if (isLoading) {
        return <h1>Loading....</h1>
    };

    if (isError) {
        return <span>{error.message}</span>
    }

    return (
        <>
            <div className="outerLayer">
                {
                    PageData?.data?.products.map((item) => {
                        return (
                            <div className="apiImage" key={item.id}>
                                <img src={item.image} alt={item.image} />
                            </div>
                        )
                    })
                };  
            </div>
            <Pagination pageNo={pageNo} setPageNo={setPageNo} />
        </>
    )
}
export default Page;