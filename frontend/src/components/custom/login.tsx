import { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { validateEmail } from './utils/formutils';
import { useNavigate } from 'react-router-dom';

interface LoginResponse {
    token: string;
  }

export function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        setIsEmailValid(validateEmail(emailValue));
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    };

    const handleLoginClick = async (e: React.FormEvent): Promise<void> => {
        console.log(e);
        try{
            const response = await axios.post<LoginResponse>("http://localhost:5000/api/auth/login", {
                email,
                password
            });
            localStorage.setItem("token", response.data.token);
            navigate('/dashboard');
        } catch (err) {
            console.log("Login Failed", err)
        }
    }

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Welcome to the Project!</CardTitle>
                <CardDescription>Login to automate your management</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5 mb-1">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                placeholder="Your Email Address"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                className={`${isEmailValid ? "" : "border-red-500"}`}
                            />
                            {!isEmailValid && (
                                <p className="text-red-500 text-sm">Please enter a valid email address.</p>
                            )}
                        </div>
                    </div>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5 mb-1">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                placeholder="Your Password"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button
                    disabled={
                        password == "" ||
                        email == ""
                    }
                    onClick={handleLoginClick}
                    type="button"
                >
                    Login
                </Button>
            </CardFooter>
        </Card>
    )
}