import { Card, PasswordInput, Stack, TextInput, Button } from "@mantine/core"
import { useForm } from '@mantine/form';
import { Link, useNavigate} from "react-router-dom";
import { collection, query,getDocs, where } from "firebase/firestore";
import { fireDb } from "../firebase-config";

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
            where("password" ,"==", loginForm.values.password),
        )
        const existingUsers = await getDocs(qry);

        if(existingUsers.size > 0){
            const storeInLs = {
                name: existingUsers.docs[0].data().name,
                email: existingUsers.docs[0].data().email,
                id: existingUsers.docs[0].id
            }

            localStorage.setItem("user", JSON.stringify(storeInLs));
            navigate("/");
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