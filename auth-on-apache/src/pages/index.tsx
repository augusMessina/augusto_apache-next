import Matrix from "@/components/matrix";
import { Menu } from "@/styles/myStyledComponents";
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
          {
            props.username ? 
            <>
              <Menu>
                <p className="welcome">Welcome <span style={{color: "#0f0"}}>{props.username}</span>, now you can see our very secret content</p> 
                <Matrix width={1000} height={400}></Matrix>
              </Menu>
            </> :
            <>
              <Menu>
                <p className="welcome">Couldnt get user header</p>
              </Menu>
            </>
          }
            
            
        </>
    )

}

export default ShowLogged;