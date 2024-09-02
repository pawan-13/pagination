import Pagination from "./pagination";
import PageAPI from "../api/PageApi";
import { useQuery } from "@tanstack/react-query";
import './styles.css';
import { useEffect, useState } from "react";


const Page = () => {
    const [pageNo, setPageNo] = useState(1)
    const { data: PageData, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['list'],
        queryFn: () => PageAPI(pageNo),
    });
    console.log('pagedata', PageData?.data);
    useEffect(() => {
        refetch()
    }, [pageNo, refetch]);

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
                    PageData?.data?.map((item) => {
                        console.log("image", item.download_url)
                        return (
                            <div className="apiImage" key={item.id}>
                                <img src={item.download_url} alt={item.images} />
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