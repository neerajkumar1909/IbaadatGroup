import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import './ContactForm2.css'

function ContactForm2() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message,
        };

        try {
            await axios.post("https://65af566f2f26c3f2139a7bf0.mockapi.io/ibaadatgroup", userInfo);
            toast.success("Thank You! Your message has been sent..");
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <>
            <div name="Contact" className="contactform-container">
                <h2>Contact me</h2>
                <p>Please fill out the form below to contact me</p>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="form"
                >
                    <input
                        {...register("name", { required: true })}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your fullname"
                    />
                    {errors.name && <span>This field is required</span>}

                    <input
                        {...register("email", { required: true })}
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                    />
                    {errors.email && <span>This field is required</span>}



                    <textarea
                        {...register("message", { required: true })}
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Enter your message"
                    />
                    {errors.message && <span>This field is required</span>}

                    <button type="submit" >Send</button>
                </form>
            </div >
        </>
    );
}

export default ContactForm2;
