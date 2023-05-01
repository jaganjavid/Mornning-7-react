import { Button, Menu, Text, Container } from "@mantine/core"

const Header = () => {

  const myFlex = {
    display:"flex", 
    justifyContent:"space-between", 
    alignItems:"center",
    padding:"10px 0px"
  }

  return (
     <header style={{background:"#538cc2",color:"#ffffff"}}>
        <Container>
            <div style={myFlex}>
                <Text size="xl">Our Money</Text>
                <Menu>
                    <Menu.Target>
                        <Button color="grape">Jagan</Button>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Item>Logout</Menu.Item>
                    </Menu.Dropdown>
                </Menu> 
            </div>

        </Container>
     </header>
  )
}

export default Header
