import { Card, PasswordInput, Stack, TextInput, Button } from "@mantine/core"
import { useForm } from '@mantine/form';
import { Link, useNavigate} from "react-router-dom";
import { collection, query,getDocs, where } from "firebase/firestore";
import { fireDb } from "../firebase-config";
import { showNotification } from "@mantine/notifications";
import CryptoJS from "crypto-js";

const Login = () => {

    const risStyle = {display:"flex", justifyContent:"center", alignItems:"center", height:"80vh"}

    const loginForm = useForm({
        initialValues: {
            email:"",
            password:""
        }
    });

    const navigate = useNavigate();


    const onSubmit = async(e) => {
       e.preventDefault();

       try{

         // Check if user alreaday exist
         const qry = query(
            collection(fireDb, "users"),
            where("email" ,"==", loginForm.values.email),
        )
        const existingUsers = await getDocs(qry);

        if(existingUsers.size > 0){


            // Decrypt password

            const decryptedPassword = CryptoJS.AES.decrypt(
                existingUsers.docs[0].data().password,
                "hwguyt6w8ygr2496wf5iyg3ir438767f6"
            ).toString(CryptoJS.enc.Utf8);

            if(decryptedPassword === loginForm.values.password){
                const storeInLs = {
                    name: existingUsers.docs[0].data().name,
                    email: existingUsers.docs[0].data().email,
                    id: existingUsers.docs[0].id
                }
    
                localStorage.setItem("user", JSON.stringify(storeInLs));
                showNotification({
                    title:"User Logged in succesfully",
                    color:"green",
                    autoClose: 3000
                })
                navigate("/");
            } else{
                showNotification({
                    title:"Password not matching",
                    color:"red",
                    autoClose: 3000
                })
            }

          
        } else {
            showNotification({
                title:"User Not Found",
                color:"red",
                autoClose: 3000
            })
        }
        
       } catch(error){
          console.log(error);
       }
    }


  return (
    <div style={risStyle}>
        <Card shadow="lg"
        mt="lg"
        sx={{
            width:400
        }}
        withBorder>
           <Stack>
             <h2>Login</h2>
           </Stack>

           <form onSubmit={onSubmit}>
            <Stack mb={20}>
                <TextInput
                label="Email"
                type="email"
                required
                placeholder="Enter your email"
                name="email"
                {...loginForm.getInputProps("email")}/>
            </Stack>
            <Stack mb={20}>
                <PasswordInput
                label="Password"
                minLength="6"
                required
                placeholder="Enter your password"
                name="password"
                {...loginForm.getInputProps("password")}/>
            </Stack>

            <Button fullWidth type="submit" mb={20}>Submit</Button>

            <Link to="/register" 
            style={{
                color:"gray",
                textDecoration:"none"
            }}
            >Dont have account? Register</Link>
           </form>
        </Card>
    </div>
  )
}

export default Login