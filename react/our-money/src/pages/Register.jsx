import { Card, PasswordInput, Stack, TextInput, Button } from "@mantine/core"
import { useForm } from '@mantine/form';
import { Link, useNavigate} from "react-router-dom";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { fireDb } from "../firebase-config";

const Register = () => {

    const risStyle = {display:"flex", justifyContent:"center", alignItems:"center", height:"80vh"}

    const registerForm = useForm({
        initialValues: {
            name:"",
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
            where("email" ,"==", registerForm.values.email)
        )
        const existingUsers = await getDocs(qry);

        if(existingUsers.size > 0){
            alert("User already exist")
        } else {
            const response = await addDoc(collection(fireDb, "users"), 
            registerForm.values);
            alert("User Register Successfully")
            navigate("/login");
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
             <h2>Registration</h2>
           </Stack>

           <form onSubmit={onSubmit}>
            <Stack mb={20}>
                <TextInput
                label="Name"
                required
                placeholder="Enter your name"
                name="name"
                {...registerForm.getInputProps("name")}/>
            </Stack>
            <Stack mb={20}>
                <TextInput
                label="Email"
                type="email"
                required
                placeholder="Enter your email"
                name="email"
                {...registerForm.getInputProps("email")}/>
            </Stack>
            <Stack mb={20}>
                <PasswordInput
                label="Password"
                minLength="6"
                required
                placeholder="Enter your password"
                name="password"
                {...registerForm.getInputProps("password")}/>
            </Stack>

            <Button fullWidth type="submit" mb={20}>Submit</Button>

            <Link to="/login" 
            style={{
                color:"gray",
                textDecoration:"none"
            }}
            >Already have an account? Login</Link>
           </form>
        </Card>
    </div>
  )
}

export default Register