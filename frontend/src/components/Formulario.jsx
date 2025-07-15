import { useForm } from 'react-hook-form';

const Formulario = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);      
        fetch('http://localhost:8080/clientes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Cliente registrado correctamente');
            window.location.reload(); // Reload the page to see the new data
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error al registrar el cliente');
        });
        console.log(data);
        document.querySelector('form').reset();
        return false; 
    };

    return <div>
                <h2>Formulario de clientes</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Nombre</label>
                        <input type="text" {...register('nombre', {
                            required: true,
                            maxLength: 10
                        })}/>
                        {errors.nombre?.type === 'required' && <p>Este campo es requerido</p>}
                    </div>
                    <div>
                        <label>Documento</label>
                        <input type="text" {...register('documento', {
                            required: true
                        })}/>
                        {errors.documento?.type === 'required' && <p>Este campo es obligatorio</p>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" {...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                        })}/>
                        {errors.email?.type === 'pattern' && <p>Este campo es obligatorio y debe ser un email válido</p>}
                    </div>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
};

export default Formulario;