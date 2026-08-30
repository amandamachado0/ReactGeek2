import { useState } from 'react' 
function Assine({ usuarios, setUsuarios }) { 
    const [user, setUser] = useState({nome: "", email: ""}); 
    
 
    function handleField(field) { 
        /* 
            ...user faz com que seja mesclado o novo valor do 
        objeto com o(s) valor(es) já existente(s) 
        */ 
        setUser({ 
            ...user, 
            [field.target.name] : field.target.value 
        }); 
    } 
 
    function addUsuario() { 
        //add "user" dentro do array "usuarios" 
        setUsuarios([ 
            ...usuarios, 
            user 
        ]); 
        //resetar o objeto "user" 
        setUser({nome: "", email: ""}); 
    } 
 
    return( 
        <> 
            <p>Nome:  
            <input  
            type='text'  
            name='nome' 
            onChange={handleField} 
            value={user.nome}> 
            </input></p> 
            <p>Email:  
            <input  
            type='text'  
            name='email' 
            onChange={handleField} 
            value={user.email}> 
            </input></p> 
 
            <p><button onClick={addUsuario}>Adicionar</button></p> 
            <table border="1"> 
                <tr> 
                    <th>Nome</th> 
                    <th>Email</th> 
                     
                </tr> 
                {usuarios.map( (u, key) =>  
                    <tr key={key}> 
                        <td>{u.nome}</td> 
                        <td>{u.email}</td> 
         
                    </tr> 
                )} 
            </table> 
        </> 
    ) 
} 
 
export default Assine;
