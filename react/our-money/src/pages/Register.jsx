import { Card, PasswordInput, Stack, TextInput, Button } from "@mantine/core"
import { useForm } from '@mantine/form';
import { Link, useNavigate} from "react-router-dom";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { fireDb } from "../firebase-config";
import { useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../redux/alertsSlice";
import {showNotification } from '@mantine/notifications';
import CryptoJS from "crypto-js";

const Register = () => {

    const risStyle = {display:"flex", justifyContent:"center", alignItems:"center", height:"80vh"}

    const registerForm = useForm({
        initialValues: {
            name:"",
            email:"",
            password:""
        }
    });    

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const onSubmit = async(e) => {
       e.preventDefault();

       try{
        dispatch(ShowLoading());
        // Check if user alreaday exist
        const qry = query(
            collection(fireDb, "users"),
            where("email" ,"==", registerForm.values.email)
        )
        const existingUsers = await getDocs(qry);

        if(existingUsers.size > 0){
            showNotification({
                title: 'User already Exist',
                color:"red",
                autoClose: 3000,
            })
            dispatch(HideLoading());
        } else {

            // encrypted password
            const entryptedPassword = CryptoJS.AES.encrypt(
                registerForm.values.password,
                "hwguyt6w8ygr2496wf5iyg3ir438767f6",
            ).toString();

            const response = await addDoc(collection(fireDb, "users"),{
            ...registerForm.values,
            password: entryptedPassword
            });

            console.log(response.id);
            if(response.id){
                showNotification({
                    title: 'User Created Successfully',
                    message: 'Please login',
                    color:"green",
                    autoClose: 3000,
                })
                dispatch(HideLoading());
                navigate("/login");
            } else {
                showNotification({
                    title: 'Invalid Credential',
                    color:"red",
                    autoClose: 3000,
                })
            }
          
        }
       } catch(error){
          dispatch(HideLoading());
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