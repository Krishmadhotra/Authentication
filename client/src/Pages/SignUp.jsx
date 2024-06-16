import { Button, Label, TextInput } from 'flowbite-react';
import {Link} from 'react-router-dom'
const SignUp=()=>{
    return(
        <div className="min-h-screen mt-20">
          <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
            <div className="flex-1">
              <Link to="/" className=" font-bold dark:text-white text-4xl">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Krish's </span>
                  Blog
            </Link>
            <p className="text-sm mt-5">This is a demo project.But you can sign up with ur email and password and with your google also.</p>
            </div>
            <div className="flex-1">
                <form className="flex flex-col gap-4">
                    <div className=" ">
                        <Label value="name@company.com" />
                        <TextInput
                            type="text"
                            placeholder="Username"
                            id="username"
                        />
                    </div>
                    <div className="flex-1">
                        <Label value="Your Email" />
                        <TextInput 
                            type="text"
                            placeholder="Email"
                            id="email"
                        />
                    </div>
                    <div>
                        <Label value="Your Password" />
                        <TextInput 
                            type="text"
                            placeholder="Password"
                            id="password"
                        />
                    </div>
                    <Button gradientDuoTone='purpleToPink' type='submit'>
                        SignUp
                    </Button>
                </form>

                <div className="flex gap-3 text-sm mt-5">
                    <span>Have an Account ?</span>
                    <Link to="/signin" className="text-blue-500">Sign In</Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUp;