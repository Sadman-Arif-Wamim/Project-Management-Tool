import { useState } from 'react';

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
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";

type PasswordRequirements = {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
};


export function SignUp() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
    const [passwordRequirements, setPasswordRequirements] = useState<PasswordRequirements>({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
    });

    const validateEmail = (email: string): void => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(email));
    };

    const validatePassword = (password: string): void => {
        setPasswordRequirements({
            length: password.length >= 8 && password.length <= 16,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
        });
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
        validatePassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setConfirmPassword(e.target.value);
    };

    const isPasswordMatching = password === confirmPassword;

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Welcome to the Project!</CardTitle>
                <CardDescription>Sign up to automate your management</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5 mb-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your Name" />
                        </div>
                    </div>
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
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5 mb-1">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                placeholder="Confirm Your Password"
                                type="password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                className={`${isPasswordMatching ? "" : "border-red-500"}`}
                            />
                            {!isPasswordMatching && (
                                <p className="text-red-500 text-sm">Passwords do not match.</p>
                            )}
                        </div>
                    </div>
                    <Card className="mt-2 p-2 border border-gray-300">
                        <CardHeader>
                            <CardTitle className='text-md'>Password Requirements</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc space-y-1 text-sm">
                                <li className="flex items-center gap-2">
                                    {passwordRequirements.length ? (
                                        <CheckIcon className="w-5 h-5 text-green-500" />
                                    ) : (
                                        <Cross1Icon className="w-5 h-5 text-red-500" />
                                    )}
                                    <span>8-16 characters</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    {passwordRequirements.uppercase ? (
                                        <CheckIcon className="w-5 h-5 text-green-500" />
                                    ) : (
                                        <Cross1Icon className="w-5 h-5 text-red-500" />
                                    )}
                                    <span>At least one uppercase letter</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    {passwordRequirements.lowercase ? (
                                        <CheckIcon className="w-5 h-5 text-green-500" />
                                    ) : (
                                        <Cross1Icon className="w-5 h-5 text-red-500" />
                                    )}
                                    <span>At least one lowercase letter</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    {passwordRequirements.number ? (
                                        <CheckIcon className="w-5 h-5 text-green-500" />
                                    ) : (
                                        <Cross1Icon className="w-5 h-5 text-red-500" />
                                    )}
                                    <span>At least one number</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button
                    disabled={
                        !isEmailValid ||
                        !isPasswordMatching ||
                        !Object.values(passwordRequirements).every(Boolean)
                    }
                >
                    Sign Up
                </Button>
            </CardFooter>
        </Card>
    )
}
