import { Button, Menu, Text, Container } from "@mantine/core"

const Header = () => {


  const user = JSON.parse(localStorage.getItem("user"));  

  const myFlex = {
    display:"flex", 
    justifyContent:"space-between", 
    alignItems:"center",
    padding:"10px 0px"
  }

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  return (
     <header style={{background:"#538cc2",color:"#ffffff"}}>
        <Container>
            <div style={myFlex}>
                <Text size="xl">Our Money</Text>
                <Menu>
                    {user && (
                        <Menu.Target>
                        <Button color="grape">{user.name}</Button>
                        </Menu.Target>
                    )}

                    <Menu.Dropdown>
                        <Menu.Item onClick={logout}>Logout</Menu.Item>
                    </Menu.Dropdown>
                </Menu> 
            </div>

        </Container>
     </header>
  )
}

export default Header
