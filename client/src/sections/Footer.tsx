import { useState } from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    const [emailValue, setEmailValue] = useState<string>('')

    const inputValueHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmailValue(e.target.value)
    }

    const submitEmailHandler = (e: React.FormEvent): void => {
        e.preventDefault()
        console.log('submitted')
    }

    return (
        <footer className="w-full pt-10 px-4 md:px-8 lg:px-10 xl:px-16 bg-deepBlue text-white">
            <section className="w-full grid gap-10">
                <div className="w-full grid grid-cols-[1fr_200px_200px_1.2fr] items-stretch">
                    <div className="text-grey3 flex flex-col justify-center pr-10">
                        <p>400 University Drive, Suite 200 Coral Gables,</p>
                        <p>Ikeja, Lagos State</p>
                    </div>
                    <div className="pr-5">
                        <h4 className="mb-10 text-grey3 font-medium text-base">Links</h4>
                        <nav>
                            <ul className="flex flex-col gap-6 font-normal">
                                <li>
                                    <Link to="/" className=""><p>Home</p></Link>
                                </li>
                                <li>
                                    <Link to="#" className=""><p>Shop</p></Link>
                                </li>
                                <li>
                                    <Link to="#" className=""><p>About</p></Link>
                                </li>
                                <li>
                                    <Link to="#" className=""><p>Contact</p></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="pr-5">
                        <h4 className="mb-10 text-grey3 font-medium text-base">Help</h4>
                        <nav>
                            <ul className="flex flex-col gap-6 font-normal">
                                <li>
                                    <Link to="#" className=""><p>Payment Options</p></Link>
                                </li>
                                <li>
                                    <Link to="#" className=""><p>Returns</p></Link>
                                </li>
                                <li>
                                    <Link to="#" className=""><p>Privacy Policy</p></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-max">
                            <h4 className="mb-10 text-grey3 font-medium text-base">Newsletter</h4>
                            <form onSubmit={submitEmailHandler} className="flex gap-3 items-center">
                                <input type="email" onChange={ inputValueHandler }
                                    value={ emailValue }
                                    className="w-[200px] text-sm leading-[22px] bg-transparent border-b border-white outline-none"
                                    placeholder="Enter your email address"
                                    required
                                />
                                <button type="submit"
                                    className="w-fit bg-transparent text-sm leading-[22px] outline-none
                                    border-b border-white"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-t-[0.8px] border-grey2">
                    <p className="text-xs">2023 BuyaScale. All rights reserved.</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer