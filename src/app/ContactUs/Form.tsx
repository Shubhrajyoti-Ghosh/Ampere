import { useState } from "react";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import './Form.css'

export default function MsgBox() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        remarks: ""
    });
    const [phone, setPhone] = useState("");
    const [emailError, setEmailError] = useState("");
    const [focusedField, setFocusedField] = useState("");
    const [typingField, setTypingField] = useState(""); 

    const isValidEmail = (email: string):boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setFormData((currData) => ({...currData, [event.target.name]: event.target.value}));
        
        if (name === "email") {
            if(!isValidEmail(value))
                setEmailError ("Please enter a valid email address.");
            else
                setEmailError("");
        }
        
        setTypingField(name);
    };

    const handleFocus = (field: string) => {
        setFocusedField(field);
    };

    const handleBlur = (field: string) => {
        if (focusedField === field) setFocusedField("");
        if (typingField === field) setTypingField("");
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setFormData ({
            fullName: "",
            email: "",
            phone: "",
            remarks: ""
        })
        if (!isValidEmail(formData.email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }
        setEmailError("");
            console.log("Form submitted");
    };
    

    const getInputClass = (field: string): string => {
        // If the field was recently typed into
        if (typingField === field) {
            if (field === "email") {
                return isValidEmail(formData.email)? "input-box green-glow" : "input-box red-glow";
            }
            return "input-box green-glow";
        }

        // If the field is currently focused
        if (focusedField === field) {
            return "input-box blue-glow";
        }

        // Default: no glow
        return "input-box";
};


    return (
        <div className="contactForm">
            <h3><i className="fa-solid fa-comment" style={{color: "#5c4033"}}/><span>We’d Love to Hear From You</span></h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Name:</label>
                <input
                    className={getInputClass("fullName")}
                    placeholder="Enter your full name"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus("fullName")}
                    onBlur={() => handleBlur("fullName")}
                    id="fullName"
                    name="fullName"
                    required
                />
                <br/>
                <label htmlFor="email">Email:</label>
                <input
                    className={getInputClass("email")}
                    placeholder="abc@example.com"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                    id="email"
                    name="email"
                    required
                />
                {emailError && (<p style={{ color: "red", marginTop: "-18px"}}>{emailError}</p>)}
                <br/>
                <label htmlFor="phone">Phone Number<span><i>{"("}Optional{")"}:</i></span></label>
                <PhoneInput
                    inputClass={getInputClass("phone")}
                    placeholder="YYYXXXXXXXXXX"
                    value={phone}
                    country={'in'}
                    onChange={setPhone}
                    onFocus={() => handleFocus("phone")}
                    onBlur={() => handleBlur("phone")}
                    inputProps={{
                        name: 'phone',
                        required: true,
                    }}
                />
                <br/>
                <label htmlFor="remarks">Message:</label>
                <textarea
                    className={getInputClass("remarks")}
                    placeholder="Send us your thoughts, suggestions, queries or grievances..."
                    value={formData.remarks}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus("remarks")}
                    onBlur={() => handleBlur("remarks")}
                    id="remarks"
                    name="remarks"
                    rows={5}
                    maxLength={500}
                    required
                />
                <p style={{
                        color: formData.remarks.length >= 500 ? "red" : formData.remarks.length >= 450 ? "orange" : "gray",
                        fontSize: "0.85rem",
                        textAlign: "right",
                        marginTop: "-20px"
                    }}>
                    {formData.remarks.length}/500 characters
                </p>
                <button type="submit"><i className="fa-solid fa-paper-plane" style={{color: "#6f42c1", fontSize: "2rem"}}/></button>
            </form>
        </div>
    );
}