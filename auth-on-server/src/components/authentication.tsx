import { Menu, LogIn } from "@/styles/myStyledComponents";
import { useState } from "react";
import { useRouter } from 'next/router'


const Auth = () => {


    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [inputType, setInputType] = useState<string>("password");
    const [responseMSG, setResponseMSG] = useState<{text: string, color: string}>({text: "", color: ""});
    const [eyeClass, setEyeClass] = useState<string>("gg-eye")

    const router = useRouter();

    const users: {name: string, pswrd: string}[] = [
        {name: "augusto", pswrd: "my_password"},
        {name: "guest", pswrd: "guest_password"},
    ]

    const validate = () => {
        if (users.find(user => user.name === username && user.pswrd === password)) {
            // setResponseMSG({text: "Authentication succesfull!", color: "#77dd77"});
            router.push({
                pathname:'/content',
                query: {username}
            });
        } else {
            setResponseMSG({text: "Invalid username or password", color: "#ff6961"});

        }
    }

    const swapVisibility = () => {
        if (inputType === "text") {
            setInputType("password");
            setEyeClass("gg-eye");
        } else {
            setInputType("text");
            setEyeClass("gg-eye-alt");
        }
    }

    const giveResponse = () => {
        if (responseMSG.text != "") {
            return(
                <>
                    <p id="responseMSG" style={{color: `${responseMSG.color}`}}>{responseMSG.text}</p>
                </>
            )
        }
    }

    return(
        <Menu>
            <p className="welcome">Welcome to Augusto's <span style={{color: "#0f0"}}>Next.js </span>
            Virtual Host!</p>
            <LogIn>
                <p>Please authenticate</p>
                <input placeholder="Enter your username" onChange={(e) => {setUsername(e.target.value)}}></input>
                <div style={{display: "flex", flexDirection:"row", alignItems:"center", gap: "15px", width: "100%"}}>
                    <div><i className={eyeClass} onClick={() => swapVisibility()}></i></div>
                    <input placeholder="Enter your password" type={inputType} onChange={(e) => {setPassword(e.target.value)}}></input>
                </div>
                <button onClick={() => validate()}>Enter</button>
            </LogIn>
            {giveResponse()}
        </Menu>
    )
}

export default Auth;