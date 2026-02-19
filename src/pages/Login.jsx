import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";


function Login() {
    const { register, handleSubmit, reset, formState: { isValid, errors } } = useForm()
    const { setUser } = useContext(AppContext);
    const navigate = useNavigate()

    async function submitFn(formData) {
        try {
            const response = await axios.get("https://my-backend-3y3r.onrender.com/users", {
                params: {
                    email: formData.email,
                    password: formData.password
                }
            });
            if (response.data.length > 0) {
                const loggedUser = response.data[0];
                setUser(loggedUser);
                console.log(loggedUser);
                localStorage.setItem("username" , loggedUser.username)
                navigate("/home");
            } else {
                alert("Kullanıcı Bulunamadı")
            }
        } catch(error) {
            console.log(error)
        }
        
    }

    return (
        <div className="bg-background-dark font-display text-slate-100 min-h-screen flex items-center justify-center p-6">
            <div className="movie-bg" data-alt="Dark blurred collage of classic movie posters"></div>
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
            </div>
            <main className="w-full max-w-[450px]">
                <div className="flex flex-col items-center mb-8">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-icons text-primary text-4xl">movie_filter</span>
                        <h1 className="text-3xl font-extrabold tracking-tight text-white">Cine<span
                            className="text-primary">Track</span></h1>
                    </div>
                    <p className="text-slate-400 text-sm font-medium">Your cinematic journey, organized.</p>
                </div>
                <div className="glass-card rounded-xl p-8 md:p-10">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                        <p className="text-slate-400 text-sm">Please enter your credentials to access your library</p>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit(submitFn)}>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1" for="email">Email Address</label>
                            <div className="relative">
                                <span
                                    className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">alternate_email</span>
                                <input
                                    className="w-full bg-background-dark/50 border border-slate-700/50 rounded-lg py-3 pl-11 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary input-glow transition-all duration-300"
                                    id="email" {...register("email", {
                                        required: {
                                            value: true,
                                            message: "E-mail alanı boş bırakılamaz"
                                        },
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: "Geçerli bir E-mail giriniz..."
                                        }
                                    })} placeholder="name@example.com" required="" type="email" />
                                {errors.email && (<div>{errors.email.message}</div>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1" for="password">Password</label>
                            <div className="relative">
                                <span
                                    className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">lock_outline</span>
                                <input
                                    className="w-full bg-background-dark/50 border border-slate-700/50 rounded-lg py-3 pl-11 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary input-glow transition-all duration-300"
                                    id="password" {...register("password", {
                                        required: {
                                            value: true,
                                            message: "lütfen şifrenizi giriniz"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Şifre en az 6 karakterli olmalıdır..."
                                        }
                                    })} placeholder="••••••••" required="" type="password" />
                                {errors.password && (<div>{errors.password.message}</div>)}
                            </div>
                        </div>
                        <div className="flex items-center gap-2 px-1">
                            <input
                                className="w-4 h-4 rounded border-slate-700 bg-background-dark text-primary focus:ring-primary focus:ring-offset-background-dark"
                                id="remember" type="checkbox" />
                            <label className="text-sm text-slate-400 select-none cursor-pointer" for="remember">Remember this
                                device</label>
                        </div>
                        <button disabled={!isValid}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-primary/20 transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2"
                            type="submit">
                            <span>Sign In</span>
                            <span className="material-icons text-lg">login</span>
                        </button>
                    </form>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-slate-400 text-sm">
                        Don't have an account yet?
                        <a className="text-primary font-bold hover:underline underline-offset-4 ml-1 transition-all" href="#">Create
                            account</a>
                    </p>
                </div>
                <div className="mt-12 flex justify-center gap-6 text-[10px] text-slate-600 font-semibold uppercase tracking-widest">
                    <a className="hover:text-slate-400 transition-colors" href="#">Privacy Policy</a>
                    <a className="hover:text-slate-400 transition-colors" href="#">Terms of Service</a>
                    <a className="hover:text-slate-400 transition-colors" href="#">Support</a>
                </div>
            </main>
        </div>
    )
}

export default Login;