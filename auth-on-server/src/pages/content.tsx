import Matrix from "@/components/matrix";
import { HomeButton, Menu } from "@/styles/myStyledComponents";
import Head from "next/head";
import { useRouter } from "next/router";

export function getServerSideProps({req}){

  return {
    props:{
      username: req.headers["user"] || null
    }
  }
}

const ShowLogged = (props) => {

    const router = useRouter();

    return(
        <>
            <Head>
                <title>Next Content</title>
            </Head>
            <Menu>
               <p className="welcome">Welcome <span style={{color: "#0f0"}}>{router.query.username || props.username}</span>, now you can see our very secret content</p> 
               <Matrix width={1000} height={400}></Matrix>
               <HomeButton onClick={() => {router.replace('/')}}>Home</HomeButton>
            </Menu>
        </>
    )

}

export default ShowLogged;