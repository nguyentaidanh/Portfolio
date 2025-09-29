import { useRef } from "react";
import LayoutSection from "./layoutsection";
import { useForm } from "react-hook-form";
import { Contact, Mail, MessageSquare, Send, UserRound } from "lucide-react";

type FormValues = {
    user_name: string;
    user_email: string;
    message: string;
    email: string;   // ✅ thêm email
    name: string;
}

export default function ContactSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        console.log(data);
        reset();
        alert("Message sent successfully!");

    }

    return (
        <LayoutSection id="contact" sectionRef={sectionRef} className="justify-center items-center">
            
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full h-full max-w-lg bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 transition-transform duration-300 hover:scale-[1.02]"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center  flex items-center justify-center  gap-2 ">
                  <Contact />  Contact Me
                </h2>

                {/* Name */}
                <label className="block mb-4">
                    <span className="text-gray-700 text-left flex items-center justify-start  gap-2 "> 
                       <UserRound />Name</span>
                    <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-indigo-400 
                       transition-shadow duration-300 shadow-sm hover:shadow-md"
                        placeholder="Your name"
                    />

                    <p className="text-sm text-red-500 mt-1">
                        {errors.name?.message ?? "\u00A0"}
                    </p>

                </label>

                {/* Email */}
                <label className="block mb-4">
                    <span className="text-gray-700 text-left  flex items-center justify-start  gap-2  ">
                        <Mail /> Email</span>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
                        })}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-indigo-400 
                       transition-shadow duration-300 shadow-sm hover:shadow-md"
                        placeholder="you@example.com"
                    />

                    <p className="text-sm text-red-500 mt-1">{errors.name?.message ?? "\u00A0"}</p>

                </label>

                {/* Message */}
                <label className="block mb-4">
                    <span className="text-gray-700 text-left   flex items-center justify-start  gap-2 ">
                        <MessageSquare />
                        Message </span>
                    <textarea
                        rows={4}
                        {...register("message", { required: "Message is required" })}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 h-32 resize-none
                       focus:outline-none focus:ring-2 focus:ring-indigo-400 
                       transition-shadow duration-300 shadow-sm hover:shadow-md"
                        placeholder="Write your message here..."
                    />

                    <p className="text-sm text-red-500 mt-1">  {errors.name?.message ?? "\u00A0"}</p>

                </label>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full  bg-indigo-600 text-white font-semibold py-3 rounded-xl 
                     shadow-lg hover:bg-indigo-700 active:scale-95  flex items-center justify-center gap-2
                     transition duration-300 ease-in-out"
                >
                  <Send />  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>

        </LayoutSection>

    )
}
