import {useState} from "react"
import axios from "axios"
import {useNavigate,Link} from "react-router-dom"

function Register(){

const navigate = useNavigate()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSubmit = async(e)=>{

e.preventDefault()

try{

await axios.post(
"http://localhost:5000/api/register",
{name,email,password}
)

alert("Registration successful")

navigate("/")

}
catch(err){

alert("Server error")

}

}

return(

<div className="auth-page">

<div className="auth-card">

<h2>Create Account</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button type="submit">
Register
</button>

</form>

<p>
Already have account?
<Link to="/"> Login</Link>
</p>

</div>

</div>

)

}

export default Register