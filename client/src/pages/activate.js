
import {useParams , useNavigate} from 'react-router-dom';


export default async function activateUser(req, res) {

 
    const params = useParams();
    const navigate = useNavigate();
    const hash = params.hash;
    console.log(params);
    console.log(hash);
   
    if (!hash) {
      return res.status(401).json({message: 'Cannot Validate an User!'})
    }
  
    const response = await fetch(`http://localhost:3001/auth/activate/${hash}`);
    console.log(response);
    if (response.status >= 400) {
      return res.status(401).json({message: 'Cannot Validate an User!'})
    } else {
      navigate('/signin');
    }
  }