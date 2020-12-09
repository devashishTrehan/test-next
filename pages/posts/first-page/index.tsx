import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { Context } from '../../_app';
import { motion } from "framer-motion";


const firstPage = ({ responseData }: any) => {
    const [data, setData] = useState(responseData);
    console.log('test');
    const { state, upState } = useContext(Context);

    const getComments = async () => {
        let response = await GetJobList();
        // console.log();
        setData(response.filter((data: any) => data.id % 2 == 0));
    }



    return (
        <Layout home>

            <motion.div initial={{ scale: .5 }} animate={{ scale: 1 }} >
                <Head>
                    <title>Test page</title>
                    <meta key='hello' content='its meta tag' />
                </Head>
                <h1>{data.length}</h1>
                <Link href='/'><a>Home</a></Link>
                <button onClick={getComments} >Get data</button>

                <div >

                    {
                        data.map((_data: any) => {
                            return (
                                <span style={{ margin: 5 }}>
                                    <h4 >{_data.email}</h4>
                                    <p>{JSON.stringify(_data.body)}</p>
                                </span>
                            )
                        })
                    }
                </div>
                <button onClick={upState}>upstate</button>
            </motion.div>
        </Layout>
    );
}

export const getServerSideProps = async () => {
    let response = await GetJobList();
    console.log(response);
    return {
        props: {
            responseData: response
        }

    }
}

export default firstPage;

const GetJobList = async () => {
    let query: string;
    query = 'https://jsonplaceholder.typicode.com/comments';
    console.log('jobs request', query)
    return fetch(query)
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch(error => console.log('error', error));

}