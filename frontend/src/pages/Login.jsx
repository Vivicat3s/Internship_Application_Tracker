import {useState} from "react"
import axios from "axios"
import {useNavigate,Link} from "react-router-dom"

function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSubmit = async(e)=>{

e.preventDefault()

try{

const res = await axios.post(
"http://localhost:5000/api/login",
{email,password}
)

if(res.data === "Success"){
navigate("/home")
}
else{
alert("Invalid email or password")
}

}
catch(err){

alert("Server error")

}

}

return(

<div className="auth-page">

<div className="auth-card">

<h2>Login to InternTrack</h2>

<form onSubmit={handleSubmit}>

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

<button type="submit">Login</button>

</form>

<p>
Don't have an account?
<Link to="/register"> Register</Link>
</p>

</div>

</div>

)

}

export default Login